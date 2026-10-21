# Context7

> Feeds the agent current, version-specific library documentation and code examples, as an MCP server or a CLI plus skill.

**Verdict: 🟢 Adopt** · Overall **4.5/5** · [upstash/context7](https://github.com/upstash/context7) · [Website](https://context7.com)

Fixes a daily, real problem at no cost. Only library names and questions leave your machine.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 5/5 | 4/5 | 4/5 | 5/5 |

## What problem it solves

The model writes code against APIs from its training data, which are often a year old. Context7 fetches current docs for the exact library and version.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Sends data to a third party | No |

**What leaves your machine:** The library names and questions the agent looks up, sent to Upstash's Context7 service.

Documentation comes from third-party repos indexed by the service; treat it as untrusted text that could carry prompt injection.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: User-wide (`~/.claude`)

```
npx ctx7 setup --claude
```

Lets you pick CLI + skill mode (no MCP) or MCP mode. A free API key raises rate limits. Remove with `npx ctx7 remove`.

## Facts

- **Category:** MCP servers
- **License:** MIT
- **Maintainer:** company
- **Stars:** 63.4k · last push 2026-10-20 · latest release @upstash/context7-mcp@4.4.4
- **Tags:** documentation, libraries, up-to-date
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/upstash/context7

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/context7.yaml)
