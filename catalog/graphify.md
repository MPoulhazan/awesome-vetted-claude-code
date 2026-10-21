# graphify

> Turns a folder of code, docs, schemas and PDFs into a queryable knowledge graph your agent can navigate.

**Verdict: 🔵 Trial** · Overall **3.7/5** · [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) · [Website](https://docs.graphify.com)

Strong for onboarding or auditing a big repo. Keep it up to date - a file-exfiltration bug was fixed in 0.9.70 - and avoid indexing untrusted repos.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 3/5 | 4/5 | 4/5 |

## What problem it solves

On large or unfamiliar repos the agent burns tokens grepping and reading files one by one. graphify builds a graph once (graph.html, GRAPH_REPORT.md, graph.json) and steers the agent toward it.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | Yes | Model API only | No |

**What leaves your machine:** Code is parsed locally (tree-sitter). Docs, papers and images are sent to the model for concept extraction.

Installs PreToolUse hooks that fire before search and Read calls; they fail open and are time-bounded. An optional git hook regenerates exports on commit.

**Red flags**

- The package name graphifyy differs from the CLI name graphify, which makes typosquats easier. Double-check what you install.
- The README pushes a paid hosted product (Graphify Cloud); the open-source CLI does not need it.

### Advisories

| Advisory | Severity | Summary | Affected | Fixed in |
|---|---|---|---|---|
| [GHSA-pcc4-rvhr-2pr8](https://github.com/advisories/GHSA-pcc4-rvhr-2pr8) | Moderate | Fortran extractor include handling allows arbitrary host-file read and exfiltration when indexing an untrusted repo (the maintainers rate it high). | >= 0.7.2, < 0.9.70 | 0.9.70 |

## Install

Recommended scope: Run when needed

```
uv tool install graphifyy
graphify install
```

The PyPI package is graphifyy (two y). `graphify install` registers a skill and, on Claude Code, PreToolUse hooks; set it up per project if you only want occasional audits.

## Claims

| Claim | Independent | Source |
|---|---|---|
| 71.5x fewer tokens per query on a 52-file test repo | No, vendor's own | [link](https://github.com/Graphify-Labs/graphify) |

## Facts

- **Category:** CLIs and local services
- **License:** Apache-2.0
- **Maintainer:** company
- **Stars:** 130.4k · last push 2026-10-20 · latest release v0.9.93
- **Tags:** knowledge-graph, codebase-understanding, tokens
- **Last reviewed:** 2026-10-20

## Sources

- https://github.com/Graphify-Labs/graphify
- https://www.augmentcode.com/learn/graphify-knowledge-graph-codebase-skill

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/graphify.yaml)
