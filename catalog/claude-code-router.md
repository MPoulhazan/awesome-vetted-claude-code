# Claude Code Router

> Local gateway that routes Claude Code and other agents to the model and provider you choose, with a web UI.

**Verdict: 🟡 Assess** · Overall **3.3/5** · [musistudio/claude-code-router](https://github.com/musistudio/claude-code-router) · [Website](https://ccrdesk.top)

Better track record than other gateways, but it still holds your provider keys and sees every prompt. Worth it only if you really need other models.

> [!WARNING]
> **GHSA-8hmm-4crw-vm2c** (high): update to the fixed version or later.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 3/5 | 4/5 | 4/5 |

## What problem it solves

Using other models (DeepSeek, Gemini, Kimi, local) inside Claude Code, or routing background tasks to cheaper models.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Opens a local port / proxy | Yes |

**What leaves your machine:** Every prompt and all code context, to whichever provider you route to.

Stores provider API keys and proxies all agent traffic. Check each provider's data policy and your Claude plan's terms.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-8hmm-4crw-vm2c](https://github.com/advisories/GHSA-8hmm-4crw-vm2c)<br>CVE-2025-57755 | ⚠ High | Improper CORS configuration let web pages call the local router (the maintainers rate it low). | < 1.0.34 | 1.0.34 |

## Install

Recommended scope: User-wide (`~/.claude`)

```
npm install -g @musistudio/claude-code-router
ccr ui
```

The gateway listens on 127.0.0.1:3456 and the UI on 3458. Read the Docker guide before exposing it anywhere.

## Facts

- **Category:** Gateways and proxies
- **License:** MIT
- **Maintainer:** individual
- **Stars:** 37.8k · last push 2026-10-10 · latest release v3.1.3
- **Overlaps with:** omniroute - pick one
- **Tags:** llm-gateway, routing, multi-provider, proxy
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/musistudio/claude-code-router

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/claude-code-router.yaml)
