# claude-mem

> Captures what the agent does in each session, compresses it with AI and injects relevant context into later sessions.

**Verdict: 🟡 Assess** · Overall **2.8/5** · [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)

Claude Code now has built-in auto memory. claude-mem adds hooks on every tool call, a background worker and, by default, a hosted service - weigh that against what you gain.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 2/5 | 4/5 | 3/5 |

## What problem it solves

Each new session starts cold. claude-mem records tool use, file reads and edits via hooks, stores compressed observations in SQLite and retrieves them at session start.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | Yes | Sends data to a third party | Yes |

**What leaves your machine:** Session observations (tool calls, file contents read, edits) go to the hosted claude-mem observer if you sign in, or to OpenRouter or Gemini if you pick them. Local mode uses your Anthropic plan.

Lifecycle hooks on every tool call, a background worker, and a local SQLite store of everything the agent saw - including secrets it read. Its hooks can interfere with other tools that rely on hooks.

**Red flags**

- The installer defaults to a hosted, eventually paid memory service.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-5gvr-v6qv-h5mm](https://github.com/advisories/GHSA-5gvr-v6qv-h5mm)<br>CVE-2026-11330 | Low | computeObservationContentHash is vulnerable to hash collision. | < 12.0.0 | 12.0.0 |

## Install

Recommended scope: User-wide (`~/.claude`)

```
/plugin marketplace add thedotmack/claude-mem
/plugin install claude-mem
```

The `npx claude-mem install` route asks you to sign in to a hosted memory service by default. Pass an explicit --provider or set CLAUDE_MEM_ONLINE_OPTIN=false to stay local.

## Claims

| Claim | Independent | Source |
|---|---|---|
| About 10x token savings through progressive disclosure | No, vendor's own | [link](https://github.com/thedotmack/claude-mem) |

## Facts

- **Category:** Claude Code plugins
- **License:** Apache-2.0
- **Maintainer:** company
- **Stars:** 102.0k · last push 2026-10-21 · latest release v15.0.1
- **Overlaps with:** claude-code-auto-memory - pick one
- **Tags:** memory, context, hooks
- **Last reviewed:** 2026-10-20

## Sources

- https://github.com/thedotmack/claude-mem
- https://www.augmentcode.com/learn/claude-mem-persistent-memory-claude-code

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/claude-mem.yaml)
