# Spec Kit

> GitHub's toolkit for spec-driven development - constitution, spec, plan, tasks, then implementation.

**Verdict: 🟢 Adopt** · Overall **4.3/5** · [github/spec-kit](https://github.com/github/spec-kit)

Maintained by GitHub, simple, agent-agnostic. The safest way into spec-driven development.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 5/5 | 4/5 | 4/5 |

## What problem it solves

Vague prompts give vague code. Spec Kit makes the spec the source of truth and generates plans and task lists from it.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | No network | No |

A small CLI that writes templates, commands and a few shell scripts into your project.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: Per project (`.claude/`)

```
uv tool install specify-cli
specify init . --integration claude
```

## Facts

- **Category:** CLIs and local services
- **License:** MIT
- **Maintainer:** official
- **Stars:** 142.2k · last push 2026-10-20 · latest release v1.2.2
- **Overlaps with:** bmad-method, gsd-core, superpowers - pick one
- **Tags:** spec-driven, planning, github
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/github/spec-kit

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/spec-kit.yaml)
