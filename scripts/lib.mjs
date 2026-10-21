import { readdirSync, readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const LIVE_PATH = join(ROOT, "generated", "live.json");

export function loadTools() {
  const dir = join(ROOT, "data");
  return readdirSync(dir)
    .filter((f) => f.endsWith(".yaml"))
    .sort()
    .map((f) => ({ file: f, tool: YAML.parse(readFileSync(join(dir, f), "utf8")) }));
}

export function loadLive() {
  return existsSync(LIVE_PATH) ? JSON.parse(readFileSync(LIVE_PATH, "utf8")) : {};
}
