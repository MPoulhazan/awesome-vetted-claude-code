# Awesome Vetted Claude Code

> A security-first catalog of Claude Code plugins, skills, MCP servers and the tools people hype on social media - each one read, rated and checked for CVEs.

**41 tools** · machine-readable as [`tools.json`](tools.json) · advisories refreshed weekly

Community-maintained. Not affiliated with or endorsed by Anthropic.

New tools ship every day, and many run code with your permissions, hook into every session or sit between you and the model. This list answers three questions before you install anything: **is it useful, is it safe, and what does it overlap with?**

## Security alerts

| Tool | Advisory | Severity | Fixed in |
|---|---|---|---|
| [OmniRoute](catalog/omniroute.md) | [GHSA-hf57-cqmx-p4gr](https://github.com/advisories/GHSA-hf57-cqmx-p4gr) / CVE-2026-88062 | 🚨 Critical | **No confirmed fix** |
| [Ruflo (formerly claude-flow)](catalog/ruflo.md) | [GHSA-c4hm-4h84-2cf3](https://github.com/ruvnet/ruflo/security/advisories/GHSA-c4hm-4h84-2cf3) / CVE-2026-59726 | 🚨 Critical | 3.16.3 |
| [Serena](catalog/serena.md) | [GHSA-pp25-4cg4-qcr9](https://github.com/oraios/serena/security/advisories/GHSA-pp25-4cg4-qcr9) | 🚨 Critical | 1.7.0 |
| [Claude Code Router](catalog/claude-code-router.md) | [GHSA-8hmm-4crw-vm2c](https://github.com/advisories/GHSA-8hmm-4crw-vm2c) / CVE-2025-57755 | ⚠ High | 1.0.34 |
| [GitHub MCP Server](catalog/github-mcp-server.md) | [GHSA-w4q6-qw23-4rg7](https://github.com/advisories/GHSA-w4q6-qw23-4rg7) / CVE-2026-47427 | ⚠ High | 1.1.0 |
| [Headroom](catalog/headroom.md) | [GHSA-h46j-26q3-rggf](https://github.com/advisories/GHSA-h46j-26q3-rggf) / CVE-2026-71416 | ⚠ High | 0.35.0 |
| [Playwright MCP](catalog/playwright-mcp.md) | [GHSA-6fg3-hvw7-2fwq](https://github.com/advisories/GHSA-6fg3-hvw7-2fwq) / CVE-2025-9611 | ⚠ High | 0.0.40 |
| [Repomix](catalog/repomix.md) | [GHSA-4p5g-gh74-q524](https://github.com/yamadashy/repomix/security/advisories/GHSA-4p5g-gh74-q524) | ⚠ High | 1.18.1 |
| [Repomix](catalog/repomix.md) | [GHSA-9mm9-rqhj-j5mx](https://github.com/advisories/GHSA-9mm9-rqhj-j5mx) / CVE-2026-49987 | ⚠ High | 1.14.1 |
| [Serena](catalog/serena.md) | [GHSA-37h2-6p4f-mp3q](https://github.com/advisories/GHSA-37h2-6p4f-mp3q) / CVE-2026-49471 | ⚠ High | 1.5.2 |
| [Serena](catalog/serena.md) | [GHSA-pp6p-xvxf-8hhx](https://github.com/oraios/serena/security/advisories/GHSA-pp6p-xvxf-8hhx) | ⚠ High | 2.0.0 |
| [Chrome DevTools MCP](catalog/chrome-devtools-mcp.md) | [GHSA-3pvj-jv98-qhjq](https://github.com/advisories/GHSA-3pvj-jv98-qhjq) / CVE-2026-53765 | Moderate | 1.1.0 |
| [Chrome DevTools MCP](catalog/chrome-devtools-mcp.md) | [GHSA-8qf9-62x2-82pp](https://github.com/advisories/GHSA-8qf9-62x2-82pp) / CVE-2026-53766 | Moderate | 1.1.0 |
| [GitHub MCP Server](catalog/github-mcp-server.md) | [GHSA-pjp5-fpmr-3349](https://github.com/advisories/GHSA-pjp5-fpmr-3349) / CVE-2026-48529 | Moderate | 1.1.2 |
| [graphify](catalog/graphify.md) | [GHSA-pcc4-rvhr-2pr8](https://github.com/advisories/GHSA-pcc4-rvhr-2pr8) | Moderate | 0.9.70 |
| [Repomix](catalog/repomix.md) | [GHSA-hwpp-h97w-2h3j](https://github.com/advisories/GHSA-hwpp-h97w-2h3j) / CVE-2026-49988 | Moderate | 1.14.1 |
| [Repomix](catalog/repomix.md) | [GHSA-w8cw-mgw9-74h7](https://github.com/yamadashy/repomix/security/advisories/GHSA-w8cw-mgw9-74h7) | Moderate | 1.18.0 |
| [claude-mem](catalog/claude-mem.md) | [GHSA-5gvr-v6qv-h5mm](https://github.com/advisories/GHSA-5gvr-v6qv-h5mm) / CVE-2026-11330 | Low | 12.0.0 |
| [Repomix](catalog/repomix.md) | [GHSA-rpmv-562j-qxrv](https://github.com/yamadashy/repomix/security/advisories/GHSA-rpmv-562j-qxrv) | Low | 1.18.0 |

## Catalog

Sorted by overall score. Click a tool for the full review: permissions, what leaves your machine, red flags, claims vs. independent tests, install scope.

### Claude Code plugins

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [claude-code-setup](catalog/claude-code-setup.md) | 🟢 Adopt | **4.5** | 5/5 | 43.4k | Official plugin that reads a repo and recommends hooks, skills, MCP servers and subagents for it. |
| [Superpowers](catalog/superpowers.md) | 🟢 Adopt | **4.5** | 4/5 | 302.7k | Skills framework and development methodology - brainstorm, plan, test-first, subagent-driven execution, review. |
| [Ponytail](catalog/ponytail.md) | 🔵 Trial | **4.2** | 4/5 | 170.0k | Ruleset that makes the agent write the least code a task needs, checking existing code and platform features first. |
| [wshobson/agents](catalog/wshobson-agents.md) | 🔵 Trial | **4** | 4/5 | 41.3k | Plugin marketplace with about 90 plugins - 200 specialist subagents, 185 skills and 100 commands across languages and domains. |
| [GSD Core (Get Shit Done)](catalog/gsd-core.md) | 🔵 Trial | **3.5** | 3/5 | 10.7k | Lightweight meta-prompting and spec-driven system that splits work into phases with fresh context for each. |
| [SuperClaude Framework](catalog/superclaude.md) | 🟡 Assess | **3.3** | 4/5 | 23.9k | Configuration framework adding about 30 slash commands, specialist agents, behavior modes and optional MCP servers. |
| [claude-mem](catalog/claude-mem.md) | 🟡 Assess | **2.8** | 2/5 | 102.0k | Captures what the agent does in each session, compresses it with AI and injects relevant context into later sessions. |
| [Ruflo (formerly claude-flow)](catalog/ruflo.md) | 🟡 Assess | **2.5** | 2/5 ⚠ | 77.9k | Agent orchestration platform - swarms, 98 agents, 300+ MCP tools, hooks, a daemon with background workers and cross-machine federation. |

### Skills

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Anthropic Skills](catalog/anthropic-skills.md) | 🟢 Adopt | **4.2** | 4/5 | 182.5k | Anthropic's public skills - Word, PDF, PowerPoint and Excel handling, frontend design, skill-creator and more. |
| [Agent Skills (Addy Osmani)](catalog/agent-skills.md) | 🔵 Trial | **4** | 4/5 | 109.0k | About 25 engineering-discipline skills and /spec, /plan, /build, /test, /review, /ship commands. |
| [BMad Method](catalog/bmad-method.md) | 🔵 Trial | **3.8** | 4/5 | 54.4k | Agile, AI-driven delivery method - analyst, PM, architect and dev agents producing briefs, PRDs, architecture and stories. |
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
| [container-use](catalog/container-use.md) | 🔵 Trial | **3.7** | 4/5 | 4.1k | Dagger's MCP server that gives each agent its own container and git branch, so several can work safely in parallel. |
| [Supabase MCP](catalog/supabase-mcp.md) | 🔵 Trial | **3.7** | 3/5 | 3.0k | Official Supabase MCP server - tables, SQL, migrations, logs, edge functions and docs for your projects. |
| [Serena](catalog/serena.md) | 🔵 Trial | **3.3** | 2/5 ⚠ | 30.5k | Coding toolkit that gives the agent IDE-like, symbol-level navigation and editing through language servers. |
| [21st Magic MCP](catalog/magic-mcp.md) | 🟡 Assess | **3** | 3/5 | 6.2k | Generates React UI components from a prompt using 21st.dev's component library; now part of the unified 21st MCP. |

### CLIs and local services

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [ccusage](catalog/ccusage.md) | 🟢 Adopt | **4.7** | 5/5 | 19.1k | Reads Claude Code's local logs and reports token usage and estimated cost by day, month, session or billing block. |
| [Spec Kit](catalog/spec-kit.md) | 🟢 Adopt | **4.3** | 5/5 | 142.2k | GitHub's toolkit for spec-driven development - constitution, spec, plan, tasks, then implementation. |
| [Claude Squad](catalog/claude-squad.md) | 🔵 Trial | **4** | 4/5 | 8.6k | Terminal app that runs several Claude Code, Codex or other agents in parallel, each in its own tmux session and git worktree. |
| [ccstatusline](catalog/ccstatusline.md) | 🟢 Adopt | **3.8** | 4/5 | 13.4k | Customizable Claude Code status line - model, git branch, token usage, context and more, with powerline themes. |
| [Repomix](catalog/repomix.md) | 🔵 Trial | **3.8** | 3/5 ⚠ | 28.9k | Packs a whole repository into one AI-friendly file, with token counts and secret scanning; also runs as an MCP server. |
| [graphify](catalog/graphify.md) | 🔵 Trial | **3.7** | 3/5 | 130.4k | Turns a folder of code, docs, schemas and PDFs into a queryable knowledge graph your agent can navigate. |
| [opcode (formerly Claudia)](catalog/opcode.md) | 🟡 Assess | **3** | 3/5 | 22.4k | Desktop GUI for Claude Code - projects and sessions, custom agents, background runs, usage analytics and MCP management. |
| [Vibe Kanban](catalog/vibe-kanban.md) | 🔴 Hold | **3** | 3/5 | 28.4k | Kanban board that hands tasks to coding agents, each in its own worktree, and lets you review their diffs. |
| [Headroom](catalog/headroom.md) | 🟡 Assess | **2.8** | 2/5 ⚠ | 76.8k | Compresses tool outputs, logs, files and RAG chunks before they reach the model. Library, proxy, agent wrapper or MCP server. |

### CI and GitHub Actions

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Claude Code Security Review](catalog/claude-code-security-review.md) | 🟢 Adopt | **3.3** | 3/5 | 6.5k | Anthropic's GitHub Action that reviews pull requests for vulnerabilities, and the source of the built-in /security-review command. |

### Gateways and proxies

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Claude Code Router](catalog/claude-code-router.md) | 🟡 Assess | **3.3** | 3/5 ⚠ | 37.8k | Local gateway that routes Claude Code and other agents to the model and provider you choose, with a web UI. |
| [OmniRoute](catalog/omniroute.md) | 🔴 Hold | **1.5** | 1/5 🚨 | 79.0k | Self-hosted OpenAI-compatible gateway in front of hundreds of LLM providers, with quota-aware fallback. |

### UI libraries

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [shadcn/ui](catalog/shadcn-ui.md) | 🟢 Adopt | **5** | 5/5 | 126.1k | Accessible, composable React components you copy into your codebase with a CLI, plus the registry format most kits build on. |
| [Magic UI](catalog/magic-ui.md) | 🟢 Adopt | **4.5** | 5/5 | 22.8k | Free, open-source animated components and effects for React, Tailwind and Motion, installed through the shadcn CLI. |
| [Kokonut UI](catalog/kokonut-ui.md) | 🔵 Trial | **4.3** | 5/5 | 2.2k | Polished React components built on Tailwind, shadcn/ui and Motion, copied into your project. |
| [React Bits](catalog/react-bits.md) | 🟢 Adopt | **4.3** | 5/5 | 49.8k | Large library of animated, interactive React components - text effects, backgrounds, cursors. |
| [Bklit UI](catalog/bklit-ui.md) | 🟡 Assess | **3.8** | 5/5 | 1.8k | Open-source shadcn-style chart and utility components, plus a shadcn skill for agents. |

### Animation libraries

| Tool | Verdict | Overall | Security | Stars | What it does |
|---|---|---|---|---|---|
| [Motion (formerly Framer Motion)](catalog/motion.md) | 🟢 Adopt | **4.7** | 5/5 | 34.4k | Production animation library for React and JavaScript - gestures, layout and scroll animations, springs. |
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
