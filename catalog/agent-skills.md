# Agent Skills (Addy Osmani)

> About 25 engineering-discipline skills and /spec, /plan, /build, /test, /review, /ship commands.

**Verdict: 🔵 Trial** · Overall **4/5** · [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)

Well-written and popular. Pick it or another workflow pack (such as superpowers), not both - stacked workflow instructions contradict each other.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 4/5 | 4/5 | 4/5 |

## What problem it solves

Agents skip steps - no spec, no tests, no review. Each skill encodes a senior-engineer habit and lists the excuses agents use to skip it, with rebuttals.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | Yes | No network | No |

Mostly Markdown skills. Ships a few shell hooks (hooks/sdd-cache-*.sh); read them before enabling.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
/plugin marketplace add addyosmani/agent-skills
npx skills add addyosmani/agent-skills --list
```

Install only the skills you want with --skill <name> rather than all of them.

## Facts

- **Category:** Skills
- **License:** MIT
- **Maintainer:** individual
- **Stars:** 109.0k · last push 2026-10-13 · latest release 0.6.13
- **Overlaps with:** superpowers, superclaude, wshobson-agents - pick one
- **Tags:** workflow, spec, tdd, code-review
- **Last reviewed:** 2026-10-20

## Sources

- https://github.com/addyosmani/agent-skills
- https://dev.to/yimtheppariyapol/addy-osmani-agent-skills-review-24-production-skills-726k-stars-22em

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/agent-skills.yaml)
