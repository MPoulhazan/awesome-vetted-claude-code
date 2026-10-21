# Anthropic Skills

> Anthropic's public skills - Word, PDF, PowerPoint and Excel handling, frontend design, skill-creator and more.

**Verdict: 🟢 Adopt** · Overall **4.2/5** · [anthropics/skills](https://github.com/anthropics/skills)

Official, high quality, and the best reference for writing your own skills.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 4/5 | 4/5 | 5/5 |

## What problem it solves

Working with office documents or writing good skills from scratch. These are the skills that power Claude's own file features, plus reference examples.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | No network | No |

The document skills ship Python and JavaScript helper scripts that run locally on the files you give them.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

Install only the pack you need. Some of these may already be available in your Claude Code setup.

## Facts

- **Category:** Skills
- **License:** Apache-2.0 + source-available - Most skills are Apache-2.0. The docx, pdf, pptx and xlsx skills are source-available reference code, not open source.
- **Maintainer:** official
- **Stars:** 182.5k · last push 2026-10-09
- **Tags:** official, documents, frontend, skill-authoring
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/anthropics/skills

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/anthropic-skills.yaml)
