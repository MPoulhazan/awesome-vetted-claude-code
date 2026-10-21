# Playwright MCP

> Microsoft's MCP server that lets the agent drive a real browser through Playwright's accessibility snapshots.

**Verdict: 🟢 Adopt** · Overall **4/5** · [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp)

The reference browser MCP, maintained by Microsoft. Run a version after the DNS rebinding fix and prefer isolated profiles.

> [!WARNING]
> **GHSA-6fg3-hvw7-2fwq** (high): update to the fixed version or later.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 5/5 | 3/5 | 4/5 | 4/5 |

## What problem it solves

The agent can't see or click your web app. With Playwright MCP it navigates, fills forms, reads the page and checks its own UI changes.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Sends data to a third party | Yes |

**What leaves your machine:** Requests to every site the agent opens, with whatever session the browser profile holds.

Launches a browser that can reach any site by default. Pages are untrusted input and can carry prompt injection. --allowed-origins is explicitly not a security boundary.

**Red flags**

- The default profile persists to disk, so logins the agent makes stay around between sessions.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-6fg3-hvw7-2fwq](https://github.com/advisories/GHSA-6fg3-hvw7-2fwq)<br>CVE-2025-9611 | ⚠ High | DNS rebinding lets a malicious website reach all the server's tools. | < 0.0.40 | 0.0.40 |

## Install

Recommended scope: User-wide (`~/.claude`)

```
claude mcp add playwright npx @playwright/mcp@latest
```

Add --isolated to keep the browser profile in memory instead of a persistent profile with your logins. Microsoft notes the Playwright CLI is cheaper in tokens for plain test runs.

## Facts

- **Category:** MCP servers
- **License:** Apache-2.0
- **Maintainer:** company
- **Stars:** 38.4k · last push 2026-10-19 · latest release v0.0.83
- **Overlaps with:** chrome-devtools-mcp - pick one
- **Tags:** browser, testing, automation
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/microsoft/playwright-mcp
- https://github.com/advisories/GHSA-6fg3-hvw7-2fwq

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/playwright-mcp.yaml)
