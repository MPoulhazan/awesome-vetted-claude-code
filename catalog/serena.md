# Serena

> Coding toolkit that gives the agent IDE-like, symbol-level navigation and editing through language servers.

**Verdict: 🔵 Trial** · Overall **3.3/5** · [oraios/serena](https://github.com/oraios/serena)

Genuinely useful on large repos, but it has had three remote-code-execution advisories in a few months. Stay on 2.0.0 or later and only open repos you trust.

> [!WARNING]
> **GHSA-pp25-4cg4-qcr9** (critical): update to the fixed version or later.
> [!WARNING]
> **GHSA-37h2-6p4f-mp3q** (high): update to the fixed version or later.
> [!WARNING]
> **GHSA-pp6p-xvxf-8hhx** (high): update to the fixed version or later.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 2/5 | 4/5 | 4/5 |

## What problem it solves

On big codebases the agent reads whole files to find one function. Serena lets it find symbols, references and definitions, and edit at symbol level.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Opens a local port / proxy | Yes |

**What leaves your machine:** Nothing beyond the model; language servers and the dashboard run locally.

Runs language servers over the whole project and a local web dashboard. Past bugs let a malicious repository or a web page run code on your machine.

**Red flags**

- Three RCE-class advisories in 2026 (all fixed). Opening an untrusted repository was the main attack path.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-pp25-4cg4-qcr9](https://github.com/oraios/serena/security/advisories/GHSA-pp25-4cg4-qcr9) | 🚨 Critical | Server-side template injection in mode and context prompt rendering gives code execution on project activation, bypassing trusted_project_path_patterns. | <= 1.6.1 | 1.7.0 |
| [GHSA-37h2-6p4f-mp3q](https://github.com/advisories/GHSA-37h2-6p4f-mp3q)<br>CVE-2026-49471 | ⚠ High | Unauthenticated Flask dashboard on a fixed port enables DNS rebinding, memory poisoning and code execution. | < 1.5.2 | 1.5.2 |
| [GHSA-pp6p-xvxf-8hhx](https://github.com/oraios/serena/security/advisories/GHSA-pp6p-xvxf-8hhx) | ⚠ High | Insecure pickle deserialization of the language-server symbol cache - a malicious repository runs code on project activation. | <= 1.7.1 | 2.0.0 |

## Install

Recommended scope: User-wide (`~/.claude`)

```
uv tool install -p 3.13 serena-agent
```

The maintainers ask you not to install it from MCP or plugin marketplaces, whose commands are outdated. Some languages need extra language servers.

## Facts

- **Category:** MCP servers
- **License:** GPL-3.0-or-later - The Serena application is GPL-3.0-or-later; its SolidLSP component is MIT.
- **Maintainer:** company
- **Stars:** 30.5k · last push 2026-10-20 · latest release v2.1.0
- **Overlaps with:** graphify - pick one
- **Tags:** code-navigation, language-server, refactoring
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/oraios/serena
- https://github.com/oraios/serena/security/advisories

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/serena.yaml)
