# Repomix

> Packs a whole repository into one AI-friendly file, with token counts and secret scanning; also runs as an MCP server.

**Verdict: 🔵 Trial** · Overall **3.8/5** · [yamadashy/repomix](https://github.com/yamadashy/repomix) · [Website](https://repomix.com)

Very handy and actively fixed, but five advisories in 2026, including two command-execution bugs. Run 1.18.1 or later.

> [!WARNING]
> **GHSA-4p5g-gh74-q524** (high): update to the fixed version or later.
> [!WARNING]
> **GHSA-9mm9-rqhj-j5mx** (high): update to the fixed version or later.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 3/5 | 4/5 | 5/5 |

## What problem it solves

Giving a chat model or another agent the full picture of a codebase. One file with structure and contents, secrets left out.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | No network | No |

**What leaves your machine:** Nothing by itself - but the packed file is your whole repo, so check where you paste it.

Secret scanning via Secretlint catches known credential formats, not everything. Past bugs let a crafted repo or argument run commands.

**Red flags**

- Five advisories in 2026; packing an untrusted repository was the main attack path.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-4p5g-gh74-q524](https://github.com/yamadashy/repomix/security/advisories/GHSA-4p5g-gh74-q524) | ⚠ High | Packing a directory with a crafted .git runs repository-level git config helpers (gpg.program, diff.external, core.fsmonitor). | >= 0.2.41, < 1.18.1 | 1.18.1 |
| [GHSA-9mm9-rqhj-j5mx](https://github.com/advisories/GHSA-9mm9-rqhj-j5mx)<br>CVE-2026-49987 | ⚠ High | Command injection through the --remote-branch argument. | < 1.14.1 | 1.14.1 |
| [GHSA-hwpp-h97w-2h3j](https://github.com/advisories/GHSA-hwpp-h97w-2h3j)<br>CVE-2026-49988 | Moderate | attach_packed_output can bypass secret scanning on local files. | <= 1.14.0 | 1.14.1 |
| [GHSA-w8cw-mgw9-74h7](https://github.com/yamadashy/repomix/security/advisories/GHSA-w8cw-mgw9-74h7) | Moderate | Credentials in remote repository URLs were logged in cleartext. | <= 1.17.0 | 1.18.0 |
| [GHSA-rpmv-562j-qxrv](https://github.com/yamadashy/repomix/security/advisories/GHSA-rpmv-562j-qxrv) | Low | MCP file-system tools claimed protections that were not implemented. | <= 1.17.0 | 1.18.0 |

## Install

Recommended scope: Run when needed

```
npx repomix@latest
```

In MCP mode, run with --sandbox to confine file tools to the project. Never pack untrusted repos with an old version.

## Facts

- **Category:** CLIs and local services
- **License:** MIT
- **Maintainer:** individual
- **Stars:** 28.9k · last push 2026-10-18 · latest release v1.18.1
- **Overlaps with:** graphify - pick one
- **Tags:** context, packing, repository, mcp
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/yamadashy/repomix
- https://github.com/yamadashy/repomix/security/advisories

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/repomix.yaml)
