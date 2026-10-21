# Awesome Vetted Claude Code

> A security-first catalog of Claude Code plugins, skills, MCP servers and the tools people hype on social media - each one read, rated and checked for CVEs.

**13 tools** · machine-readable as [`tools.json`](tools.json) · advisories refreshed weekly

Community-maintained. Not affiliated with or endorsed by Anthropic.

New tools ship every day, and many run code with your permissions, hook into every session or sit between you and the model. This list answers three questions before you install anything: **is it useful, is it safe, and what does it overlap with?**

## Security alerts

| Tool | Advisory | Severity | Fixed in |
|---|---|---|---|
| [OmniRoute](catalog/omniroute.md) | [GHSA-hf57-cqmx-p4gr](https://github.com/advisories/GHSA-hf57-cqmx-p4gr) / CVE-2026-88062 | 🚨 Critical | **No confirmed fix** |
| [Headroom](catalog/headroom.md) | [GHSA-h46j-26q3-rggf](https://github.com/advisories/GHSA-h46j-26q3-rggf) / CVE-2026-71416 | ⚠ High | 0.35.0 |
| [graphify](catalog/graphify.md) | [GHSA-pcc4-rvhr-2pr8](https://github.com/advisories/GHSA-pcc4-rvhr-2pr8) | Moderate | 0.9.70 |
| [claude-mem](catalog/claude-mem.md) | [GHSA-5gvr-v6qv-h5mm](https://github.com/advisories/GHSA-5gvr-v6qv-h5mm) / CVE-2026-11330 | Low | 12.0.0 |

## Catalog

Sorted by overall score. Click a tool for the full review: permissions, what leaves your machine, red flags, claims vs. independent tests, install scope.

### Claude Code plugins

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [claude-code-setup](catalog/claude-code-setup.md) | 🟢 Adopt | **4.5** | 5/5 | 43.4k | Official plugin that reads a repo and recommends hooks, skills, MCP servers and subagents for it. |
| [Ponytail](catalog/ponytail.md) | 🔵 Trial | **4.2** | 4/5 | 169.9k | Ruleset that makes the agent write the least code a task needs, checking existing code and platform features first. |
| [claude-mem](catalog/claude-mem.md) | 🟡 Assess | **2.8** | 2/5 | 102.0k | Captures what the agent does in each session, compresses it with AI and injects relevant context into later sessions. |

### Skills

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Agent Skills (Addy Osmani)](catalog/agent-skills.md) | 🔵 Trial | **4** | 4/5 | 109.0k | About 25 engineering-discipline skills and /spec, /plan, /build, /test, /review, /ship commands. |
| [brag](catalog/brag.md) | 🔵 Trial | **3.5** | 4/5 | 17.2k | Skill that turns the project you just built into a short launch video with music, motion and share copy. |
| [task-observer](catalog/task-observer.md) | 🟡 Assess | **3.3** | 4/5 | 3.5k | Meta-skill that watches your sessions and logs what should become a new skill or a skill fix, for your review. |

### CLIs and local services

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [graphify](catalog/graphify.md) | 🔵 Trial | **3.7** | 3/5 | 130.4k | Turns a folder of code, docs, schemas and PDFs into a queryable knowledge graph your agent can navigate. |
| [Headroom](catalog/headroom.md) | 🟡 Assess | **2.8** | 2/5 ⚠ | 76.8k | Compresses tool outputs, logs, files and RAG chunks before they reach the model. Library, proxy, agent wrapper or MCP server. |

### Gateways and proxies

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [OmniRoute](catalog/omniroute.md) | 🔴 Hold | **1.5** | 1/5 🚨 | 79.0k | Self-hosted OpenAI-compatible gateway in front of hundreds of LLM providers, with quota-aware fallback. |

### UI libraries

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Kokonut UI](catalog/kokonut-ui.md) | 🔵 Trial | **4.3** | 5/5 | 2.2k | Polished React components built on Tailwind, shadcn/ui and Motion, copied into your project. |
| [React Bits](catalog/react-bits.md) | 🟢 Adopt | **4.3** | 5/5 | 49.8k | Large library of animated, interactive React components - text effects, backgrounds, cursors. |
| [Bklit UI](catalog/bklit-ui.md) | 🟡 Assess | **3.8** | 5/5 | 1.8k | Open-source shadcn-style chart and utility components, plus a shadcn skill for agents. |

### Animation libraries

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [anime.js](catalog/anime-js.md) | 🟢 Adopt | **4.3** | 5/5 | 73.7k | Lightweight JavaScript animation engine for DOM, SVG, CSS and JS objects; v4 is a modular ESM rewrite. |

## How tools are rated

**Verdicts** (borrowed from tech radars)

- 🟢 **Adopt** - safe default, use it.
- 🔵 **Trial** - worth trying on one project; easy to remove.
- 🟡 **Assess** - interesting, but read the caveats first.
- 🔴 **Hold** - don't install now (usually an unfixed advisory or risky data flow).

**Scores** are 1-5 for usefulness, security, maturity and cost (5 = free and light). Overall = (2 × usefulness + 2 × security + maturity + cost) / 6, capped at 1.5 while a high or critical advisory has no confirmed fix, and at 2 for archived repos.

**Security score**

| Score | Meaning |
|---|---|
| 5 | Instructions or source copied into your repo. No background process, no extra network. |
| 4 | Runs code or hooks locally, narrow scope, reputable maintainer, no open advisory. |
| 3 | Hooks into every session, or sends your content to a model or service, or had a fixed moderate advisory. |
| 2 | Sits in the path of all your traffic or stores everything the agent sees, or had a fixed high advisory. |
| 1 | Unfixed high or critical advisory, or dangerous defaults. |

## Use the data

Every entry follows [`schema/tool.schema.json`](schema/tool.schema.json). Fetch the whole catalog from `https://raw.githubusercontent.com/MPoulhazan/awesome-vetted-claude-code/main/tools.json`.

Each tool lists how to detect it (`detect.plugins`, `detect.skills`, `detect.npm`, `detect.pypi`) and every advisory with its affected range and fixed version, so a dashboard can warn you when something you have installed is vulnerable.

## Contributing

Add or update a tool by editing one YAML file in [`data/`](data/) - see [CONTRIBUTING.md](CONTRIBUTING.md). With Claude Code, open this repo and run `/scout <tool or URL>`: it researches the tool, fills in the review and runs the build.

Never edit `README.md`, `tools.json` or `catalog/` by hand; `npm run build` generates them.

## License

[CC0 1.0](LICENSE) - reuse the data anywhere, no attribution required.
