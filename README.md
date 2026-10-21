# Awesome Vetted Claude Code

> A security-first catalog of Claude Code plugins, skills, MCP servers and the tools people hype on social media - each one read, rated and checked for CVEs.

**23 tools** · machine-readable as [`tools.json`](tools.json) · advisories refreshed weekly

Community-maintained. Not affiliated with or endorsed by Anthropic.

New tools ship every day, and many run code with your permissions, hook into every session or sit between you and the model. This list answers three questions before you install anything: **is it useful, is it safe, and what does it overlap with?**

## Security alerts

| Tool | Advisory | Severity | Fixed in |
|---|---|---|---|
| [OmniRoute](catalog/omniroute.md) | [GHSA-hf57-cqmx-p4gr](https://github.com/advisories/GHSA-hf57-cqmx-p4gr) / CVE-2026-88062 | 🚨 Critical | **No confirmed fix** |
| [Serena](catalog/serena.md) | [GHSA-pp25-4cg4-qcr9](https://github.com/oraios/serena/security/advisories/GHSA-pp25-4cg4-qcr9) | 🚨 Critical | 1.7.0 |
| [GitHub MCP Server](catalog/github-mcp-server.md) | [GHSA-w4q6-qw23-4rg7](https://github.com/advisories/GHSA-w4q6-qw23-4rg7) / CVE-2026-47427 | ⚠ High | 1.1.0 |
| [Headroom](catalog/headroom.md) | [GHSA-h46j-26q3-rggf](https://github.com/advisories/GHSA-h46j-26q3-rggf) / CVE-2026-71416 | ⚠ High | 0.35.0 |
| [Playwright MCP](catalog/playwright-mcp.md) | [GHSA-6fg3-hvw7-2fwq](https://github.com/advisories/GHSA-6fg3-hvw7-2fwq) / CVE-2025-9611 | ⚠ High | 0.0.40 |
| [Serena](catalog/serena.md) | [GHSA-37h2-6p4f-mp3q](https://github.com/advisories/GHSA-37h2-6p4f-mp3q) / CVE-2026-49471 | ⚠ High | 1.5.2 |
| [Serena](catalog/serena.md) | [GHSA-pp6p-xvxf-8hhx](https://github.com/oraios/serena/security/advisories/GHSA-pp6p-xvxf-8hhx) | ⚠ High | 2.0.0 |
| [Chrome DevTools MCP](catalog/chrome-devtools-mcp.md) | [GHSA-3pvj-jv98-qhjq](https://github.com/advisories/GHSA-3pvj-jv98-qhjq) / CVE-2026-53765 | Moderate | 1.1.0 |
| [Chrome DevTools MCP](catalog/chrome-devtools-mcp.md) | [GHSA-8qf9-62x2-82pp](https://github.com/advisories/GHSA-8qf9-62x2-82pp) / CVE-2026-53766 | Moderate | 1.1.0 |
| [GitHub MCP Server](catalog/github-mcp-server.md) | [GHSA-pjp5-fpmr-3349](https://github.com/advisories/GHSA-pjp5-fpmr-3349) / CVE-2026-48529 | Moderate | 1.1.2 |
| [graphify](catalog/graphify.md) | [GHSA-pcc4-rvhr-2pr8](https://github.com/advisories/GHSA-pcc4-rvhr-2pr8) | Moderate | 0.9.70 |
| [claude-mem](catalog/claude-mem.md) | [GHSA-5gvr-v6qv-h5mm](https://github.com/advisories/GHSA-5gvr-v6qv-h5mm) / CVE-2026-11330 | Low | 12.0.0 |

## Catalog

Sorted by overall score. Click a tool for the full review: permissions, what leaves your machine, red flags, claims vs. independent tests, install scope.

### Claude Code plugins

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [claude-code-setup](catalog/claude-code-setup.md) | 🟢 Adopt | **4.5** | 5/5 | 43.4k | Official plugin that reads a repo and recommends hooks, skills, MCP servers and subagents for it. |
| [Ponytail](catalog/ponytail.md) | 🔵 Trial | **4.2** | 4/5 | 170.0k | Ruleset that makes the agent write the least code a task needs, checking existing code and platform features first. |
| [claude-mem](catalog/claude-mem.md) | 🟡 Assess | **2.8** | 2/5 | 102.0k | Captures what the agent does in each session, compresses it with AI and injects relevant context into later sessions. |

### Skills

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Anthropic Skills](catalog/anthropic-skills.md) | 🟢 Adopt | **4.2** | 4/5 | 182.5k | Anthropic's public skills - Word, PDF, PowerPoint and Excel handling, frontend design, skill-creator and more. |
| [Agent Skills (Addy Osmani)](catalog/agent-skills.md) | 🔵 Trial | **4** | 4/5 | 109.0k | About 25 engineering-discipline skills and /spec, /plan, /build, /test, /review, /ship commands. |
| [brag](catalog/brag.md) | 🔵 Trial | **3.5** | 4/5 | 17.2k | Skill that turns the project you just built into a short launch video with music, motion and share copy. |
| [task-observer](catalog/task-observer.md) | 🟡 Assess | **3.3** | 4/5 | 3.5k | Meta-skill that watches your sessions and logs what should become a new skill or a skill fix, for your review. |

### MCP servers

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Context7](catalog/context7.md) | 🟢 Adopt | **4.5** | 4/5 | 63.4k | Feeds the agent current, version-specific library documentation and code examples, as an MCP server or a CLI plus skill. |
| [GitHub MCP Server](catalog/github-mcp-server.md) | 🟢 Adopt | **4.2** | 3/5 ⚠ | 33.8k | GitHub's official MCP server - issues, pull requests, code search, Actions and more, hosted or local. |
| [Sentry MCP](catalog/sentry-mcp.md) | 🟢 Adopt | **4.2** | 4/5 | 936 | Sentry's hosted MCP server - issues, stack traces, traces and Seer analysis, built for debugging in the editor. |
| [Playwright MCP](catalog/playwright-mcp.md) | 🟢 Adopt | **4** | 3/5 ⚠ | 38.4k | Microsoft's MCP server that lets the agent drive a real browser through Playwright's accessibility snapshots. |
| [Chrome DevTools MCP](catalog/chrome-devtools-mcp.md) | 🟢 Adopt | **3.7** | 3/5 | 53.9k | Google's MCP server giving the agent Chrome DevTools - console, network, performance traces and page control. |
| [Supabase MCP](catalog/supabase-mcp.md) | 🔵 Trial | **3.7** | 3/5 | 3.0k | Official Supabase MCP server - tables, SQL, migrations, logs, edge functions and docs for your projects. |
| [Serena](catalog/serena.md) | 🔵 Trial | **3.3** | 2/5 ⚠ | 30.5k | Coding toolkit that gives the agent IDE-like, symbol-level navigation and editing through language servers. |
| [21st Magic MCP](catalog/magic-mcp.md) | 🟡 Assess | **3** | 3/5 | 6.2k | Generates React UI components from a prompt using 21st.dev's component library; now part of the unified 21st MCP. |

### CLIs and local services

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [graphify](catalog/graphify.md) | 🔵 Trial | **3.7** | 3/5 | 130.4k | Turns a folder of code, docs, schemas and PDFs into a queryable knowledge graph your agent can navigate. |
| [Headroom](catalog/headroom.md) | 🟡 Assess | **2.8** | 2/5 ⚠ | 76.8k | Compresses tool outputs, logs, files and RAG chunks before they reach the model. Library, proxy, agent wrapper or MCP server. |

### CI and GitHub Actions

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Claude Code Security Review](catalog/claude-code-security-review.md) | 🟢 Adopt | **3.3** | 3/5 | 6.5k | Anthropic's GitHub Action that reviews pull requests for vulnerabilities, and the source of the built-in /security-review command. |

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
