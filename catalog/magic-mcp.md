# 21st Magic MCP

> Generates React UI components from a prompt using 21st.dev's component library; now part of the unified 21st MCP.

**Verdict: 🟡 Assess** · Overall **3/5** · [21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp) · [Website](https://21st.dev/mcp)

Mid-migration to a new product, and every prompt goes to a third-party service. Copy-in libraries such as shadcn/ui-based kits cover most needs without that.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 3/5 | 3/5 | 3/5 |

## What problem it solves

Building polished UI components from scratch. You describe a component and get one adapted from 21st.dev's community library.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Sends data to a third party | No |

**What leaves your machine:** Every MCP message, including your component requests and the context sent with them, is forwarded to 21st.dev.

Generated code lands in your repo; review it like any copied component.

**Red flags**

- The open-source package is now a thin proxy; the logic runs on 21st.dev's servers.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: Per project (`.claude/`)

```
npx @21st-dev/cli@latest init --client claude
```

Needs an API key from 21st.dev. Old Magic keys were reset. The @21st-dev/magic package is now only a compatibility proxy to the 21st MCP server.

## Facts

- **Category:** MCP servers
- **License:** ISC
- **Maintainer:** company
- **Stars:** 6.2k · last push 2026-09-09 · latest release v0.2.3
- **Overlaps with:** kokonut-ui, react-bits - pick one
- **Tags:** ui-generation, react, components
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/21st-dev/magic-mcp
- https://21st.dev/mcp

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/magic-mcp.yaml)
