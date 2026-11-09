# Strix

> Autonomous AI pentesting agents that attack your app in a Docker sandbox and report only findings proven with a working exploit.

**Verdict: 🔵 Trial** · Overall **3.3/5** · [usestrix/strix](https://github.com/usestrix/strix)

The strongest open-source option for proving vulnerabilities rather than guessing them. Run it only against your own apps, with STRIX_TELEMETRY=0, the pipx route rather than curl | bash, and a spending limit on the LLM key.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 3/5 | 3/5 | 3/5 |

## What problem it solves

Scanners bury small teams in unproven alerts. Strix's agents crawl or read the code, try real exploits and keep only what they reproduce, with a PoC to fix from.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Sends data to a third party | No |

**What leaves your machine:** Prompts with your source and target responses go to the LLM provider you choose. Anonymous usage telemetry (OS, version, scan mode, model name, finding counts by severity and CWE) goes to PostHog and Scarf unless STRIX_TELEMETRY=0. The cloud mode uploads your source to app.strix.ai.

The agents run real attacks (requests, browser, terminal) from a Docker container it pulls and runs. Point it at local or staging targets you own; it can change data on the target. The skills tell the agent to prefer the paid cloud "if unsure", so say which mode you want.

**Red flags**

- Telemetry is on by default (opt-out with STRIX_TELEMETRY=0).
- The recommended install is curl | bash, which downloads a binary without a checksum check.
- Marked "Development Status 3 - Alpha" on PyPI.
- GHSA-9x9x-v3ff-pj74 lists no fixed version and says the vendor never answered; it only names versions up to 1.0.2, so 1.7.0 is probably not affected, but that is not confirmed.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-9x9x-v3ff-pj74](https://github.com/advisories/GHSA-9x9x-v3ff-pj74)<br>CVE-2026-15519 | Low | Inclusion of functionality from an untrusted control sphere via system_prompt.jinja (CVSS 5.0, hard to exploit). | <= 1.0.2 | **No confirmed fix** |

## Install

Recommended scope: User-wide (`~/.claude`)

```
curl -sSL https://strix.ai/install | bash
pipx install strix-agent
strix --target ./my-app
```

Needs Docker and your own LLM key (OpenAI, Anthropic, local models...). The repo also ships 9 Claude Code skills in skills/ (pentest, web app, API, OWASP Top 10, code review, CI, managed cloud, fix) that drive the CLI; they overlap heavily, so one or two are enough. The `strix cloud` commands use the paid app.strix.ai platform instead.

## Claims

| Claim | Independent | Source |
|---|---|---|
| Solves 96% (100 of 104) of the XBEN web security benchmark | No, vendor's own | [link](https://dev.to/creeta/strix-claims-96-on-xben-that-number-is-vendor-reported-3en8) |

## Facts

- **Category:** CLIs and local services
- **License:** Apache-2.0
- **Maintainer:** company
- **Stars:** 74.6k · last push 2026-11-09 · latest release v1.7.0
- **Overlaps with:** claude-code-security-review - pick one
- **Tags:** security, pentest, owasp, ai-agents, ci, skills
- **Last reviewed:** 2026-11-05

## Sources

- https://github.com/usestrix/strix
- https://github.com/usestrix/strix/tree/main/skills
- https://github.com/usestrix/strix/blob/main/strix/telemetry/README.md
- https://github.com/advisories/GHSA-9x9x-v3ff-pj74
- https://dev.to/creeta/strix-claims-96-on-xben-that-number-is-vendor-reported-3en8
- https://wavect.io/blog/strix-ai-pentesting-pilot-guide-2026/
- https://rohitraj.tech/en/notes/strix-ai-penetration-testing-agent-guide-2026

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/strix.yaml)
