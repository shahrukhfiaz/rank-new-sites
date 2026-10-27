// Builds the seo-playbook skill from PLAYBOOK.md, so the playbook stays the one source.
//   1. Renders data/backlink-catalog.csv into reference J of PLAYBOOK.md (between the catalog markers).
//   2. Splits PLAYBOOK.md into skills/seo-playbook/: SKILL.md, phases/ and references/.
// Usage: node scripts/build.mjs [--check]   (--check fails when the committed files are out of date)
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PLAYBOOK = join(ROOT, 'PLAYBOOK.md');
const CATALOG = join(ROOT, 'data', 'backlink-catalog.csv');
const SKILL_DIR = join(ROOT, 'skills', 'seo-playbook');
const CHECK = process.argv.includes('--check');

const NAME = 'seo-playbook';
const DESCRIPTION =
  'Step-by-step playbook for taking any new or young website (blog, local business, SaaS, online store, publisher, directory or programmatic site) ' +
  'from launch to indexed, ranked and cited in AI answers, organic only. Covers the technical foundation, content and programmatic pages without doorway risk, ' +
  'publishing pace on a new domain, a score loop that re-runs claude-seo, Lighthouse and other SEO checkers until 100, reading Search Console and Page indexing reasons, ' +
  'earning backlinks and vetting free directory lists with a catalog of common platforms, and AI search readiness. ' +
  'Use it whenever setting up, launching, auditing or growing a site\'s SEO, running SEO tools, deciding how many pages to publish, interpreting Search Console data, ' +
  'choosing which backlink or directory sites to join, or planning SEO work for another agent, even if the user never says "playbook".';

// The router: when to read each phase and reference file.
const PHASES = {
  1: ['1-foundation.md', 'The site is not public yet, or its technical base is unchecked: site type, canonicals, robots, templates, speed, sitemaps, measurement.'],
  2: ['2-content.md', 'Planning, writing or fact-checking pages, above all programmatic, location or product-variant pages.'],
  3: ['3-score-loop.md', 'Running claude-seo, Lighthouse or any SEO checker; asked to get scores to 100; after each publishing batch or template change.'],
  4: ['4-launch.md', 'Launching, or deciding how many pages to publish and how to get them discovered.'],
  5: ['5-search-console.md', 'Reading Search Console performance, URL Inspection or the Page indexing report.'],
  6: ['6-earned-authority.md', 'Backlinks, brand and local profiles, directories, launch sites, communities and digital PR.'],
  7: ['7-improve.md', 'Improving clicks and rankings on a live site; deciding what to change and what to leave alone.'],
  8: ['8-cadence.md', 'Setting the routine: each publishing day, weekly, monthly, after template changes.'],
};
const REFS = {
  A: ['a-technical-standards.md', 'Head tags, structured data by site type, robots and sitemaps, internal links, performance levers, accessibility, extraction.'],
  B: ['b-quality-gate.md', 'The checks a build or publish step fails on, per page type.'],
  C: ['c-indexing-caps.md', 'New pages per day and week on a new domain, and the freeze rules.'],
  D: ['d-search-console.md', 'API access, what each Page indexing reason means, changing content on a young site.'],
  E: ['e-link-triage.md', 'The fit test for any listing, verdicts by site type, platform notes.'],
  F: ['f-ai-search.md', 'AI crawlers, CDN defaults that block them, what makes a page quotable.'],
  G: ['g-tool-notes.md', 'Tool gotchas: claude-seo, Lighthouse, Playwright, audit sites.'],
  H: ['h-lessons.md', 'Symptom, cause and fix for common problems.'],
  I: ['i-checklists.md', 'New page, launch, weekly, monthly and directory listing checklists.'],
  J: ['j-backlink-catalog.md', 'Common backlink platforms: what each is, free route, signup barriers, link type, who it fits, what to watch out for. Grep it by name.'],
};
const GROUPS = [
  'Brand profiles and social',
  'Local business listings',
  'Publishing, newsletters and Q&A',
  'Data and code repositories',
  'Product launch sites',
  'AI, SaaS and software directories',
  'Developer and open-source directories',
  'Founder and startup communities',
  'Editorial outlets (no self-serve listing)',
  'Avoid for every site',
];

const outputs = new Map(); // path -> content, written (or compared) at the end

// ---------- 1. Catalog into PLAYBOOK.md ----------
function parseCsv(text) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n') { row.push(field.replace(/\r$/, '')); rows.push(row); row = []; field = ''; }
    else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((v) => v.trim()));
}
const cell = (v) => (v || '').replace(/\|/g, '/').replace(/\s+/g, ' ').trim() || 'n/a';

const START = '<!-- backlink-catalog:start -->';
const END = '<!-- backlink-catalog:end -->';
let playbook = readFileSync(PLAYBOOK, 'utf8').replace(/\r\n/g, '\n');
if (existsSync(CATALOG)) {
  const [head, ...data] = parseCsv(readFileSync(CATALOG, 'utf8'));
  const rows = data.map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ''])));
  const unknown = rows.filter((r) => !GROUPS.includes(r.group));
  if (unknown.length) throw new Error(`unknown group in catalog: ${[...new Set(unknown.map((r) => r.group))].join(', ')}`);
  const out = [
    START,
    '<!-- Generated from data/backlink-catalog.csv by scripts/build.mjs; edit the CSV, not this section. -->',
    '',
    `${rows.length} platforms, checked in October 2026.`,
    '- **Run the fit test (E.1) for your own site.** A platform that is wrong for one site can be right for another.',
    '- **Re-check before you sign up:** platforms change their free routes and link types often.',
    '- **DR** is the figure published in a public list of free backlink sites, not a fresh measurement.',
  ];
  GROUPS.forEach((group, i) => {
    const list = rows.filter((r) => r.group === group).sort((a, b) => (Number(b.dr) || 0) - (Number(a.dr) || 0) || a.site.localeCompare(b.site));
    if (!list.length) return;
    out.push('', `### J.${i + 1} ${group} (${list.length})`, '', '| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |', '| --- | ---: | --- | --- | --- | --- | --- | --- |');
    for (const r of list) {
      const site = r.url ? `[${cell(r.site)}](${r.url.trim()})` : cell(r.site);
      out.push(`| ${site} | ${r.dr || 'n/a'} | ${cell(r.what_it_is)} | ${cell(r.free_route)} | ${cell(r.signup_barriers)} | ${cell(r.link_type)} | ${cell(r.best_for)} | ${cell(r.watch_out)} |`);
    }
  });
  out.push('', END);
  const a = playbook.indexOf(START), b = playbook.indexOf(END);
  if (a < 0 || b < a) throw new Error('catalog markers not found in PLAYBOOK.md');
  playbook = playbook.slice(0, a) + out.join('\n') + playbook.slice(b + END.length);
  outputs.set(PLAYBOOK, playbook);
}

// ---------- 2. PLAYBOOK.md into the skill ----------
function sections(body) {
  const out = [];
  let cur = null;
  for (const line of body.split('\n')) {
    if (line.startsWith('## ')) { cur = { title: line.slice(3).trim(), lines: [] }; out.push(cur); }
    else if (cur) cur.lines.push(line);
  }
  return out;
}
const all = sections(playbook);
const find = (re) => {
  const s = all.find((x) => re.test(x.title));
  if (!s) throw new Error(`section not found: ${re}`);
  return s;
};
// Links relative to the file being written: SKILL.md (root), phases/ or references/.
function linkRefs(line, here) {
  const refPrefix = { root: 'references/', phases: '../references/', references: '' }[here];
  const phasePrefix = { root: 'phases/', phases: '', references: '../phases/' }[here];
  return line
    .replace(/\b(reference|Reference) ([A-J])((?:\.\d+)?)\b/g, (m, word, letter, sub) => `[${word} ${letter}${sub}](${refPrefix}${REFS[letter][0]})`)
    .replace(/\bPhase ([1-8])\b/g, (m, n) => `[Phase ${n}](${phasePrefix}${PHASES[n][0]})`);
}
// Section body: drop separators and HTML comments, lift headings one level, link references.
function body(lines, here) {
  return lines
    .filter((l) => !/^<!--.*-->$/.test(l.trim()) && !/^# Part \d\./.test(l))
    .join('\n')
    .trim()
    .replace(/\n+---$/, '')
    .split('\n')
    .map((l) => (l.startsWith('#') ? l.replace(/^#(#+) /, '$1 ') : linkRefs(l, here)))
    .join('\n');
}
// A table of contents for files longer than 100 lines.
function withToc(title, md) {
  const lines = md.split('\n');
  if (lines.length <= 100) return `# ${title}\n\n${md}\n`;
  const toc = lines.filter((l) => /^## /.test(l)).map((l) => `- ${l.slice(3)}`);
  return `# ${title}\n\n## Contents\n${toc.join('\n')}\n\n${md}\n`;
}

const intro = playbook.split('\n\n').find((p, i) => i > 0 && p.trim() && !p.startsWith('#') && !p.startsWith('**'));
const leadStart = playbook.indexOf('**Leading words used throughout:**');
const leading = playbook.slice(leadStart, playbook.indexOf('\n---', leadStart)).trim();
const rules = body(find(/^Rules that hold on every site$/).lines, 'root');
const phaseTitle = (n) => find(new RegExp(`^Phase ${n}\\. `)).title.replace(/^Phase \d\. /, '');
const refTitle = (l) => find(new RegExp(`^${l}\\. `)).title.replace(/^[A-J]\. /, '');

const skill = `---
name: ${NAME}
description: ${JSON.stringify(DESCRIPTION)}
license: MIT
---

# SEO playbook

${intro.trim()}

## How to use it

1. Find where the site stands in the phase map, then read that phase file in full before acting.
2. Work its steps in order. Each step ends on a **Done when** line: move on only when it is true.
3. Apply the rules below on every step. "Reference D.1" means section D.1 of the reference D file in the reference map; open a reference file when a step sends you there.
4. Where an example does not match the site (a city page, a product page, a local listing), apply the principle to the site's own facts.
5. For a whole launch, copy this checklist into your notes and tick it as each phase's last **Done when** holds:

\`\`\`
SEO progress:
${Object.keys(PHASES).map((n) => `- [ ] Phase ${n}: ${phaseTitle(n)}`).join('\n')}
\`\`\`

${leading}

## Rules that hold on every site

${rules}

## Phase map

| Phase | Read when | File |
| --- | --- | --- |
${Object.entries(PHASES).map(([n, [file, when]]) => `| ${n}. ${phaseTitle(n)} | ${when} | [phases/${file}](phases/${file}) |`).join('\n')}

## Reference map

| Reference | What it holds | File |
| --- | --- | --- |
${Object.entries(REFS).map(([l, [file, what]]) => `| ${l}. ${refTitle(l)} | ${what} | [references/${file}](references/${file}) |`).join('\n')}
`.replace(/\n{3,}/g, '\n\n');

if (DESCRIPTION.length > 1024) throw new Error(`description is ${DESCRIPTION.length} characters (max 1024)`);
if (skill.split('\n').length > 500) throw new Error('SKILL.md is over 500 lines');
outputs.set(join(SKILL_DIR, 'SKILL.md'), skill);
for (const [n, [file]] of Object.entries(PHASES)) {
  const s = find(new RegExp(`^Phase ${n}\\. `));
  outputs.set(join(SKILL_DIR, 'phases', file), withToc(s.title, body(s.lines, 'phases')));
}
for (const [l, [file]] of Object.entries(REFS)) {
  const s = find(new RegExp(`^${l}\\. `));
  outputs.set(join(SKILL_DIR, 'references', file), withToc(s.title, body(s.lines, 'references')));
}

// ---------- write, or check ----------
if (CHECK) {
  const stale = [...outputs].filter(([p, c]) => !existsSync(p) || readFileSync(p, 'utf8').replace(/\r\n/g, '\n') !== c);
  if (stale.length) {
    console.error(`out of date (run node scripts/build.mjs):\n${stale.map(([p]) => '  ' + p.slice(ROOT.length + 1)).join('\n')}`);
    process.exit(1);
  }
  console.log('skill and catalog are up to date');
} else {
  for (const dir of ['phases', 'references']) rmSync(join(SKILL_DIR, dir), { recursive: true, force: true });
  for (const [p, c] of outputs) {
    mkdirSync(dirname(p), { recursive: true });
    writeFileSync(p, c);
  }
  console.log(`built skills/${NAME}: SKILL.md ${skill.split('\n').length} lines, description ${DESCRIPTION.length} characters, ${Object.keys(PHASES).length} phases, ${Object.keys(REFS).length} references`);
}
