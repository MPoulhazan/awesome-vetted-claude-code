# shadcn/ui

> Accessible, composable React components you copy into your codebase with a CLI, plus the registry format most kits build on.

**Verdict: 🟢 Adopt** · Overall **5/5** · [shadcn-ui/ui](https://github.com/shadcn-ui/ui) · [Website](https://ui.shadcn.com)

The de facto base for React + Tailwind UI, and the format agents handle best. Source lands in your repo.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 5/5 | 5/5 | 5/5 | 5/5 |

## What problem it solves

Agents produce inconsistent, hand-rolled UI. shadcn/ui gives them a well-known component set and conventions they already write fluently.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| No | No | No network | No |

The CLI copies source files and installs their dependencies. Components from third-party registries are someone else's code - read them like any copied snippet.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: Project dependency

```
npx shadcn@latest init
npx shadcn@latest add button
```

Third-party registries (Kokonut UI, Magic UI, React Bits...) install through the same CLI; review what each registry adds.

## Facts

- **Category:** UI libraries
- **License:** MIT
- **Maintainer:** company
- **Stars:** 126.1k · last push 2026-10-20 · latest release shadcn@4.22.1
- **Tags:** react, tailwind, components, registry
- **Last reviewed:** 2026-10-21

## Sources

- https://github.com/shadcn-ui/ui
- https://ui.shadcn.com

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/shadcn-ui.yaml)
