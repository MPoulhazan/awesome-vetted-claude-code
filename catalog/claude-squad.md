# Claude Squad

> Terminal app that runs several Claude Code, Codex or other agents in parallel, each in its own tmux session and git worktree.

**Verdict: 🔵 Trial** · Overall **4/5** · [smtg-ai/claude-squad](https://github.com/smtg-ai/claude-squad)

Simple, local, and worktrees keep agents apart. Avoid its auto-accept mode on anything you care about.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 4/5 | 3/5 | 5/5 |

## What problem it solves

Running several agents on one repo means conflicting edits and lost terminals. Each gets an isolated worktree you review and push from one screen.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | No network | Yes |

Agents keep running in background tmux sessions. The auto-yes mode accepts every permission prompt.

**Red flags**

- Auto-accept ("yolo") mode removes your permission checks.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
brew install claude-squad
```

Needs tmux and git. The curl install script is also offered - read it before piping it into bash.

## Facts

- **Category:** CLIs and local services
- **License:** AGPL-3.0
- **Maintainer:** company
- **Stars:** 8.6k · last push 2026-08-20 · latest release v1.0.20
- **Overlaps with:** vibe-kanban, opcode - pick one
- **Tags:** multi-session, tmux, worktrees, tui
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/smtg-ai/claude-squad

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/claude-squad.yaml)
