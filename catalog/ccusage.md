# ccusage

> Reads Claude Code's local logs and reports token usage and estimated cost by day, month, session or billing block.

**Verdict: 🟢 Adopt** · Overall **4.7/5** · [ccusage/ccusage](https://github.com/ccusage/ccusage)

Read-only, local, nothing to configure. The reference tool for usage tracking.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 5/5 | 5/5 | 5/5 |

## What problem it solves

You can't see how much you burn per day or per project, or how close you are to your plan limits. One command answers it.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Sends data to a third party | No |

**What leaves your machine:** Nothing about you. Without --offline it downloads public model pricing data.

Only reads the JSONL session logs Claude Code writes locally.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: Run when needed

```
npx ccusage@latest
```

Add --offline to use bundled pricing instead of fetching current model prices.

## Facts

- **Category:** CLIs and local services
- **License:** MIT
- **Maintainer:** individual
- **Stars:** 19.1k · last push 2026-10-21 · latest release v20.0.37
- **Overlaps with:** ccstatusline - pick one
- **Tags:** usage, cost, tokens, analytics
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/ccusage/ccusage

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/ccusage.yaml)
