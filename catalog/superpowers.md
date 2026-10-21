# Superpowers

> Skills framework and development methodology - brainstorm, plan, test-first, subagent-driven execution, review.

**Verdict: 🟢 Adopt** · Overall **4.5/5** · [obra/superpowers](https://github.com/obra/superpowers)

The most adopted workflow pack, available in Anthropic's official marketplace, light footprint. Pick it or another workflow pack, not several.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 5/5 | 4/5 | 5/5 | 4/5 |

## What problem it solves

Agents jump straight to code. Superpowers enforces a design, plan, TDD and review loop through skills that trigger on their own.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | Yes | No network | No |

Markdown skills plus one SessionStart hook that injects its introduction into each session.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
/plugin install superpowers@claude-plugins-official
```

## Facts

- **Category:** Claude Code plugins
- **License:** MIT
- **Maintainer:** individual
- **Stars:** 302.7k · last push 2026-10-21 · latest release v7.0.0
- **Overlaps with:** agent-skills, superclaude, bmad-method, spec-kit, gsd-core - pick one
- **Tags:** workflow, tdd, planning, methodology
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/obra/superpowers

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/superpowers.yaml)
