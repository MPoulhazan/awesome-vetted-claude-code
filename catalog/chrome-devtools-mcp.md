# Chrome DevTools MCP

> Google's MCP server giving the agent Chrome DevTools - console, network, performance traces and page control.

**Verdict: 🟢 Adopt** · Overall **3.7/5** · [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)

Best tool for debugging and performance work in the browser. Opt out of telemetry and stay on 1.1.0 or later.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 3/5 | 4/5 | 4/5 |

## What problem it solves

The agent fixes front-end bugs blind. With DevTools it reads console errors and network requests and records performance traces in a live Chrome.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Sends data to a third party | Yes |

**What leaves your machine:** Usage statistics (tool success rates, latency, environment) to Google unless disabled, plus requests to every site the browser opens.

Controls a full Chrome instance; anything in that browser profile is visible to the agent. Pages are untrusted input.

**Red flags**

- Telemetry is on by default.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-3pvj-jv98-qhjq](https://github.com/advisories/GHSA-3pvj-jv98-qhjq)<br>CVE-2026-53765 | Moderate | The daemon.pid write follows symlinks in the /tmp fallback runtime directory. | >= 0.20.0, <= 1.0.1 | 1.1.0 |
| [GHSA-8qf9-62x2-82pp](https://github.com/advisories/GHSA-8qf9-62x2-82pp)<br>CVE-2026-53766 | Moderate | validatePath() does not resolve symlinks before enforcing allowed roots. | >= 0.24.0, <= 1.0.1 | 1.1.0 |

## Install

Recommended scope: User-wide (`~/.claude`)

```
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest --no-usage-statistics
```

Usage statistics are sent to Google by default; the --no-usage-statistics flag turns that off.

## Facts

- **Category:** MCP servers
- **License:** Apache-2.0
- **Maintainer:** company
- **Stars:** 53.9k · last push 2026-10-20 · latest release chrome-devtools-mcp-v1.11.0
- **Overlaps with:** playwright-mcp - pick one
- **Tags:** browser, debugging, performance
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/ChromeDevTools/chrome-devtools-mcp

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/chrome-devtools-mcp.yaml)
