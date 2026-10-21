# task-observer

> Meta-skill that watches your sessions and logs what should become a new skill or a skill fix, for your review.

**Verdict: 🟡 Assess** · Overall **3.3/5** · [rebelytics/one-skill-to-rule-them-all](https://github.com/rebelytics/one-skill-to-rule-them-all)

Clever and well-maintained, but it only pays off with a library of your own skills, and it adds context to every session.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 4/5 | 3/5 | 3/5 |

## What problem it solves

Your skills drift and your repeated corrections never become skills. It captures patterns and judgement calls into an observation log you review weekly.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | No network | No |

Instructions plus two small helper scripts (log migration, new observation). Writes only to its observation log until you approve changes.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
npx skills add rebelytics/one-skill-to-rule-them-all --skill task-observer
```

Installing is not enough - add the activation line from references/environments.md to CLAUDE.md. Most useful once you maintain several skills of your own.

## Facts

- **Category:** Skills
- **License:** CC-BY-4.0
- **Maintainer:** individual
- **Stars:** 3.5k · last push 2026-10-16 · latest release v3.7.0
- **Tags:** meta-skill, skills, continuous-improvement
- **Last reviewed:** 2026-10-20

## Sources

- https://github.com/rebelytics/one-skill-to-rule-them-all
- https://skillselion.com/guides/task-observer-skill-claude-code-guide

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/task-observer.yaml)
