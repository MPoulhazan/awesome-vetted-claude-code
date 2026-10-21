# container-use

> Dagger's MCP server that gives each agent its own container and git branch, so several can work safely in parallel.

**Verdict: 🔵 Trial** · Overall **3.7/5** · [dagger/container-use](https://github.com/dagger/container-use) · [Website](https://container-use.com)

One of the few tools that reduces risk instead of adding it. Still experimental, with no release since August 2025.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 4/5 | 2/5 | 4/5 |

## What problem it solves

Agents running commands directly on your machine, and parallel agents stepping on each other. Each one works in an isolated container you can inspect and merge.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | No network | Yes |

Agent commands run inside containers, not on your host. Isolation is as strong as your Docker setup.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
brew install dagger/tap/container-use
claude mcp add container-use -- container-use stdio
```

Needs Docker. Marked experimental by its maintainers.

## Facts

- **Category:** MCP servers
- **License:** Apache-2.0
- **Maintainer:** company
- **Stars:** 4.1k · last push 2026-09-21 · latest release v0.4.2
- **Overlaps with:** claude-squad - pick one
- **Tags:** sandbox, containers, isolation, multi-agent
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/dagger/container-use

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/container-use.yaml)
