// Validates data/*.yaml, merges generated/live.json, and writes tools.json,
// README.md and catalog/<id>.md. Output is deterministic so CI can diff it.
import { writeFileSync, readFileSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { ROOT, loadTools, loadLive } from "./lib.mjs";

const REPO_URL = "https://github.com/MPoulhazan/awesome-vetted-claude-code";
const RAW_URL = "https://raw.githubusercontent.com/MPoulhazan/awesome-vetted-claude-code/main/tools.json";

const CATEGORIES = {
  plugin: "Claude Code plugins",
  skill: "Skills",
  cli: "CLIs and local services",
  "mcp-server": "MCP servers",
  gateway: "Gateways and proxies",
  "ui-library": "UI libraries",
  "animation-library": "Animation libraries",
};
const VERDICTS = {
  adopt: "🟢 Adopt",
  trial: "🔵 Trial",
  assess: "🟡 Assess",
  hold: "🔴 Hold",
};
const SEVERITY_RANK = { low: 1, moderate: 2, high: 3, critical: 4 };
const SEVERITY_LABEL = { low: "Low", moderate: "Moderate", high: "⚠ High", critical: "🚨 Critical" };
const NETWORK = {
  none: "No network",
  "llm-api": "Model API only",
  "third-party": "Sends data to a third party",
  listens: "Opens a local port / proxy",
};
const SCOPE = {
  user: "User-wide (`~/.claude`)",
  project: "Per project (`.claude/`)",
  dependency: "Project dependency",
  "one-shot": "Run when needed",
};

// --- validate ---------------------------------------------------------------

const ajv = new Ajv2020({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(JSON.parse(readFileSync(join(ROOT, "schema", "tool.schema.json"), "utf8")));

const entries = loadTools();
const errors = [];
for (const { file, tool } of entries) {
  if (!validate(tool)) errors.push(...validate.errors.map((e) => `${file}: ${e.instancePath || "/"} ${e.message}`));
  if (`${tool.id}.yaml` !== file) errors.push(`${file}: id "${tool.id}" must match the file name`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

// --- merge and score ----------------------------------------------------------

const live = loadLive();

function mergeAdvisories(tool) {
  // Curated entries win: reviewers may correct a range or drop an unconfirmed fix.
  const byId = new Map((live[tool.id]?.advisories ?? []).map((a) => [a.id, { ...a, auto: true }]));
  for (const a of tool.security.advisories ?? []) byId.set(a.id, a);
  return [...byId.values()].sort(
    (a, b) => SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity] || a.id.localeCompare(b.id),
  );
}

// Usefulness and security count double. An unfixed high or critical advisory, or an
// archived repo, caps the score whatever the other numbers say.
function overall(tool, alerts, archived) {
  const s = tool.scores;
  let score = (2 * s.usefulness + 2 * s.security + s.maturity + s.cost) / 6;
  if (alerts.some((a) => a.level === "unpatched")) score = Math.min(score, 1.5);
  if (archived) score = Math.min(score, 2);
  return Math.round(score * 10) / 10;
}

const tools = entries.map(({ tool }) => {
  const advisories = mergeAdvisories(tool);
  const alerts = advisories
    .filter((a) => SEVERITY_RANK[a.severity] >= SEVERITY_RANK.high)
    .map((a) => ({ advisory: a.id, severity: a.severity, level: a.patched ? "update-required" : "unpatched" }));
  const l = live[tool.id] ?? {};
  return {
    ...tool,
    security: { ...tool.security, advisories },
    live: l.missing ? { missing: true } : l.stars === undefined ? null : {
      stars: l.stars,
      pushed_at: l.pushed_at,
      archived: l.archived,
      latest_release: l.latest_release,
    },
    alerts,
    overall: overall(tool, alerts, l.archived),
  };
});
tools.sort((a, b) => b.overall - a.overall || a.name.localeCompare(b.name));

// --- tools.json ----------------------------------------------------------------

writeFileSync(
  join(ROOT, "tools.json"),
  JSON.stringify({ schema_version: 1, source: REPO_URL, count: tools.length, tools }, null, 2) + "\n",
);

// --- catalog pages -------------------------------------------------------------

const stars = (t) => (t.live?.stars === undefined ? "–" : t.live.stars >= 1000 ? `${(t.live.stars / 1000).toFixed(1)}k` : `${t.live.stars}`);
const yes = (b) => (b ? "Yes" : "No");
const list = (items) => items.map((i) => `- ${i}`).join("\n");
const advisoryRow = (a) =>
  `| [${a.id}](${a.url})${a.cve ? `<br>${a.cve}` : ""} | ${SEVERITY_LABEL[a.severity]} | ${a.summary}${a.auto ? " _(auto-detected, not reviewed yet)_" : ""} | ${a.affected ?? "–"} | ${a.patched ?? "**No confirmed fix**"} |`;

function page(t) {
  const sec = t.security;
  const out = [
    `# ${t.name}`,
    "",
    `> ${t.summary}`,
    "",
    `**Verdict: ${VERDICTS[t.verdict]}** · Overall **${t.overall}/5** · [${t.repo}](https://github.com/${t.repo})${t.homepage ? ` · [Website](${t.homepage})` : ""}`,
    "",
    t.verdict_reason ?? "",
    "",
  ];
  if (t.alerts.length) {
    out.push(
      ...t.alerts.map((a) =>
        a.level === "unpatched"
          ? `> [!CAUTION]\n> **${a.advisory}** (${a.severity}) has no confirmed fix. Don't run this tool until it does.`
          : `> [!WARNING]\n> **${a.advisory}** (${a.severity}): update to the fixed version or later.`,
      ),
      "",
    );
  }
  out.push(
    "## Scores",
    "",
    "| Usefulness | Security | Maturity | Cost |",
    "|---|---|---|---|",
    `| ${t.scores.usefulness}/5 | ${t.scores.security}/5 | ${t.scores.maturity}/5 | ${t.scores.cost}/5 |`,
    "",
    "## What problem it solves",
    "",
    t.problem,
    "",
    "## Security",
    "",
    "| Runs code | Hooks | Network | Background process |",
    "|---|---|---|---|",
    `| ${yes(sec.runs_code)} | ${yes(sec.hooks)} | ${NETWORK[sec.network]} | ${yes(sec.background_process)} |`,
    "",
  );
  if (sec.data_leaves_machine) out.push(`**What leaves your machine:** ${sec.data_leaves_machine}`, "");
  out.push(sec.notes, "");
  if (sec.red_flags?.length) out.push("**Red flags**", "", list(sec.red_flags), "");
  out.push("### Advisories", "");
  out.push(
    sec.advisories.length
      ? ["| Advisory | Severity | Summary | Affected | Fixed in |", "|---|---|---|---|---|", ...sec.advisories.map(advisoryRow)].join("\n")
      : "None published in the GitHub Advisory Database as of the last refresh.",
    "",
    "## Install",
    "",
    `Recommended scope: ${SCOPE[t.install.scope]}`,
    "",
    "```",
    ...t.install.commands,
    "```",
    "",
  );
  if (t.install.notes) out.push(t.install.notes, "");
  if (t.claims?.length) {
    out.push(
      "## Claims",
      "",
      "| Claim | Independent | Source |",
      "|---|---|---|",
      ...t.claims.map((c) => `| ${c.claim} | ${c.independent ? "Yes" : "No, vendor's own"} | ${c.source ? `[link](${c.source})` : "–"} |`),
      "",
    );
  }
  out.push(
    "## Facts",
    "",
    `- **Category:** ${CATEGORIES[t.category]}`,
    `- **License:** ${t.license}${t.license_notes ? ` - ${t.license_notes}` : ""}`,
    ...(t.maintainer ? [`- **Maintainer:** ${t.maintainer}`] : []),
    `- **Stars:** ${stars(t)}${t.live?.pushed_at ? ` · last push ${t.live.pushed_at}` : ""}${t.live?.latest_release ? ` · latest release ${t.live.latest_release}` : ""}${t.live?.archived ? " · **archived**" : ""}`,
    ...(t.overlaps?.length ? [`- **Overlaps with:** ${t.overlaps.join(", ")} - pick one`] : []),
    ...(t.tags?.length ? [`- **Tags:** ${t.tags.join(", ")}`] : []),
    `- **Last reviewed:** ${t.last_reviewed}`,
    "",
    "## Sources",
    "",
    list(t.sources),
    "",
    `---`,
    `[Back to the catalog](../README.md) · [Edit this entry](${REPO_URL}/edit/main/data/${t.id}.yaml)`,
    "",
  );
  return out.join("\n");
}

rmSync(join(ROOT, "catalog"), { recursive: true, force: true });
mkdirSync(join(ROOT, "catalog"));
for (const t of tools) writeFileSync(join(ROOT, "catalog", `${t.id}.md`), page(t));

// --- README --------------------------------------------------------------------

const alertTools = tools.filter((t) => t.security.advisories.length);
const securityCell = (t) => {
  const worst = t.alerts.find((a) => a.level === "unpatched") ?? t.alerts[0];
  const badge = worst ? (worst.level === "unpatched" ? " 🚨" : " ⚠") : "";
  return `${t.scores.security}/5${badge}`;
};
const row = (t) =>
  `| [${t.name}](catalog/${t.id}.md) | ${VERDICTS[t.verdict]} | **${t.overall}** | ${securityCell(t)} | ${stars(t)} | ${t.summary} |`;

const readme = [
  "# Awesome Vetted Claude Code",
  "",
  "> A security-first catalog of Claude Code plugins, skills, MCP servers and the tools people hype on social media - each one read, rated and checked for CVEs.",
  "",
  `**${tools.length} tools** · machine-readable as [\`tools.json\`](tools.json) · advisories refreshed weekly`,
  "",
  "Community-maintained. Not affiliated with or endorsed by Anthropic.",
  "",
  "New tools ship every day, and many run code with your permissions, hook into every session or sit between you and the model. This list answers three questions before you install anything: **is it useful, is it safe, and what does it overlap with?**",
  "",
  "## Security alerts",
  "",
  alertTools.length
    ? [
        "| Tool | Advisory | Severity | Fixed in |",
        "|---|---|---|---|",
        ...alertTools
          .flatMap((t) => t.security.advisories.map((a) => ({ t, a })))
          .sort((x, y) => SEVERITY_RANK[y.a.severity] - SEVERITY_RANK[x.a.severity] || x.t.name.localeCompare(y.t.name))
          .map(
            ({ t, a }) =>
              `| [${t.name}](catalog/${t.id}.md) | [${a.id}](${a.url})${a.cve ? ` / ${a.cve}` : ""} | ${SEVERITY_LABEL[a.severity]} | ${a.patched ?? "**No confirmed fix**"} |`,
          ),
      ].join("\n")
    : "No published advisories for any listed tool.",
  "",
  "## Catalog",
  "",
  "Sorted by overall score. Click a tool for the full review: permissions, what leaves your machine, red flags, claims vs. independent tests, install scope.",
  "",
  ...Object.entries(CATEGORIES).flatMap(([key, title]) => {
    const inCat = tools.filter((t) => t.category === key);
    if (!inCat.length) return [];
    return [`### ${title}`, "", "| Tool | Verdict | Overall | Security | Stars | What it does |", "|---|---|---|---|---|---|", ...inCat.map(row), ""];
  }),
  "## How tools are rated",
  "",
  "**Verdicts** (borrowed from tech radars)",
  "",
  "- 🟢 **Adopt** - safe default, use it.",
  "- 🔵 **Trial** - worth trying on one project; easy to remove.",
  "- 🟡 **Assess** - interesting, but read the caveats first.",
  "- 🔴 **Hold** - don't install now (usually an unfixed advisory or risky data flow).",
  "",
  "**Scores** are 1-5 for usefulness, security, maturity and cost (5 = free and light). Overall = (2 × usefulness + 2 × security + maturity + cost) / 6, capped at 1.5 while a high or critical advisory has no confirmed fix, and at 2 for archived repos.",
  "",
  "**Security score**",
  "",
  "| Score | Meaning |",
  "|---|---|",
  "| 5 | Instructions or source copied into your repo. No background process, no extra network. |",
  "| 4 | Runs code or hooks locally, narrow scope, reputable maintainer, no open advisory. |",
  "| 3 | Hooks into every session, or sends your content to a model or service, or had a fixed moderate advisory. |",
  "| 2 | Sits in the path of all your traffic or stores everything the agent sees, or had a fixed high advisory. |",
  "| 1 | Unfixed high or critical advisory, or dangerous defaults. |",
  "",
  "## Use the data",
  "",
  `Every entry follows [\`schema/tool.schema.json\`](schema/tool.schema.json). Fetch the whole catalog from \`${RAW_URL}\`.`,
  "",
  "Each tool lists how to detect it (`detect.plugins`, `detect.skills`, `detect.npm`, `detect.pypi`) and every advisory with its affected range and fixed version, so a dashboard can warn you when something you have installed is vulnerable.",
  "",
  "## Contributing",
  "",
  "Add or update a tool by editing one YAML file in [`data/`](data/) - see [CONTRIBUTING.md](CONTRIBUTING.md). With Claude Code, open this repo and run `/scout <tool or URL>`: it researches the tool, fills in the review and runs the build.",
  "",
  "Never edit `README.md`, `tools.json` or `catalog/` by hand; `npm run build` generates them.",
  "",
  "## License",
  "",
  "[CC0 1.0](LICENSE) - reuse the data anywhere, no attribution required.",
  "",
].join("\n");
writeFileSync(join(ROOT, "README.md"), readme);

console.log(`Built ${tools.length} tools (${alertTools.length} with advisories).`);
