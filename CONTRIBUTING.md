# Contributing

One tool = one file in [`data/`](data/), named after its `id`. Everything else (`README.md`, `tools.json`, `catalog/`) is generated.

## Add or update a tool

1. Copy an existing file in `data/` that looks like yours (a plugin, a UI library...) to `data/<id>.yaml`.
2. Fill every required field. [`schema/tool.schema.json`](schema/tool.schema.json) describes each one.
3. Run `npm install` once, then `npm run build`. It validates your file and regenerates the catalog.
4. Commit the YAML and the generated files, then open a pull request.

With Claude Code, open this repo and run `/scout <tool name or URL>` to do all of the above.

## What a good review contains

- **Read the code, not just the README.** Say whether it runs code, installs hooks, opens a port, runs in the background, and what leaves your machine.
- **Check advisories.** Search the [GitHub Advisory Database](https://github.com/advisories) for the repo and each package. List every one, with the affected range and fixed version. Leave `patched` out when no fix is confirmed.
- **Separate claims from evidence.** Vendor numbers go in `claims` with `independent: false`.
- **Name the overlaps.** If it does the same job as another tool, say so - stacking them usually hurts.
- **Link your sources** and set `last_reviewed` to today.

## Scores

Score honestly using the rubric in the README. The security score drives the most important decision readers make, so explain it in `security.notes`.

## Weekly refresh

A scheduled workflow pulls stars, releases and new advisories into `generated/live.json` and opens a pull request. New advisories show up as "auto-detected, not reviewed yet" until someone curates them into the tool's YAML file and revisits its scores and verdict.

## Reporting a vulnerability in a listed tool

Report it to the tool's maintainers first. Once an advisory is public, open an issue or pull request here.
