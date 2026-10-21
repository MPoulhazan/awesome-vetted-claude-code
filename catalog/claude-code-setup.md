# claude-code-setup

> Official plugin that reads a repo and recommends hooks, skills, MCP servers and subagents for it.

**Verdict: 🟢 Adopt** · Overall **4.5/5** · [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) · [Website](https://github.com/anthropics/claude-plugins-official)

Made by Anthropic, only recommends, changes nothing on its own. The best first step before installing anything else on this list.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 5/5 | 4/5 | 5/5 |

## What problem it solves

You don't know which Claude Code automations fit a given project. It inspects the codebase and proposes a short, stack-specific list, so you install by need rather than by hype.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| No | No | Model API only | No |

**What leaves your machine:** Only what Claude Code already sends to the model while reading the repo.

A skill made of instructions. It suggests installs; you still decide and run them, so review each recommended plugin like any third-party code.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
/plugin install claude-code-setup@claude-plugins-official
/reload-plugins
```

Then ask "recommend automations for this repo" in each project.

## Facts

- **Category:** Claude Code plugins
- **License:** Apache-2.0
- **Maintainer:** official
- **Stars:** 43.4k · last push 2026-10-21
- **Tags:** onboarding, automation, recommendations
- **Last reviewed:** 2026-10-20

## Sources

- https://github.com/anthropics/claude-plugins-official
- https://aident.ai/blog/use-claude-code-setup-plugin-safely

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/claude-code-setup.yaml)
