# Sentry MCP

> Sentry's hosted MCP server - issues, stack traces, traces and Seer analysis, built for debugging in the editor.

**Verdict: 🟢 Adopt** · Overall **4.2/5** · [getsentry/toolkit](https://github.com/getsentry/toolkit) · [Website](https://mcp.sentry.dev)

Official, focused on read and debug workflows, nothing to run locally. A must if you already use Sentry.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 4/5 | 4/5 | 5/5 |

## What problem it solves

Production errors live in a dashboard far from the code. The agent pulls the issue, the stack trace and the context, then fixes it in place.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| No | No | Sends data to a third party | No |

**What leaves your machine:** Error events, which can contain user data and request payloads, come into the model's context.

Acts with your Sentry OAuth rights. Error messages are partly attacker-controlled text, so treat them as untrusted input.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
claude plugin marketplace add getsentry/sentry-mcp
```

Remote server at mcp.sentry.dev with OAuth into your Sentry organization. The repo was renamed from getsentry/sentry-mcp to getsentry/toolkit.

## Facts

- **Category:** MCP servers
- **License:** FSL-1.1-Apache-2.0 - Functional Source License - source-available, each version becomes Apache-2.0 after two years. Fine to use, not to offer as a competing service.
- **Maintainer:** official
- **Stars:** 936 · last push 2026-10-21 · latest release cli@0.47.0
- **Tags:** errors, monitoring, debugging
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/getsentry/toolkit

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/sentry-mcp.yaml)
