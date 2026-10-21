---
name: scout
description: Research a Claude Code plugin, skill, MCP server, CLI or library and add or update its security-first review in this catalog. Use when the user runs /scout <name or URL>, or asks to review, vet, rate or add a tool to the list.
---

# Scout a tool

You add or update one entry in `data/<id>.yaml`, following `schema/tool.schema.json`, then rebuild. Write the entry in English.

## 1. Identify the real project

- Resolve the name to one GitHub repo. Hyped tools often have look-alike repos and renamed owners: follow redirects (`gh api repos/<owner>/<name>` returns the current `full_name`) and prefer the repo the official package points to.
- If `data/` already has an entry for it, you are updating that file. Keep its `id`.
- If several unrelated projects share the name, ask the user which one before writing anything.

## 2. Gather facts, don't trust the README alone

- Metadata: `gh api repos/<owner>/<name>` (stars, license, pushed_at, archived) and `gh api repos/<owner>/<name>/releases/latest`.
- What it really installs: list the tree (`gh api "repos/<owner>/<name>/git/trees/HEAD?recursive=1"`) and look for hooks, scripts, binaries, servers, install scripts, telemetry, and code that sends data out.
- Install route: the exact commands from the README, and whether a default path signs you in to a hosted service.
- Advisories, all three:
  - `gh api "repos/<owner>/<name>/security-advisories?state=published"`
  - `gh api "/advisories?ecosystem=npm&affects=<package>"` and `ecosystem=pip` for each published package
  - a web search for "<name> CVE" and "<name> security"
  When the repo's advisory and the GitHub Advisory Database disagree on the fixed version, record the advisory without `patched` and explain the conflict in `red_flags`.
- Claims vs. evidence: look for independent benchmarks or write-ups. Vendor numbers go in `claims` with `independent: false`.
- Overlaps: compare with existing entries in `data/` and well-known alternatives.

## 3. Write the entry

Copy the closest existing file as a template. Then:

- `summary` at most 140 characters; `problem` says who it helps and how.
- `security` fields from what you saw in the code, not from marketing. `data_leaves_machine` says what goes where.
- Scores follow the rubric in `scripts/build.mjs` (README "How tools are rated"). Security 1 if a high or critical advisory has no confirmed fix.
- `verdict`: adopt, trial, assess or hold, with a one- or two-sentence `verdict_reason`.
- `detect` lists every plugin id, skill folder, npm and PyPI name, so dashboards can match installs.
- `last_reviewed` is today; `sources` links every page you relied on.

## 4. Build and report

- Run `npm run build`. Fix any validation error it prints.
- Don't edit `README.md`, `tools.json` or `catalog/` by hand.
- Report to the user: verdict, overall score, security findings (advisories first), overlaps, and anything you could not verify.
