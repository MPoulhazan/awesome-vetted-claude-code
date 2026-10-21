# OmniRoute

> Self-hosted OpenAI-compatible gateway in front of hundreds of LLM providers, with quota-aware fallback.

**Verdict: 🔴 Hold** · Overall **1.5/5** · [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute)

Critical remote code execution advisory, and sources disagree on whether it is fixed. It also sits in front of all your prompts, code and API keys, and free upstream providers may log what you send.

> [!CAUTION]
> **GHSA-hf57-cqmx-p4gr** (critical) has no confirmed fix. Don't run this tool until it does.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 1/5 | 3/5 | 5/5 |

## What problem it solves

Juggling many providers and free tiers. One endpoint routes each request to whichever provider still has quota.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Opens a local port / proxy | Yes |

**What leaves your machine:** Every prompt and all code context, to whichever upstream provider is picked - including free providers with unknown data policies.

Stores provider credentials and proxies all agent traffic. Check the terms of each provider, including your Claude plan, before routing through a third-party gateway.

**Red flags**

- The dashboard admin password defaults to CHANGEME unless INITIAL_PASSWORD is set.
- The maintainers' advisory says the RCE is fixed in 3.8.49; the GitHub Advisory Database lists <= 3.8.50 as affected with no fixed version.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-hf57-cqmx-p4gr](https://github.com/advisories/GHSA-hf57-cqmx-p4gr)<br>CVE-2026-88062 | 🚨 Critical | Remote code execution through ACP custom agents. | <= 3.8.50 | **No confirmed fix** |

## Install

Recommended scope: User-wide (`~/.claude`)

```
docker run -p 20128:20128 diegosouzapw/omniroute
```

If you run it anyway - set INITIAL_PASSWORD, never expose port 20128, and use your own paid keys rather than unknown free providers for private code.

## Facts

- **Category:** Gateways and proxies
- **License:** MIT
- **Maintainer:** community
- **Stars:** 79.0k · last push 2026-10-21 · latest release v3.8.52
- **Overlaps with:** claude-code-router - pick one
- **Tags:** llm-gateway, routing, free-models, proxy
- **Last reviewed:** 2026-10-20

## Sources

- https://github.com/diegosouzapw/OmniRoute
- https://pinggy.io/amp/blog/omniroute_ai_gateway_security/
- https://levelup.gitconnected.com/the-ai-tool-that-promises-1-6-billion-free-claude-tokens-and-why-you-shouldnt-touch-it-a63c687f7d91

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/omniroute.yaml)
