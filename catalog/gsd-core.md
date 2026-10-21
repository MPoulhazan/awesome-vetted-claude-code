# GSD Core (Get Shit Done)

> Lightweight meta-prompting and spec-driven system that splits work into phases with fresh context for each.

**Verdict: 🔵 Trial** · Overall **3.5/5** · [open-gsd/gsd-core](https://github.com/open-gsd/gsd-core)

Popular method, but it just moved to a new home with a fraction of the old stars. Check that the new repo stays active before relying on it.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 3/5 | 3/5 | 4/5 |

## What problem it solves

Long sessions rot their context and quality drops. GSD plans in phases and runs each with a clean context.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | Yes | No network | Yes |

Installs several Node hooks into your agent config, including an update checker that runs in the background.

**Red flags**

- Project moved from gsd-build/get-shit-done to open-gsd/gsd-core in 2026 - make sure you install from the new, official home.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
npx @opengsd/gsd-core@latest
```

The original repo (gsd-build/get-shit-done, 64k stars) is archived; development continues here. Use the installer rather than copying files.

## Facts

- **Category:** Claude Code plugins
- **License:** MIT
- **Maintainer:** community
- **Stars:** 10.7k · last push 2026-10-21 · latest release v1.18.0
- **Overlaps with:** spec-kit, bmad-method, superpowers - pick one
- **Tags:** spec-driven, context-engineering, phases
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/open-gsd/gsd-core
- https://github.com/gsd-build/get-shit-done

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/gsd-core.yaml)
