# GitHub MCP Server

> GitHub's official MCP server - issues, pull requests, code search, Actions and more, hosted or local.

**Verdict: 🟢 Adopt** · Overall **4.2/5** · [github/github-mcp-server](https://github.com/github/github-mcp-server)

Official and widely used. Its power is its risk - scope the token and toolsets, and be careful with public issues as input.

> [!WARNING]
> **GHSA-w4q6-qw23-4rg7** (high): update to the fixed version or later.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 5/5 | 3/5 | 5/5 | 4/5 |

## What problem it solves

Switching between the terminal and github.com to read issues, review PRs or check CI. The agent does it through scoped tools.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| No | No | Sends data to a third party | No |

**What leaves your machine:** Your requests and token go to GitHub; repo content comes back into the model's context.

The agent acts with your token's rights. Issues, PRs and comments written by strangers are prompt-injection vectors, especially when the token can also reach private repos; lockdown mode helps.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-w4q6-qw23-4rg7](https://github.com/advisories/GHSA-w4q6-qw23-4rg7)<br>CVE-2026-47427 | ⚠ High | Nil pointer dereference in the completion handler lets a request crash the server (denial of service). | < 1.1.0 | 1.1.0 |
| [GHSA-pjp5-fpmr-3349](https://github.com/advisories/GHSA-pjp5-fpmr-3349)<br>CVE-2026-48529 | Moderate | A lockdown-mode singleton in the HTTP server could mix up GraphQL clients between users. | >= 0.22.0, < 1.1.2 | 1.1.2 |

## Install

Recommended scope: User-wide (`~/.claude`)

```
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ -H "Authorization: Bearer <fine-grained token>"
```

Use a fine-grained token limited to the repos you need, and restrict toolsets or enable read-only mode. A local Docker build is available too.

## Facts

- **Category:** MCP servers
- **License:** MIT
- **Maintainer:** official
- **Stars:** 33.8k · last push 2026-10-19 · latest release v2.0.2
- **Tags:** github, issues, pull-requests
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/github/github-mcp-server

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/github-mcp-server.yaml)
