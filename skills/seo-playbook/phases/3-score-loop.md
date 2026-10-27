# Phase 3. The score loop: every tool to 100, round after round

## Contents
- 3.1 Install the tools (once per machine)
- 3.2 The tool list: run every one that applies
- 3.3 One brief for every agent
- 3.4 Run the loop
- 3.5 What to expect

Run every SEO tool against the pages, fix what they find, deploy, and run them all again. Repeat until each tool reads 100, or until every point still missing is a **ceiling item** (see 3.4). Lighthouse is one tool among many: the claude-seo agents, accessibility, extraction, structured data and the search consoles each count. Run the loop on the templates before launch, on every publishing batch, after every template change, and as a full-site loop each month.

## 3.1 Install the tools (once per machine)

**claude-seo**, a Claude Code plugin (MIT, https://github.com/AgriciDaniel/claude-seo).
- **Check first:** run `/seo doctor`. When the `/seo` commands are missing, install the plugin inside Claude Code with the commands below.
- **Put these steps at the top of any plan.** The machine that runs the plan may not have the plugin yet.

```
/plugin marketplace add AgriciDaniel/claude-seo
/plugin install claude-seo@agricidaniel-claude-seo
/seo setup
/seo doctor
```

- `/seo setup` builds the plugin's own Python environment and installs Playwright Chromium. Nothing is installed globally.
- `/seo doctor` checks readiness without changing anything. Run setup again only when doctor or a script says setup is required.
- A manual install on Windows is `git clone --depth 1 https://github.com/AgriciDaniel/claude-seo.git`, then read `claude-seo\install.ps1` and run it with `powershell -ExecutionPolicy Bypass -File claude-seo\install.ps1`.
- Every bundled script runs through the launcher: `"<plugin dir>/scripts/claude-seo" run <script.py> [args]`. Never call the scripts with a bare Python.

**Google data for the plugin.** The config file is `~/.config/claude-seo/google-api.json`, with `service_account_path`, `api_key`, `default_property` (for example `sc-domain:example.com`) and `ga4_property_id`. Check it with `claude-seo run google_auth.py --check --json`.
- An API key unlocks PageSpeed Insights and CrUX.
- A service account ([reference D.1](../references/d-search-console.md)) unlocks Search Console, URL Inspection and sitemaps.
- A GA4 property ID unlocks organic traffic reports.
- Keep every key in owner-only files, never in git or chat.

**The other tools:**
- **Lighthouse:** `npx lighthouse <url> --output html --output-path report.html` (mobile is the default; add `--preset=desktop`).
- **axe accessibility:** `npx @axe-core/cli <url>`.
- **Playwright with Chrome** for screenshots and a responsive check at 320 to 1920 px, including Android's Roboto font at 320 and 344 px.
- **trafilatura** for extraction checks. It ships in the claude-seo environment; elsewhere, `pip install trafilatura`.
- **Free web checkers, no install:**
  - Google PageSpeed Insights (live lab and field data);
  - the Rich Results Test;
  - the Schema Markup Validator (validator.schema.org);
  - Seobility's free SEO check, one page at a time.

**Done when:** `/seo doctor` passes, `google_auth.py --check` shows the tier you expect, and a Lighthouse and an axe run complete on one page.

## 3.2 The tool list: run every one that applies

| Tool | How | What it scores | Target |
| --- | --- | --- | --- |
| Full audit | `/seo audit <url>` | SEO Health Score: technical 22%, content 23%, on-page 20%, schema 10%, performance 10%, AI search 10%, images 5% | 100 |
| Technical | `/seo technical <url>` | Crawlability, indexability, security, URLs, mobile, Core Web Vitals, rendering | 100 |
| Content | `/seo content <url>` | E-E-A-T, depth, readability, thin content, AI citation readiness | 100 |
| Schema | `/seo schema <url>` | JSON-LD validity and coverage | 100 |
| Sitemap | `/seo sitemap <url>` | Format, coverage, indexable-only URLs | 100 |
| Images | `/seo images <url>` | Alt text, sizes, formats, lazy loading, layout shift | 100 |
| AI search | `/seo geo <url>` | Crawler access, passage citability, entity clarity, brand signals | 100 |
| Agent readiness | `/seo agentic <url>` | Lighthouse Agentic Browsing, accessibility tree, AI agent access | 100, and 3/3 in Lighthouse |
| Search experience | `/seo sxo <url>` | Page type against the results page, first screen, user stories, personas | 100 |
| Single page | `/seo page <url>` | Everything for one URL | 100 |
| Topic structure | `/seo cluster <seed keyword>` | Hubs, spokes and internal links | 100 |
| Templated pages | `/seo programmatic <url>` | Uniqueness, thin pages, index bloat | 100 |
| Local (local businesses only) | `/seo local <url>` | Business profile, name/address/phone consistency, citations, reviews, local schema | 100 |
| Online stores only | `/seo ecommerce <url>` | Product schema, product pages, shopping visibility | 100 |
| Languages (multilingual sites only) | `/seo hreflang <url>` | hreflang pairs and codes | 100 |
| Links | `/seo backlinks <url>` | Referring domains, anchors, toxic links | Reported; it rises only with earned links |
| Google data | `/seo google pagespeed <url>`, `crux`, `gsc`, `inspect-batch` | Field Core Web Vitals, indexing, search performance | Good on every metric; 0 errors |
| Change watch | `/seo drift baseline <url>`, then `/seo drift compare <url>` | Regressions between rounds | 0 regressions |
| Lighthouse | CLI, mobile and desktop | Performance, accessibility, best practices, SEO, Agentic Browsing | 100 in all four, 3/3; mobile performance judged as the median of 3 runs |
| axe | CLI | WCAG violations | 0 |
| Responsive check | Playwright | Overflow, cut-off controls, tap targets, text sizes | 0 blocking issues |
| Extraction | trafilatura on the built or live HTML | The H1 and the answer come out first; tables and sources survive | Pass |
| Rich Results Test and Schema Markup Validator | Web | Errors and warnings | 0 |
| Seobility | Web | On-page, structure, links, speed | 100 |
| Search Console and Bing | Reports | Page indexing, rich result reports, manual actions | Only intended reasons; 0 errors |

Use `/seo content-brief` and `/seo flow` when a finding calls for new or rewritten copy. Skip only the tools that cannot apply: local without a real address, ecommerce without products, hreflang with one language.

**Done when:** every applicable tool has a round-0 score, written into a scoreboard file (one row per tool, one column per round).

## 3.3 One brief for every agent

Before a round, write one `BRIEF.md` that every claude-seo agent reads first:
- **Pages:** each live URL beside its source file, plus the template and metadata files.
- **What the site is**, and the claims that must stay true.
- **Tools and environment:** the launcher path, the Python variable, quirks of the shell.
- **The hard rules for any proposed fix:** the quality gate ([reference B](../references/b-quality-gate.md)), forbidden claims for the business, "never invent statistics; every new fact needs a primary-source URL you opened", the author rule, free tools only if that is the budget.
- **Output:**
  - the agent edits nothing but its own report;
  - a score per page with a one-line verdict;
  - findings, most severe first, each with an exact location and a concrete fix (replacement text, or the exact markup change);
  - a **Ceiling** section listing what cannot be fixed in content, with the points each item costs.

Spawn the agents in parallel, one per dimension (`claude-seo:seo-technical`, `seo-content`, `seo-schema`, `seo-sitemap`, `seo-images`, `seo-geo`, `seo-agentic`, `seo-sxo`, `seo-visual`, `seo-performance`, plus `seo-local`, `seo-ecommerce`, `seo-cluster` or `seo-google` where they apply). They often stop at their turn limit; resume each one with a message rather than starting it over.

**Done when:** every agent has written its report with scores, located fixes and a ceiling section.

## 3.4 Run the loop

1. **Baseline:** `/seo drift baseline <url>` for each page, and round 0 in the scoreboard.
2. **Run every tool** from 3.2, with the agents working from the brief.
3. **Verify each finding before fixing it.** Tool advice is sometimes wrong:
   - test extraction claims with trafilatura;
   - test schema claims in the Rich Results Test;
   - check every factual fix at the primary source.

   Discard what fails and note why.
4. **Fix every verified finding.** Run the site's checks and build, deploy, and record the change in a change ledger.
5. **Re-run every tool** with the same brief and agents. Write round N+1 into the scoreboard, and run `/seo drift compare` to catch regressions.
6. **Repeat from step 2** while any tool is below 100 with a fixable finding.

A **ceiling item** is a deduction that no code or content change can honestly remove. It is one of three kinds:
- **owner input:** a named author or editor, a real address and phone, real reviews, a business partner or licence to name;
- **real-world data:** Core Web Vitals field data, backlinks, citations, brand mentions;
- **time:** domain age.

**Done when:** every tool reads 100, or two rounds in a row produce no fixable finding and every missing point sits in the scoreboard as a ceiling item. Each ceiling item names its tool, the points it costs and what would unblock it. Hand that list to the owner, and resume the loop as soon as any item is unblocked.

**Guardrails:**
- Raise a score only with real improvements. Never invent an author, address, phone, review, rating, statistic or award, and never add markup for things that do not exist.
- A score never overrides the content rules or the claim rules.
- Keep a change only when the page measurably improves. Inlining "critical CSS" can raise one Lighthouse number and add layout shift; deferring a form can gain nothing beyond run-to-run noise. Measure, then keep or revert.
- Scores from AI agents move 2 to 3 points between runs. Compare like with like: the same agent, the same brief, the same pages.

## 3.5 What to expect

- **Lighthouse** can reach 100 in all four categories on every indexable template. Noindex pages score SEO in the high 60s by design; never index a page only to raise that number.
- **AI-scored tools** (content, AI search, search experience, local) usually stop a few points short of 100 on a new site. The points left are ceiling items: a named expert, a real address and phone, real reviews, backlinks, domain age and field data. That is the expected end state until they exist.
- **One-off audit sites** count distance as slowness: a fast server far from the audit tool reads slow. A CDN fixes that, not the code.

**Done when:** the owner has the ceiling list and knows which items they can supply.
