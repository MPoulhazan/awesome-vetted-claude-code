# Ruflo (formerly claude-flow)

> Agent orchestration platform - swarms, 98 agents, 300+ MCP tools, hooks, a daemon with background workers and cross-machine federation.

**Verdict: 🟡 Assess** · Overall **2.5/5** · [ruvnet/ruflo](https://github.com/ruvnet/ruflo)

Ambitious and hugely popular, but the full install is a large attack surface - hooks, daemon, 300+ tools, federation - and it had a critical unauthenticated RCE. Only for people who need swarms and will read what they install.

> [!WARNING]
> **GHSA-5pxg-x8g8-fw4j** (critical): update to the fixed version or later.
> [!WARNING]
> **GHSA-c4hm-4h84-2cf3** (critical): update to the fixed version or later.
> [!WARNING]
> **GHSA-6rwv-52g2-vx7j** (high): update to the fixed version or later.
> [!WARNING]
> **GHSA-8jjw-xqg5-7pvx** (high): update to the fixed version or later.
> [!WARNING]
> **GHSA-hgp6-gm2j-hx55** (high): update to the fixed version or later.
> [!WARNING]
> **GHSA-vqpp-qh58-2p7h** (high): update to the fixed version or later.

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
| [GHSA-5pxg-x8g8-fw4j](https://github.com/ruvnet/ruflo/security/advisories/GHSA-5pxg-x8g8-fw4j) | 🚨 Critical | browser_open passes caller-supplied Chromium launch flags, allowing command execution _(auto-detected, not reviewed yet)_ | <= 3.71.3 | 3.71.4 |
| [GHSA-c4hm-4h84-2cf3](https://github.com/ruvnet/ruflo/security/advisories/GHSA-c4hm-4h84-2cf3)<br>CVE-2026-59726 | 🚨 Critical | Unauthenticated remote code execution in the MCP bridge of the default docker-compose deployment. | < 3.16.3 | 3.16.3 |
| [GHSA-6rwv-52g2-vx7j](https://github.com/ruvnet/ruflo/security/advisories/GHSA-6rwv-52g2-vx7j) | ⚠ High | Prototype pollution through "__proto__" ids in the agent, task and terminal stores _(auto-detected, not reviewed yet)_ | <= 3.71.3 | 3.71.4 |
| [GHSA-8jjw-xqg5-7pvx](https://github.com/ruvnet/ruflo/security/advisories/GHSA-8jjw-xqg5-7pvx) | ⚠ High | ruvocal mcp-bridge: a web page can drive the bridge on loopback when no token is set (CORS * and DNS rebinding) _(auto-detected, not reviewed yet)_ | <= 3.71.3 | 3.71.4 |
| [GHSA-hgp6-gm2j-hx55](https://github.com/ruvnet/ruflo/security/advisories/GHSA-hgp6-gm2j-hx55) | ⚠ High | ruvocal: SSRF through user-supplied MCP server URLs _(auto-detected, not reviewed yet)_ | <= 3.71.3 | 3.71.4 |
| [GHSA-vqpp-qh58-2p7h](https://github.com/ruvnet/ruflo/security/advisories/GHSA-vqpp-qh58-2p7h) | ⚠ High | memory_export writes to an arbitrary path and memory_import reads one _(auto-detected, not reviewed yet)_ | <= 3.71.3 | 3.71.4 |
| [GHSA-hmmg-9p82-2m6q](https://github.com/ruvnet/ruflo/security/advisories/GHSA-hmmg-9p82-2m6q) | Moderate | x.ruv.io gateway: client-supplied X-Forwarded-For bypasses every per-IP limit _(auto-detected, not reviewed yet)_ | <= 0.9.1 | 0.9.2 |
| [GHSA-jwwq-crgq-c4c7](https://github.com/ruvnet/ruflo/security/advisories/GHSA-jwwq-crgq-c4c7) | Moderate | Federation BBS: a pinned peer can forge the origin of an envelope _(auto-detected, not reviewed yet)_ | <= 3.71.3 | 3.71.4 |
| [GHSA-rx87-v2fr-76xf](https://github.com/ruvnet/ruflo/security/advisories/GHSA-rx87-v2fr-76xf) | Moderate | Repository-controlled files are injected into the model's context as the user's own memory or learned patterns _(auto-detected, not reviewed yet)_ | <= 3.71.3 | 3.71.4 |

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
- **Stars:** 81.3k · last push 2026-11-09 · latest release v3.74.1
- **Tags:** multi-agent, swarms, orchestration, mcp
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/ruvnet/ruflo
- https://github.com/ruvnet/ruflo/security/advisories/GHSA-c4hm-4h84-2cf3

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/ruflo.yaml)
