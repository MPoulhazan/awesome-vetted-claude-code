# Ruflo (formerly claude-flow)

> Agent orchestration platform - swarms, 98 agents, 300+ MCP tools, hooks, a daemon with background workers and cross-machine federation.

**Verdict: 🟡 Assess** · Overall **2.5/5** · [ruvnet/ruflo](https://github.com/ruvnet/ruflo)

Ambitious and hugely popular, but the full install is a large attack surface - hooks, daemon, 300+ tools, federation - and it had a critical unauthenticated RCE. Only for people who need swarms and will read what they install.

> [!WARNING]
> **GHSA-c4hm-4h84-2cf3** (critical): update to the fixed version or later.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 2/5 | 3/5 | 2/5 |

## What problem it solves

Coordinating many agents on large autonomous tasks. Ruflo routes tasks, spawns swarms, keeps memory and runs workers in the background.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | Yes | Opens a local port / proxy | Yes |

**What leaves your machine:** With federation enabled, tasks and results are exchanged with agents on other machines.

The full install registers hooks that route every task, starts a daemon with a dozen auto-triggered background workers, and exposes an MCP server with hundreds of tools. Releases ship almost daily.

**Red flags**

- Renamed from claude-flow; old npm and repo names still circulate.
- Very large surface area for a single-maintainer project.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-c4hm-4h84-2cf3](https://github.com/ruvnet/ruflo/security/advisories/GHSA-c4hm-4h84-2cf3)<br>CVE-2026-59726 | 🚨 Critical | Unauthenticated remote code execution in the MCP bridge of the default docker-compose deployment. | < 3.16.3 | 3.16.3 |

## Install

Recommended scope: Per project (`.claude/`)

```
npx ruflo@latest init wizard
```

The plugin-only install (no hooks, no daemon) is much lighter than the full `init`. Don't use the default docker-compose deployment on a reachable network.

## Facts

- **Category:** Claude Code plugins
- **License:** MIT
- **Maintainer:** individual
- **Stars:** 77.9k · last push 2026-10-21 · latest release v3.59.4
- **Tags:** multi-agent, swarms, orchestration, mcp
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/ruvnet/ruflo
- https://github.com/ruvnet/ruflo/security/advisories/GHSA-c4hm-4h84-2cf3

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/ruflo.yaml)
