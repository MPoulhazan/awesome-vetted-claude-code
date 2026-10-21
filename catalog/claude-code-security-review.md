# Claude Code Security Review

> Anthropic's GitHub Action that reviews pull requests for vulnerabilities, and the source of the built-in /security-review command.

**Verdict: 🟢 Adopt** · Overall **3.3/5** · [anthropics/claude-code-security-review](https://github.com/anthropics/claude-code-security-review)

Use /security-review freely. Run the Action only on trusted pull requests - Anthropic states it is not hardened against prompt injection.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 3/5 | 3/5 | 3/5 |

## What problem it solves

Security bugs slip through code review. It reads each PR diff with Claude, flags likely vulnerabilities and comments on the PR.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Model API only | No |

**What leaves your machine:** PR diffs and surrounding code, sent to the Claude API.

A malicious PR can try to steer the reviewer. Enable "Require approval for all external contributors" so the workflow only runs after a maintainer looks at the PR.

**Red flags**

- Not hardened against prompt injection, per its own README.
- The README pins @main rather than a release; pin a commit SHA in your workflow.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: Per project (`.claude/`)

```
uses: anthropics/claude-code-security-review@main
/security-review
```

The /security-review command already ships with Claude Code; copy security-review.md into .claude/commands/ to customize it. The Action needs a Claude API key, billed per use.

## Facts

- **Category:** CI and GitHub Actions
- **License:** MIT
- **Maintainer:** official
- **Stars:** 6.5k · last push 2026-02-11
- **Tags:** security, code-review, github-actions
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/anthropics/claude-code-security-review

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/claude-code-security-review.yaml)
