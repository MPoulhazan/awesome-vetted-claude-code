# Vibe Kanban

> Kanban board that hands tasks to coding agents, each in its own worktree, and lets you review their diffs.

**Verdict: 🔴 Hold** · Overall **3/5** · [BloopAI/vibe-kanban](https://github.com/BloopAI/vibe-kanban)

The maintainers announced it is sunsetting, and the last release dates from April 2026. Don't build a workflow on it.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 3/5 | 2/5 | 4/5 |

## What problem it solves

Planning and tracking many parallel agent tasks. Cards become agent runs you review and merge.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Opens a local port / proxy | Yes |

Runs a local web server and drives agents on your machine. Builds can include PostHog analytics when keys are set at build time.

**Red flags**

- Sunsetting - security fixes may stop.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
npx vibe-kanban
```

## Facts

- **Category:** CLIs and local services
- **License:** Apache-2.0
- **Maintainer:** company
- **Stars:** 28.4k · last push 2026-09-19 · latest release v0.1.44-20260424091429
- **Overlaps with:** claude-squad, opcode - pick one
- **Tags:** kanban, multi-agent, orchestration
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/BloopAI/vibe-kanban

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/vibe-kanban.yaml)
