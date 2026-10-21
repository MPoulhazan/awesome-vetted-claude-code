# Supabase MCP

> Official Supabase MCP server - tables, SQL, migrations, logs, edge functions and docs for your projects.

**Verdict: 🔵 Trial** · Overall **3.7/5** · [supabase/mcp](https://github.com/supabase/mcp)

Very handy, but it can run arbitrary SQL with your account's rights. Safe enough when scoped, read-only and kept away from production.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 4/5 | 3/5 | 3/5 | 5/5 |

## What problem it solves

Schema work, debugging and migrations mean jumping to the Supabase dashboard. The agent can inspect and change the project directly.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| No | No | Sends data to a third party | No |

**What leaves your machine:** Query results - including your users' data - come back into the model's context.

Rows written by your users are untrusted input; a crafted row can carry prompt injection that steers write tools. Read-only mode and project scoping remove most of the blast radius.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: Per project (`.claude/`)

```
claude mcp add --transport http supabase "https://mcp.supabase.com/mcp?project_ref=<project-ref>&read_only=true"
```

Scope it to one project with project_ref and start with read_only=true. Point it at a development project or branch, never production.

## Facts

- **Category:** MCP servers
- **License:** Apache-2.0
- **Maintainer:** official
- **Stars:** 3.0k · last push 2026-10-20 · latest release mcp-server-supabase-v0.14.0
- **Tags:** database, postgres, backend
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/supabase/mcp

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/supabase-mcp.yaml)
