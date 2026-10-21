# Headroom

> Compresses tool outputs, logs, files and RAG chunks before they reach the model. Library, proxy, agent wrapper or MCP server.

**Verdict: 🟡 Assess** · Overall **2.8/5** · [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)

Useful for API-billed backends, little gain on a flat Claude subscription. It had a high-severity WebSocket hijacking bug - run 0.35.0 or later.

> [!WARNING]
> **GHSA-h46j-26q3-rggf** (high): update to the fixed version or later.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 2/5 | 3/5 | 4/5 |

## What problem it solves

Pay-per-token apps and agents send huge JSON and logs to the model. Headroom shrinks them and keeps originals locally in case the model asks for them.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Opens a local port / proxy | Yes |

**What leaves your machine:** Nothing extra in principle, but as a proxy it sees every prompt, response and API key in transit.

A local proxy in the path of all model traffic. `headroom learn` writes into CLAUDE.local.md or CLAUDE.md; `wrap` edits agent configs.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-h46j-26q3-rggf](https://github.com/advisories/GHSA-h46j-26q3-rggf)<br>CVE-2026-71416 | ⚠ High | Cross-Site WebSocket Hijacking - a web page you visit can talk to the local Headroom service. | < 0.35.0 | 0.35.0 |

## Install

Recommended scope: Project dependency

```
pip install "headroom-ai[all]"
headroom proxy --port 8787
```

Best fit is your own LLM backend paying per token. `headroom wrap claude` reroutes a coding agent through it; undo with `headroom unwrap claude`.

## Claims

| Claim | Independent | Source |
|---|---|---|
| 60-95% fewer tokens on JSON, about 20% on coding agents, same answers | No, vendor's own | [link](https://github.com/headroomlabs-ai/headroom) |

## Facts

- **Category:** CLIs and local services
- **License:** Apache-2.0
- **Maintainer:** company
- **Stars:** 76.8k · last push 2026-10-21 · latest release v0.41.0
- **Tags:** compression, tokens, proxy, mcp
- **Last reviewed:** 2026-10-20

## Sources

- https://github.com/headroomlabs-ai/headroom
- https://silenceper.com/en/article/2026-06-14-headroom-ai-agent-context-compression/

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/headroom.yaml)
