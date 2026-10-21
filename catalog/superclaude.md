# SuperClaude Framework

> Configuration framework adding about 30 slash commands, specialist agents, behavior modes and optional MCP servers.

**Verdict: 🟡 Assess** · Overall **3.3/5** · [SuperClaude-Org/SuperClaude_Framework](https://github.com/SuperClaude-Org/SuperClaude_Framework)

Popular, but large and slower-moving (last release March 2026). Its many commands and modes add context to every session and overlap with lighter packs.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 4/5 | 3/5 | 3/5 |

## What problem it solves

Generic agent behavior for every kind of task. SuperClaude adds personas and modes (architect, security, research...) you switch with commands.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | No network | No |

A Python installer that writes commands and agents into your user Claude config. The optional MCP servers bring their own risks.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
pipx install superclaude
superclaude install
```

Writes into ~/.claude. MCP servers are a separate, optional install step - review each one.

## Facts

- **Category:** Claude Code plugins
- **License:** MIT
- **Maintainer:** community
- **Stars:** 23.9k · last push 2026-09-27 · latest release v4.3.0
- **Overlaps with:** superpowers, agent-skills, wshobson-agents - pick one
- **Tags:** workflow, personas, commands
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/SuperClaude-Org/SuperClaude_Framework

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/superclaude.yaml)
