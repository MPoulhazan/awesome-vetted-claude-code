// Pulls live facts for every tool: GitHub stars, last push, latest release, and
// published security advisories (GitHub Advisory Database, by package and by repo).
// Writes generated/live.json; build.mjs merges it into the catalog.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { loadTools, LIVE_PATH } from "./lib.mjs";

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function gh(path) {
  const res = await fetch(`https://api.github.com${path}`, { headers });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub ${res.status} on ${path}`);
  return res.json();
}

const SEVERITY = { low: "low", medium: "moderate", moderate: "moderate", high: "high", critical: "critical" };

function fromGlobal(a) {
  const v = a.vulnerabilities?.[0] ?? {};
  return {
    id: a.ghsa_id,
    ...(a.cve_id ? { cve: a.cve_id } : {}),
    severity: SEVERITY[a.severity] ?? "moderate",
    summary: a.summary.trim(),
    ...(v.vulnerable_version_range ? { affected: v.vulnerable_version_range } : {}),
    ...(v.first_patched_version ? { patched: v.first_patched_version } : {}),
    published: a.published_at.slice(0, 10),
    url: a.html_url,
  };
}

function fromRepo(a) {
  const v = a.vulnerabilities?.[0] ?? {};
  return {
    id: a.ghsa_id,
    ...(a.cve_id ? { cve: a.cve_id } : {}),
    severity: SEVERITY[a.severity] ?? "moderate",
    summary: a.summary.trim(),
    ...(v.vulnerable_version_range ? { affected: v.vulnerable_version_range } : {}),
    ...(v.patched_versions ? { patched: v.patched_versions } : {}),
    published: a.published_at.slice(0, 10),
    url: a.html_url,
  };
}

const live = {};
for (const { tool } of loadTools()) {
  const repo = await gh(`/repos/${tool.repo}`);
  const release = repo ? await gh(`/repos/${repo.full_name}/releases/latest`) : null;

  // The global database is reviewed, so it wins over the repo's own advisory when both exist.
  const advisories = new Map();
  for (const a of (await gh(`/repos/${tool.repo}/security-advisories?state=published&per_page=100`)) ?? []) {
    advisories.set(a.ghsa_id, fromRepo(a));
  }
  const packages = [
    ...(tool.detect?.npm ?? []).map((name) => ["npm", name]),
    ...(tool.detect?.pypi ?? []).map((name) => ["pip", name]),
  ];
  for (const [ecosystem, name] of packages) {
    for (const a of (await gh(`/advisories?ecosystem=${ecosystem}&affects=${encodeURIComponent(name)}&per_page=100`)) ?? []) {
      advisories.set(a.ghsa_id, fromGlobal(a));
    }
  }

  live[tool.id] = repo
    ? {
        repo: repo.full_name,
        stars: repo.stargazers_count,
        pushed_at: repo.pushed_at.slice(0, 10),
        archived: repo.archived,
        latest_release: release?.tag_name ?? null,
        advisories: [...advisories.values()].sort((a, b) => a.id.localeCompare(b.id)),
      }
    : { missing: true, advisories: [] };
  console.log(`${tool.id}: ${repo ? `${repo.stargazers_count} stars, ${advisories.size} advisories` : "repo not found"}`);
}

mkdirSync(dirname(LIVE_PATH), { recursive: true });
writeFileSync(LIVE_PATH, JSON.stringify(live, null, 2) + "\n");
