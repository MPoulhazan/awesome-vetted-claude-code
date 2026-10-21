# wshobson/agents

> Plugin marketplace with about 90 plugins - 200 specialist subagents, 185 skills and 100 commands across languages and domains.

**Verdict: 🔵 Trial** · Overall **4/5** · [wshobson/agents](https://github.com/wshobson/agents)

Good à la carte catalog. Each plugin is small, but some ship hooks or MCP configuration - read the one you install.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 4/5 | 4/5 | 4/5 |

## What problem it solves

You want a specialist (Kubernetes, security audit, Python performance...) without writing it. Install just the plugin for that domain.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | Yes | No network | No |

Mostly Markdown agents and skills. A few plugins add hooks or MCP servers; check the plugin folder before installing.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
/plugin marketplace add wshobson/agents
/plugin install <plugin-name>@claude-code-workflows
```

Install only the plugins you need; installing many floods every session with agent descriptions.

## Facts

- **Category:** Claude Code plugins
- **License:** MIT
- **Maintainer:** individual
- **Stars:** 41.3k · last push 2026-10-19
- **Overlaps with:** superclaude, agent-skills - pick one
- **Tags:** subagents, marketplace, specialists
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/wshobson/agents

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/wshobson-agents.yaml)
