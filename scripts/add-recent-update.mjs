import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const categories = ["Research", "Publication", "Presentation", "Scholarship", "Project", "Teaching", "Professional"];
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const defaultFile = path.resolve(scriptDirectory, "../src/content/recentUpdates.ts");
const outputFile = path.resolve(process.env.RECENT_UPDATES_FILE || defaultFile);
const prompts = createInterface({ input: stdin, output: stdout });

const ask = async (message) => (await prompts.question(message)).trim();

async function askRequired(message, validate = () => null) {
  while (true) {
    const value = await ask(message);
    if (!value) {
      console.log("Please enter a value.");
      continue;
    }
    const error = validate(value);
    if (error) {
      console.log(error);
      continue;
    }
    return value;
  }
}

function validateIsoDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return "Use YYYY-MM-DD (for example, 2026-11-18).";
  const parsed = new Date(`${value}T00:00:00.000Z`);
  return Number.isNaN(parsed.valueOf()) || parsed.toISOString().slice(0, 10) !== value
    ? "That is not a valid calendar date."
    : null;
}

function validateUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:"
      ? null
      : "Use an http:// or https:// URL.";
  } catch {
    return "Enter a valid absolute URL.";
  }
}

function createId(date, title, existingIds) {
  const slug = title.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "update";
  const base = `${date.replaceAll("-", "")}-${slug}`;
  let id = base;
  let suffix = 2;
  while (existingIds.has(id)) id = `${base}-${suffix++}`;
  return id;
}

try {
  console.log("Add a concise, manually curated portfolio update. No network or Git access is used.\n");
  const date = await askRequired("Date (YYYY-MM-DD): ", validateIsoDate);
  const category = await askRequired(`Category (${categories.join(" / ")}): `, value =>
    categories.includes(value) ? null : `Choose one of: ${categories.join(", ")}.`);
  const title = await askRequired("Title: ");
  const summary = await askRequired("Short summary (1–2 sentences): ", value =>
    value.length <= 500 ? null : "Keep the summary to 500 characters or fewer.");
  const sourceLabel = await ask("Primary source label (optional; leave blank to omit): ");
  const sourceUrl = sourceLabel
    ? await askRequired("Primary source URL: ", validateUrl)
    : "";

  const existingFile = await readFile(outputFile, "utf8");
  const existingIds = new Set([...existingFile.matchAll(/(?:^|\s)["']?id["']?\s*:\s*["']([^"']+)["']/g)].map(match => match[1]));
  const entry = {
    id: createId(date, title, existingIds),
    date,
    category,
    title,
    summary,
    ...(sourceLabel ? { sourceLabel, sourceUrl } : {})
  };
  const serialized = JSON.stringify(entry, null, 2)
    .split("\n")
    .map(line => `  ${line}`)
    .join("\n")
    .replace(/^(\s*)"([^"]+)":/gm, "$1$2:");
  const closingIndex = existingFile.lastIndexOf("\n];");
  if (closingIndex < 0) throw new Error("Could not find the recentUpdates array ending; file was not changed.");
  const existingEntries = existingFile.slice(0, closingIndex).trimEnd();
  const updatedFile = `${existingEntries},\n${serialized}${existingFile.slice(closingIndex)}`;
  await writeFile(outputFile, updatedFile, "utf8");
  console.log(`\nAdded update ${entry.id}. File changed: ${path.relative(process.cwd(), outputFile)}`);
} catch (error) {
  console.error(`\nUpdate was not added: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
} finally {
  prompts.close();
}
