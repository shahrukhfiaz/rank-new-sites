# SEO Playbook: from launch to indexed, ranked and cited

A step-by-step method for taking a new or young website from zero to search traffic and AI citations, organic only: no paid links and no shortcuts that risk a penalty. It works for any kind of site, including a blog, a local business, a SaaS product, an online store, a publisher, and a directory or programmatic site. It is written for AI agents and works just as well for people.

**How to use it.** Work through the phases in order. Each step ends on a **Done when** line; move on only when it is true. Part 2 is reference material that the steps point to; read a section when a step sends you there. The rules in the next section apply to every step. Where an example does not match your site, apply the principle to your own facts.

**Leading words used throughout:**
- **people-first:** written for the searcher, not for the ranking.
- **earned:** a link or mention given on merit, never bought or swapped.
- **doorway:** a page that differs from its siblings only by a swapped name, such as a city or a product variant.
- **gate:** an automated check that the build or publish step fails on.
- **score loop:** run every tool, fix what it finds, run it again, until 100 or only ceiling items remain (Phase 3).
- **ceiling item:** a missing point that no honest code or content change can remove: owner input, real-world data or time.
- **settle period:** the first 4 to 8 weeks, while search engines test a new site.
- **one change, one baseline:** change one thing, record its starting numbers, judge it later.

---

## Rules that hold on every site

1. **People-first and true.** Every claim is checkable against a primary source (a government body, a statute, a standards body, the data's owner), and every number on the site comes from one source of truth. Cite the page that supports the claim, not a home page.
2. **Earned authority only.** Links come from honest fits: a real profile, a real listing in the right category, a real article, a real dataset. **Skip every listing that asks for something back**: a badge or link on your site, a reciprocal link, or payment for a followed link. Google's spam policies count link exchanges, paid links and automated mass submissions as link schemes. **The usual exception is Product Hunt**: its badge is optional and not a condition of listing. If you add another badge anyway, make it a recorded decision, keep it on one page (never sitewide), and note the risk.
3. **Describe the site as what it is.** A recipe blog is not "SaaS", and a plumbing company is not "an AI tool". Listing a site in the wrong category to get a link misrepresents it and puts it in front of the wrong audience.
4. **Bot checks belong to people.** An agent never solves, bypasses or outsources a CAPTCHA or "verify you are human" check (no solver services, even with a key someone hands you), and never enters a phone number. The pattern that works: the agent prefills the form, a person clicks the check, and the agent finishes.
5. **Secrets stay out of git and chat.** Passwords, API keys and tokens live in an owner-only file or a secret store. When printing anything from a credentials file, mask every field after the identifier. If a secret leaks into a log or chat, rotate it the same day.
6. **One change, one baseline.** Record every content or template change with its date, files, URLs and starting Search Console numbers, then judge it after 3 to 4 weeks. During the settle period, change little and measure a lot.
7. **The indexing pace is a rule, not a target.** A new domain publishes a capped number of new indexable pages per day and week (reference C), even when more drafts are ready.
8. **Every tool at 100.** Run every SEO tool, fix what it finds and run it again, until each one reads 100 or only ceiling items remain (Phase 3). Never raise a score by inventing anything.

---

# Part 1. The phases

## Phase 1. Foundation, before the first page is public

### 1.1 Know what kind of site it is

| Site type | Pages that earn search traffic | Watch for |
| --- | --- | --- |
| Blog or publisher | Articles that answer one question each, topic hubs | Thin posts, generic filler, no visible author or editorial standard |
| Local business | One page per service, a location page, a contact page with the real name, address and phone | Business profile listings, the same name, address and phone everywhere, real reviews only, no virtual-office addresses |
| SaaS or software | Feature, use-case, integration and comparison pages, docs, free tools | Thin "alternatives" pages, content hidden behind sign-up |
| Online store | Category and product pages, buying guides | Copied manufacturer text, faceted URLs that multiply, Product markup without a real price and stock |
| Directory or programmatic | Location, item or comparison pages built from data, plus hubs | Doorway risk: each page needs unique substance or stays out of the index |
| Data or tools site | Calculators, datasets, reports | Make the data citable: method, date, download, licence |

**Done when:** you can name the site type, its money pages and its main risk.

### 1.2 One canonical origin
- Pick one origin, such as `https://www.example.com`. Every other host and scheme returns a **301** to it: http, the bare domain, and www over http.
- Every internal link, canonical, hreflang, sitemap URL and structured-data `@id` uses that origin and the same trailing-slash form as the URL the server actually serves.
- A canonical that points at a URL which redirects is a real and common bug. Build every URL through one helper, or set the site address once in your CMS (WordPress site URL and permalinks, the Shopify primary domain).

**Done when:** `curl -sI` on each variant shows one 301 hop to the canonical, and a crawl finds no internal link that redirects.

### 1.3 Robots and crawler access
- `robots.txt` disallows only private paths, such as an API, a cart or an admin area. Never block CSS, JavaScript or image folders: search engines render pages and need them.
- **Allow AI crawlers** unless the owner decides otherwise: OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Applebot, Bingbot and Googlebot. Repeat the private-path disallow in each named group. Blocking them removes the site from AI answers.
- Name the sitemap index in `robots.txt`.

**Done when:** a live fetch of `robots.txt` and Search Console's robots report show pages, styles and scripts allowed and only the private paths blocked.

### 1.4 Templates that pass the standards in reference A
- **Titles and descriptions:** titles of 60 characters or fewer (drop the brand suffix when it would not fit); meta descriptions of 70 to 160 characters.
- **Page structure:** one H1 per page; an answer under the H1; a visible "Updated" date equal to `dateModified` and to the sitemap `lastmod`.
- **Structured data:** JSON-LD from one builder, never hand-written per page.
- **Share images:** a 1200x630 image per page that shows the right subject.
- **Accessibility:** no empty alt and no text-less links (A.6).
- **Extraction:** content that text extractors keep (A.7).

**Done when:** a smoke test over the built site fails on a title over 60 characters, a description outside 70 to 160, a missing canonical, a redirecting internal link, a missing H1 or an unrendered placeholder, and it passes. On a CMS, an SEO plugin's site audit plus a crawler can stand in for the smoke test.

### 1.5 Speed and mobile
- Aim for Lighthouse 100 in performance, accessibility, best practices and SEO on every template (A.5 lists the levers).
- Test on a **real Android phone**, or in Roboto at 320 and 344 px with a 1.15 text scale. Windows and Mac fonts are narrower than Android's and hide overflow: a navbar that fits on a laptop can overflow on a phone.

**Done when:** Lighthouse on each template scores 100 on desktop and 90 to 100 on mobile (the median of 3 runs), and a 320 to 1440 px check finds no horizontal scroll, cut-off control or overlapping element.

### 1.6 Sitemaps that tell the truth
- List **only indexable pages**: no noindex pages, no redirects, no parameter URLs.
- `lastmod` is the page's real last content change, never the build time.
- Split large sites into per-template sitemaps under one index (articles, products, locations, tools), and give each publishing batch its own file, so Search Console coverage can be read per batch.

**Done when:** every URL in the sitemaps returns 200, is self-canonical and indexable, and `lastmod` changes only when the content changes.

### 1.7 Measurement wiring
- **Google Search Console** on a **Domain property**, verified by DNS.
- **Bing Webmaster Tools**: one click with "Import from Google Search Console".
- **IndexNow** key file at the root, for Bing and other participating engines.
- **Analytics only behind consent** where the law requires it (EU and UK rules, and US state laws that require honoring Global Privacy Control). Opt-in analytics undercount traffic, so count conversions (leads, sales, sign-ups) in your own database or CRM.
- **A Search Console service account** for API reads (reference D.1).

**Done when:** both consoles show the property verified and the sitemap index submitted, and an API query returns rows.

---

## Phase 2. Content that deserves to rank

### 2.1 Plan the targets
- Win the **long tail first**: specific, low-competition queries (one question, one location, one use case, one tool), then broader topics, and head terms last. A new domain rarely ranks for head terms for months.
- Map each query group to exactly one page, so two pages never compete for the same search.

**Done when:** each planned page has a primary query group, a reason a searcher would prefer it to what ranks now, and no overlap with another page.

### 2.2 Programmatic and location pages only with real, unique substance
Pages generated from a template (city pages, "X in Y" pages, product variants, comparisons) are the classic **doorway** risk, and Google's scaled-content and doorway policies target them. The rules that keep them safe:
- **No narrative, no page.** A page becomes indexable only when it has real, unique substance: hand-written analysis, local facts, its own data. There is no indexable fallback template.
- **Template-only pages stay noindex** until they earn that substance. Links to them carry `rel="nofollow"`, so crawlers do not spend visits on pages you have excluded.
- **Pairs must say different things.** "A to B" and "B to A", or "plumber in X" and "plumber in Y", need different facts, not a swapped name.
- **Merge thin variants.** A town with nothing distinct to say folds into a county or region page; fewer, better pages beat many thin ones.
- **A gate enforces it** (reference B).

**Done when:** the gate passes on every indexable templated page, and the highest similarity between any two is below the threshold.

### 2.3 Every page answers first
- The opening paragraph answers the page's question in its first sentence, with a dated fact or number where one exists. It is the passage search engines and AI answers quote.
- An H2 phrased as a question gets its answer in the first sentence below it.
- Long articles carry at least one table, sources as a visible list (and as schema `citation`), and FAQs that match real questions.
- If pages quote numbers (prices, rates, specs, stock), keep one data source and render every number from it, so tables, text and meta descriptions never disagree. Label the date the numbers are for.

**Done when:** a reader who sees only the first paragraph has the answer, and every figure on the page traces to the data source or a cited reference.

### 2.4 Fact-check on publish day, not only at writing time
Drafts written weeks earlier go stale or were wrong from the start. Typical catches on publish day:
- a misquoted regulator warning;
- a tax bulletin or form that was replaced;
- a rule stated as universal that varies by state or country;
- a fee or deadline that changed;
- a stale month label.

Before a draft goes live, give it to a fresh reviewer (one or two articles each) to re-read every dated or checkable claim against the primary source, check every source URL, and return exact replacements.

**Done when:** every claim in the draft is confirmed against its primary source that day, or rewritten to what the source says.

### 2.5 Trust pages and authorship
- Publish an About page that says who runs the site and how it makes money, an editorial and corrections policy, a contact page, and privacy and cookie policies. Add licence or credentials pages where the field needs them.
- **Local businesses:** show the real name, street address and phone the same way on the site and on every listing.
- **Money, health and legal topics:** a named, qualified author or reviewer raises trust. Name real people only; until one exists, use a team byline and a clear editorial policy.
- Show no testimonials, ratings or review markup until real, verifiable ones exist.

**Done when:** a stranger can tell who runs the site, how it earns money, where its facts come from and how to report an error.

---

## Phase 3. The score loop: every tool to 100, round after round

Run every SEO tool against the pages, fix what they find, deploy, and run them all again. Repeat until each tool reads 100, or until every point still missing is a **ceiling item** (see 3.4). Lighthouse is one tool among many: the claude-seo agents, accessibility, extraction, structured data and the search consoles each count. Run the loop on the templates before launch, on every publishing batch, after every template change, and as a full-site loop each month.

### 3.1 Install the tools (once per machine)

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
- A service account (reference D.1) unlocks Search Console, URL Inspection and sitemaps.
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

### 3.2 The tool list: run every one that applies

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
| Semrush Site Audit | Web, with an account | Errors, warnings and notices across the whole crawl (Site Health) | 0 errors; every warning fixed or shown to be a false positive |
| Semrush Backlink Audit | Web, with an account | Referring domains and Semrush's own "toxic" markers | Reported; disavow only on Google's two conditions (reference G) |
| Search Console and Bing | Reports | Page indexing, rich result reports, manual actions | Only intended reasons; 0 errors |

Use `/seo content-brief` and `/seo flow` when a finding calls for new or rewritten copy. Skip only the tools that cannot apply: local without a real address, ecommerce without products, hreflang with one language.

**Done when:** every applicable tool has a round-0 score, written into a scoreboard file (one row per tool, one column per round).

### 3.3 One brief for every agent

Before a round, write one `BRIEF.md` that every claude-seo agent reads first:
- **Pages:** each live URL beside its source file, plus the template and metadata files.
- **What the site is**, and the claims that must stay true.
- **Tools and environment:** the launcher path, the Python variable, quirks of the shell.
- **The hard rules for any proposed fix:** the quality gate (reference B), forbidden claims for the business, "never invent statistics; every new fact needs a primary-source URL you opened", the author rule, free tools only if that is the budget.
- **Output:**
  - the agent edits nothing but its own report;
  - a score per page with a one-line verdict;
  - findings, most severe first, each with an exact location and a concrete fix (replacement text, or the exact markup change);
  - a **Ceiling** section listing what cannot be fixed in content, with the points each item costs.

Spawn the agents in parallel, one per dimension (`claude-seo:seo-technical`, `seo-content`, `seo-schema`, `seo-sitemap`, `seo-images`, `seo-geo`, `seo-agentic`, `seo-sxo`, `seo-visual`, `seo-performance`, plus `seo-local`, `seo-ecommerce`, `seo-cluster` or `seo-google` where they apply). They often stop at their turn limit; resume each one with a message rather than starting it over.

**Done when:** every agent has written its report with scores, located fixes and a ceiling section.

### 3.4 Run the loop

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

### 3.5 What to expect

- **Lighthouse** can reach 100 in all four categories on every indexable template. Noindex pages score SEO in the high 60s by design; never index a page only to raise that number.
- **AI-scored tools** (content, AI search, search experience, local) usually stop a few points short of 100 on a new site. The points left are ceiling items: a named expert, a real address and phone, real reviews, backlinks, domain age and field data. That is the expected end state until they exist.
- **One-off audit sites** count distance as slowness: a fast server far from the audit tool reads slow. A CDN fixes that, not the code.

**Done when:** the owner has the ceiling list and knows which items they can supply.

---

## Phase 4. Launch and indexing control

### 4.1 Launch set and pace
- **Small sites launch whole.** A local business or a product site with a few dozen pages goes live at once; the caps below matter for sites that can generate hundreds of pages.
- **Large sites launch with at most about 100 indexable pages:** the strongest templated pages, the hubs that have real substance, tools, data pages, and core and trust pages. Hold the rest as drafts.
- Then publish within the caps in reference C. Track each batch in a staged sitemap.
- The sitemap only ever lists indexable pages, each with `lastmod` taken from its real last content change (1.6). Pages held back stay out of it until they publish.

**Done when:** you can state today's allowance from the publish history, and every publishing session uses it.

### 4.2 Ask for discovery after each batch
After every publishing batch:
1. **Re-submit the sitemap index** through the Search Console Sitemaps API or the Sitemaps report (reference D.1).
2. **Ping IndexNow** with the changed URLs.
3. **Use URL Inspection, then Request indexing** for the most important new pages, about 10 a day. That manual button is fine. The **Indexing API** is restricted to job postings and livestream video pages; never use it for ordinary pages.

**Done when:** the sitemap shows a fresh submission with no errors, and IndexNow returned success.

### 4.3 Expect the settle period
- Search engines show a new site deep in results while they test it: most early impressions sit at position 50 or worse, and clicks are rare.
- Crawling comes in a burst in the first days, then slows to a handful of pages a day.
- New pages can stay "URL is unknown to Google" for days after they publish.

This is normal. Do not react to it with rewrites.

**Done when:** the owner knows what the settle period looks like, so early numbers do not trigger panic edits.

---

## Phase 5. Read Search Console correctly (weekly from week 2)

Use the API (reference D) for performance data and URL Inspection, and the website for the Page indexing, Links, Manual actions and Core Web Vitals reports.

### 5.1 Diagnose before prescribing
- **Split queries into position bands:** 1 to 3, 4 to 10, 11 to 20, 21 to 50, 51 and worse. When most impressions sit at 51 or worse, the problem is **ranking**: no title earns a click on page 6.
- **Click-through work only pays on pages already in the top 15.**
- **Separate the noise:**
  - brand and `site:` searches (legal pages "ranking" for the brand name);
  - off-target queries that only share a word with the page;
  - impressions from countries you do not serve.
- **Read each page's rows by date.** A page can rank in the top 10 every day while its visible queries look worse, because Google hides rare queries. A page with daily top-10 positions and a click-through rate under 1% has a snippet problem, not a ranking problem.

**Done when:** you can state, with numbers, whether a page is limited by its ranking or by its snippet.

### 5.2 Page indexing reasons: what is fine and what is not
Reference D.2 has the full table. In short:
- **Fine:** "Alternate page with proper canonical tag" for parameter URLs, "Excluded by 'noindex' tag" for pages you excluded on purpose, "Page with redirect" for host variants, and data files under "Crawled, currently not indexed".
- **Act on:** errors, soft 404s, "Duplicate without user-selected canonical", and a rising "Crawled, currently not indexed" share on real pages. "Validate fix" is only for real problems you fixed.

**Done when:** each reason in the report is classified as intended, or as a problem with a cause.

---

## Phase 6. Earned authority

### 6.1 Brand and local profiles first
Real profiles under the brand name build entity recognition (`sameAs` in the Organization markup): a Facebook page, a LinkedIn company page, a YouTube channel, a Pinterest business account for visual content, a newsletter, and Crunchbase. Social profiles with a footer icon and the other profiles feed one merged `sameAs` list.
- **Local businesses** add Google Business Profile, Bing Places, Apple Business Connect and the main local directories, all with the same name, address and phone. A virtual office or a home address the business cannot show is not eligible.

**Done when:** every live profile is in `sameAs`, and its link back to the site has been checked while logged out.

### 6.2 Triage any directory list before submitting anything
Most "free backlink" lists are built for software launches. For a site that is not software, only a handful of entries honestly fit. The rest are:
- directories for AI tools or SaaS only (a misrepresentation for any other site);
- free listings that need a badge or a link back, or paid "dofollow" tiers (link schemes);
- editorial outlets with no self-serve listing;
- dead sites.

Run the fit test in reference E on every site, record the verdict and reason for each, and start from reference J, which describes the common platforms: what each is, its free route, signup barriers, link type and who it fits.

**Done when:** a tracker holds every site with a verdict, a reason, the link type and the next step.

### 6.3 Honest placements by site type
- **Every site:** brand profiles (6.1); a newsletter that carries real updates, where links in posts are usually followed.
- **Sites with original visuals** (recipes, design, maps, charts): Pinterest. Brand-new domains are sometimes blocked as spam until an appeal.
- **Sites with real open data:** Zenodo, which mints a DOI and makes the data citable, plus Kaggle and Hugging Face. Publish a new version when the data updates.
- **Sites with a real technical story** (how something was built): DEV, HackerNoon or a similar developer publication. Cross-posts set the canonical to the original.
- **Software and SaaS products:** launch sites and software directories in the right category (reference J), and Product Hunt with a personal maker account.
- **Local businesses:** the local listings in 6.1, the chamber of commerce, and industry associations that list members.
- **Founders willing to be named:** founder profiles such as Peerlist.

**Done when:** each placement's public page was loaded while logged out, the `rel` on its link was recorded, and its indexability was checked.

### 6.4 Platform realities (save the retries)
Reference E.3 lists them. The pattern: many platforms require a personal Google, LinkedIn, GitHub or X login; some block automated browsers outright; some delete new automated accounts; some charge to publish. Those become tasks for a person, with the values prefilled, or are dropped with a reason.

### 6.5 People-only channels
- Reddit and Quora answers come from a real, disclosed person, follow each community's rules, and stay helpful with or without a link.
- Hacker News forbids AI-written text: give the person facts, never a draft to paste.
- Product Hunt bans company accounts and asking for upvotes.

Prepare kits (questions found, facts checked, each place's rules) and let the person post.

**Done when:** the kit exists, every figure in it traces to the data, and the person has it.

### 6.6 Earn mentions with something worth citing
Original data, a free tool, a yearly report, or a local story earns mentions that no directory can. Pitch journalists through free expert-source platforms and local press, offer the data with a licence, and answer only questions you can source.

**Done when:** at least one asset exists that a journalist or blogger could cite, with its method and date on the page.

### 6.7 Pace and records
- Keep new referring domains to about 10 a week in the first two months, and never more than three times the trailing four-week average.
- Use a dedicated mailbox for listings. Verification codes often land in its spam folder, so check every folder.
- Keep a credentials register outside git, a tracker in git with every site's status and reason, and a private copy of the tracker with passwords only if the owner wants one.

**Done when:** the tracker and the register agree, and nothing secret is committed.

---

## Phase 7. Improve with evidence (from about week 3)

### 7.1 Small, measured changes on pages that are close
1. **Snippet test on a top-10 page with a low click-through rate:** an answer-first title and description, with figures computed from the data rather than typed. Record the baseline (impressions, clicks, position) in the change ledger, and hold other changes to that page until the result is judged after 28 days.
2. **Pages at positions 11 to 30:** add a section that answers the exact query, match the title to its wording, and add internal links with descriptive anchors.
3. **Seasonal queries:** act while the season runs. Put a current figure in the description and an exact-phrase internal anchor.

**Done when:** each change has a ledger entry with its baseline and a review date.

### 7.2 What not to do in the settle period
Reference D.3 has the full do and don't list. The core: no site-wide retitling, no URL changes, no deleting or noindexing pages that have impressions, and no reacting to daily swings (positions on a new site move 10 to 20 places from one day to the next).

### 7.3 Authority and speed carry the head terms
Pages sitting at position 80 or worse climb with authority: earned links, brand mentions and time. A CDN fixes slow responses for distant visitors, often the biggest speed gain for a site on a single server.

**Done when:** the owner knows which levers are rewrites and which are authority, and nobody rewrites a page at position 90 expecting clicks.

---

## Phase 8. Cadence

| When | Do |
| --- | --- |
| Each publishing day | Check the allowance; fact-check drafts on publish day; run the checks; publish; run the score loop on the new pages (Phase 3); record in the ledger; re-submit the sitemap and ping IndexNow |
| Weekly | Search Console pull (position bands, the top-20 count, pages close to page 1); URL Inspection of new pages; tracker update; link work within the pace |
| Monthly | Refresh dated facts and data; publish new dataset versions; re-judge snippet and seasonal tests against their baselines; a full-site score loop (Phase 3) |
| After a template change | The score loop on one page of each changed template: Lighthouse, axe, the responsive check, extraction and the claude-seo agents |

---

# Part 2. Reference

## A. Technical standards

### A.1 Head and metadata
- Titles: 60 characters or fewer, unique; the brand suffix only if it fits.
- **The H1 differs from the title** when a long title drops the brand suffix: keep the title as the search-facing line and give the H1 its own wording (for example a `heading` field in the article's front matter). Semrush flags an H1 identical to the title. A unit test can fail any article, drafts included, that lacks one.
- Meta descriptions: 70 to 160 characters, unique, carrying the answer (a number beats a promise).
- Canonical: self-referencing, absolute, the served URL with its trailing-slash form.
- `og:type article` with published and modified times on articles; a 1200x630 share image with alt text.
- A `robots` meta tag only where a page must stay out (`noindex, follow`).

### A.2 Structured data (one builder, a JSON-LD `@graph`)
- **Organization** with logo and `sameAs`; **WebSite**; **BreadcrumbList** on every page below home.
- **Article or BlogPosting** with an image (several aspect ratios), `datePublished`, `dateModified`, author, and `citation` from the sources.
- **LocalBusiness**, with the most specific subtype (such as `Plumber`, `Bakery` or `Dentist`), only for a real business at a real, verifiable address, with opening hours and the same name, address and phone as its listings.
- **Product and Offer** only with a real price and availability; review and rating markup only from real reviews shown on the page.
- **Dataset** with `distribution` (download links), licence, `temporalCoverage` and `measurementTechnique` on data pages.
- **SoftwareApplication** for software that has real ratings or reviews; **Service** for service pages. Google's Software App markup requires `aggregateRating` or `review`. On a free tool without real reviews, the node is an invalid item in the Rich Results Test, a markup error in Semrush, and earns nothing; let the WebPage node describe the page instead.
- **ImageObject** for credited photos, with `creditText`, `license`, `acquireLicensePage`, `creator` and `copyrightNotice`. Search Console's image metadata report warns when `copyrightNotice` is missing.
- **FAQPage** markup is harmless, but Google retired FAQ rich results in May 2026; keep FAQs for readers. HowTo rich results are gone too. Never mark up reviews, ratings or awards that do not exist.

### A.3 Robots, sitemaps and redirects
Disallow only private paths; allow the AI crawlers; name the sitemap index. Use only standard records (`User-agent`, `Allow`, `Disallow`, `Sitemap`): Semrush reports any other line, such as `Content-Signal`, as an invalid robots.txt format, so state such a policy in a `#` comment. Sitemaps hold only indexable pages, with honest `lastmod`, split per template and staged per batch. One 301 hop from every host variant.

### A.4 Internal links
- **Listing pages link only to indexable pages.** A page you noindexed on purpose (a template hub without its own text) is listed as plain text, not linked. A `rel="nofollow"` internal link is a Semrush warning. A plain link sends audit crawlers into the template pages, whose shared wording can trip the 85% duplicate-content error. Keep the noindex on the page itself.
- Use descriptive anchors that name the target's topic, such as "emergency boiler repair prices", not "click here".
- **Prefill and UI-state links use a fragment** (`/quote/#from=10001`), not a query string. Google generally ignores fragments in crawling and indexing. A query creates a crawlable duplicate for every link: the canonical folds it back, but crawlers still fetch it, and audit tools report the duplicate's hreflang and markup as errors. Readers should accept a query string too, for external links, and reload when only the fragment changes on the same page.
- **Never nofollow your own pages.** A sources list that cites one of the site's own pages renders it as a plain internal link (no nofollow, no new tab).
- **Cite primary sources with plain links.** A cited statute, agency or standard is a page you vouch for. Keep `nofollow` for competitors, paid placements and user content.
- **Some sources refuse audit crawlers but serve readers.** Examples: a shipping line that answers bots with 500, a review site that answers them with 404, a rail operator that times out for data-centre addresses, a legislature with a certificate chain only browsers repair. Semrush checks only followed external links: its check count rose about fourfold when citations became followed. Verify each failure from a browser and from a server in the target country. Then fix the links that are really broken, and give `nofollow` to hosts that block crawlers, from one host list that the sources list and the article Markdown plugin share. Re-check links inside tables and headings too; a tree walker that stops at tables misses them.
- **Link every download from at least two pages:** a file linked only from its own page shows as "only one internal link". Link it from a hub too.
- **Credit links to Wikimedia Commons** use the page-ID URL (`https://commons.wikimedia.org/w/index.php?curid=<id>`, from the Commons API): a `File:…jpg` URL reads to audit tools as an image file linked as a page.
- No orphan pages; every key page within three clicks of the home page.

### A.5 Performance levers that reach Lighthouse 100
- The above-the-fold image loads eagerly at high priority, with `sizes` matching the real column width and pre-cropped copies for phones.
- Load scripts at low priority, and only the parts of a UI library you use.
- Below-the-fold sections use `content-visibility: auto` with `overflow: hidden`; leave out the first screen, forms and sticky areas.
- Inline only small page styles. Measure any "critical CSS" tool: it can add layout shift.
- Start animations only when they are visible (an IntersectionObserver). Serve AVIF with a WebP fallback, with no fallback image over 200 KB.
- Every third-party image or embed sits in a box with a fixed size, so it causes no layout shift.
- **Repeated utility-class strings go into one named utility each** (with Tailwind, `@utility` and `@apply`): footer links, form fields and labels, banner buttons, animation classes. On utility-first sites, class attributes can be half of a page's HTML, and Semrush's "low text to HTML ratio" counts them. Compare screenshots before and after; they should be pixel-identical.
  - Keep every state colour of a component (invalid, dark, focus) inside the same utility. Split across a utility and a separate class, CSS order instead of the framework's sorting decides which wins.
  - **Icons come from one cached SVG sprite.** Each icon is `<svg class="ic-…"><use href="/sprite.svg#name"/></svg>`, with no paths and no viewBox. A generated base-layer class carries its default width, height, fill and stroke, so call-site utility classes still override them exactly as presentation attributes did. Icons whose paths carry their own classes stay inline, because page CSS does not reach into an external sprite. A test fails when the sprite or the classes drift from the icon definitions.
  - **A decorative icon repeated in a list** (a hover arrow on 51 links) is the link's `::after`: a CSS mask of the same path in `currentColor`, with the same size, timing and touch-screen rule. That is one rule in the cached stylesheet instead of 51 elements.
  - **A converter can do the class consolidation in bulk:**
    1. Rank class strings by total bytes on the pages under target.
    2. Find each exact literal in the source.
    3. Keep marker classes (`group`, `peer`, framework hooks such as `hs-*`, classes plain CSS targets) on the element.
    4. Skip any string that holds a class a script toggles (`hidden`, `invisible`).
    5. Replace only whole quoted literals.

    Then prove it: every used utility has a definition, a full build passes, and live-against-local screenshots in both themes are identical. When removing unused utilities, check the list against a plain text search before deleting anything.
  - **Calibrate the threshold.** Semrush's ratio matches visible text bytes over total HTML bytes. On one site every flagged page measured under 10.1% and every unflagged page over 9.9%. Target 11% for a margin.
  - **Where a hub is all photo tiles,** markup cuts may not be enough. Add real text the tiles do not show, such as each item's one-line summary from data already written and checked.
  - Never pad pages with text to raise the ratio. It is not a Google signal, and short pages with a full header and footer stay low.

### A.6 Accessibility that audit tools also check
- Decorative images are **CSS backgrounds**: some audit tools count `alt=""` as missing. A base map under a drawn overlay carries the description in its alt, with the overlay `aria-hidden`, so screen readers hear it once.
- Icon-only links keep `aria-label` and also contain screen-reader-only text: some crawlers and audit tools ignore `aria-label`.
- Data tables have no empty header cell (axe `td-has-header`). Scrollable tables are named regions.
- Small text keeps WCAG AA contrast. Tap targets are 24 px everywhere and 44 px on touch screens. Form fields are 16 px on touch screens, or iOS zooms into them.

### A.7 Extraction: how search and AI engines read the page
Text extractors such as trafilatura, and the AI systems built on them, drop whatever sits inside a `<button>` and pick the narrowest `<article>` element as the page.
- **Page header and FAQs:** the page header is a `<div>`. FAQ questions are text in an `<h3>`, with a transparent toggle button laid over it.
- **The article itself:** no `<article>` wraps only part of a page. The article body uses a neutral class.
- **Tables:** never add a hidden `<caption>`; it extracts as an extra row. Name the table with `aria-label` on its scroll region.
- **Bylines:** one `<p>` with the author name as plain text.
- **Reading order:** the cookie banner renders last in `<body>`, so the H1 and the answer are the first text an extractor meets.

Check with trafilatura on built pages after any template change.

## B. The quality gate (fail the build, not the review)

| Page type | Rules |
| --- | --- |
| Templated page (location, item, comparison) | An answer of 200 to 420 characters (35 to 75 words) that opens with the page's own dated fact; a body of 350 to 650 words with at least 3 subheadings; at least 3 data points; 4 to 8 FAQs with answers of 80 characters or more; at least 2 deep-linked https sources; every figure matches the data within 2%; 5-word-shingle Jaccard similarity of 0.12 or less against every sibling; no shared sentence of 10 or more words |
| Hub page | A body of 350 to 550 words, 4 to 6 FAQs, at least 3 deep-linked sources (never a home page), figures from the data source only, the same similarity rules |
| Guide or long article | A description of 80 to 160 characters; an answer of 200 to 420 characters; 800 to 1,800 words; at least 1 table; at least 3 sources; at least 4 FAQs; similarity of 0.10 or less |
| Blog post | A description of 80 to 160 characters; 650 to 1,400 words; at least 1 table; at least 2 sources; at least 3 FAQs; similarity of 0.10 or less |
| Everything | No stock filler phrases, no placeholders, no guarantees or "best"/"cheapest" claims you cannot prove, no fake discounts or urgency, no competitor names where you cannot back the comparison, and your business's own forbidden claims (for example licences or certifications it does not hold), checked in content and in rendered pages |

Jaccard similarity catches templating, and the shared-sentence check catches one pasted sentence that Jaccard dilutes. The gate is a floor, not proof of usefulness. Adjust the word ranges to your niche; keep the similarity and sourcing rules.

## C. Indexing caps and freeze rules (new domain)

| Phase | New indexable pages per day | Per week | Condition |
| --- | ---: | ---: | --- |
| Launch | about 100 in total | | Launch set only (small sites launch whole) |
| Launch week | 0 | 0 | |
| Weeks 2 to 8 | 5 | 25 | |
| Weeks 9 to 12 | 10 | 50 | At least 70% of pages live 21 days or more are indexed |
| Week 13 onward | 20 | 100 | At least 80% indexed |

- **Freeze new pages for 14 days** when pages live 28 to 35 days are less than 50% indexed, when "Crawled, currently not indexed" exceeds 30% of inspected URLs, or when organic clicks drop more than 30% week over week.
- **Refreshes:** 30 or fewer substantive refreshes a week and 2 or fewer a day.
- **A page's age** counts from the later of its publication date and the launch date.
- These caps are conservative choices, not published Google limits: they keep a new domain's quality signal clean while it earns trust.

## D. Search Console in practice

### D.1 API access
- In Google Cloud, create a project, enable the Search Console API, create a service account and download its JSON key. In Search Console, open Settings, then Users and permissions, and add the service account's email with **Full** permission. Full is enough to read data and submit sitemaps; do not grant Owner, which only the Indexing API needs.
- Store the key in an owner-only file, never in git or chat.
- **Useful calls:**
  - search analytics by date, query, page, device, country, and query plus page;
  - URL Inspection in batches (2,000 a day per property);
  - sitemaps list, get and submit.
- Data lags about 2 days. Totals include anonymized queries that the query list does not show.

### D.2 Page indexing reasons

| Reason | Usually means | Action |
| --- | --- | --- |
| Alternate page with proper canonical tag | Parameter or variant URLs whose canonical points to the clean page | None, if Google's chosen canonical equals the declared one |
| Excluded by 'noindex' tag | Pages you noindexed on purpose | None, if intended; check that none are pages you want indexed |
| Page with redirect | Host or scheme variants, old URLs | None, if they redirect to the right place |
| Crawled, currently not indexed | Doubt about quality or demand; also data files | Fine for CSV or PDF downloads. For real pages, improve or merge them, and watch the share |
| Discovered, currently not indexed | Known but not fetched yet (new site, low crawl budget) | Internal links, a sitemap re-submission, manual Request indexing |
| URL is unknown to Google | Not discovered yet | Sitemap re-submission, internal links, Request indexing |
| Duplicate without user-selected canonical, Soft 404, Server error, Blocked by robots.txt | Real problems | Fix, then "Validate fix" |

### D.3 Changing content on a young site: do and don't
- **Do:**
  - change one page or a small group at a time, with a baseline and a review date 3 to 4 weeks out;
  - start with pages at positions 5 to 20;
  - add (sections, FAQs, internal links) rather than rewrite;
  - fix factual errors at once;
  - keep publishing within the caps;
  - judge by weekly averages.
- **Don't:**
  - retitle the whole site;
  - change URLs;
  - merge, delete or noindex pages that have impressions;
  - chase off-target queries;
  - stuff keywords into titles;
  - rework a page after a few days of data;
  - add a badge or link back for a listing (Product Hunt excepted).

### D.4 Bing and AI search
Bing's index is a source for Copilot, DuckDuckGo and ChatGPT search. Verify Bing Webmaster Tools by importing from Search Console, and ping IndexNow after each batch.

## E. Link-building triage

### E.1 The fit test (all must be true)
1. The site honestly belongs in the platform's category and audience.
2. The listing asks nothing back: no badge or link on your site, no reciprocal link, no payment for a followed link. Product Hunt is the usual exception.
3. Signup needs no phone number, and no bot check that only a person can pass, unless a person agrees to click it.
4. The profile or post can say exactly what the site is, in approved copy.
5. The weekly pace allows another new referring domain.

### E.2 Typical verdicts by site type
- **Skip for every site:**
  - launch boards and directories that ask for a badge, a link back or a payment (Product Hunt aside);
  - paid "guest post" and "dofollow" marketplaces;
  - automated multi-directory submission services;
  - dead or parked sites.
- **Skip unless the site is that kind of product:**
  - AI-tool directories (AI products only);
  - SaaS and software directories, review sites and deal marketplaces (software only);
  - developer-tool, API, extension and open-source lists (developer products only);
  - founder-interview and revenue-story sites (founders with a traction story).
- **Usually a fit:**
  - brand profiles and, for local businesses, local listings;
  - a newsletter platform;
  - visual platforms, for sites with original visuals;
  - data repositories, for real datasets;
  - developer publications, for a real technical story;
  - editorial outlets, reached through pitches and not through forms.

### E.3 Platform notes (checked October 2026; verify before you rely on them)

| Platform | Reality |
| --- | --- |
| Substack | Email-link login; followed links in posts; new publications are noindexed for a while |
| DEV | Email signup with a reCAPTCHA (a person clicks it); article links followed; the "Basic markdown" editor reads front matter |
| HackerNoon | Email signup; editorial review of about a week; tag AI-assisted writing and vested interest honestly |
| Hashnode | Sign-in behind a Vercel checkpoint that rejects automated browsers: a person signs in |
| Zenodo | Email signup; a permanent DOI on publish (re-read every field first); followed links; publish a new version for each data update |
| Kaggle | Email signup with a reCAPTCHA; dataset pages indexable, links nofollow |
| Hugging Face | Signup behind a "confirm you are human" puzzle; repeated automated tries trigger a temporary network block |
| data.world | The free community tier was retired in July 2026 |
| Pinterest | Business signup with a bot check and a birth date; website claim by meta tag; new domains can be blocked as pin links until an appeal |
| GIPHY | A channel page is noindex until a brand channel is approved; GIF source links are nofollow |
| Peerlist | Email signup; links nofollow ugc |
| Crunchbase | Creating a company profile needs a connected personal Google or LinkedIn account, plus a review |
| About.me, Indie Hackers | Google or Facebook signup only |
| Product Hunt | LinkedIn, GitHub or X login only; company accounts banned; never ask for upvotes; the one site whose badge may go on your pages |
| Hacker News | No AI-written text; the maker posts and replies |
| Flickr | New automated accounts can be deleted within minutes of their first uploads; never open a second account to get around it |
| StackShare, AlternativeTo | Bot checks on every page reject automated browsers; AlternativeTo lists only software alternatives |

## F. AI search (GEO)
- Allow the AI crawlers in `robots.txt`; a `Content-Signal` line (`search=yes, ai-input=yes, ai-train=yes`, or the values you choose) states the uses you allow.
- **Watch CDN defaults:** since July 2025, Cloudflare blocks AI crawlers by default on new domains, and its "managed robots.txt" rewrites yours. Decide both at setup.
- Answer-first passages that name their source and date, data tables, and datasets with DOIs make a site quotable.
- Brand mentions on trusted sites matter more for AI visibility than link counts.
- `llms.txt` is optional and Google ignores it. If you publish one, keep it a factual summary of the site, never instructions to AI.

## G. Tool notes and gotchas
Install and use: Phase 3. These notes save the retries.
- **claude-seo:**
  - **Python:** when Python is not on PATH (common on Windows), set `CLAUDE_SEO_PYTHON` to the interpreter's full path.
  - **Local targets:** auditing a local build needs `CLAUDE_SEO_LOCAL_TARGETS=127.0.0.1:<port>`; without it the plugin's address guard blocks local targets. Once the site is live, audit the live URL.
  - **Fetch, then parse:** `parse_html.py` takes a file, so run `fetch_page.py <url> --output page.html` first.
  - **Reports:** PDF output needs GTK. Use `google_report.py --format html` instead.
  - **Search Console scripts:** `gsc_query.py query --start-date … --end-date … --dimensions query,page --json`, `gsc_query.py sitemaps`, and `gsc_inspect.py --batch urls.txt --json`. The plugin's `indexing_notify.py` calls the Indexing API: never run it for ordinary pages.
  - **Agents:** they stop at their turn limit; resume them with a message. Check their extraction advice yourself with trafilatura.
- **Lighthouse:**
  - Mobile performance moves 5 to 10 points between runs on a busy machine, so judge the median of 3 runs.
  - Noindex pages score SEO in the high 60s by design.
- **Playwright:** use it for first-screen measurements (is the element above the fold, is there a gap between the header and the next element) and for prefilled signups that a person finishes.
- **A quality gate and a smoke test** run in CI and fail the build (reference B).
- **A change ledger:** append-only, holding date, type, URLs, files, baseline and note.
- **Semrush Site Audit:**
  - The mega export has one column per check. Join it with the issues export to list the pages behind each failed check.
  - **Parameter URLs inflate the errors:** each link with a query string becomes a crawled page whose static HTML points its canonical and hreflang at the clean URL. The result is "hreflang conflicts", duplicate markup errors and "only one internal link". Fragments fix all three (A.4).
  - **"Broken" and 403 external links are often bot blocking.** Government agencies, legislatures and review directories refuse crawler user agents, and some government sites refuse visitors from other countries. Re-test each link with a browser user agent from the target country before touching a correct primary source.
  - **"Content not optimized"** gives no detail, so there is nothing to verify.
- **Semrush Backlink Audit:**
  - **Toxicity is Semrush's own score, not Google's.** Within days of registration a new domain shows up on automated "new domain" list pages: subdomain networks selling links, and WHOIS-list sites. Semrush rates them toxic, but they are random spam that Google's systems ignore.
  - **Disavow only on Google's two conditions:** a considerable number of spammy, artificial or low-quality links, *and* a manual action (or one likely).
    - The tool needs a URL-prefix property; it does not support Domain properties.
    - Keep a prepared file, never uploaded without a manual action.
    - Send no removal requests to spam operators.
  - **In Semrush, whitelist the real links.** Moving spam to Semrush's Disavow tab only cleans Semrush's report; never export it to Google.
  - **The audit doubles as a check on your own records.** It shows listings that went live, or were published, without anyone noting it.
- **One-off audit sites** (Seobility and similar):
  - Treat their findings as hints, and fix the real ones.
  - Their "response time" is measured from their own country, so a slow figure there can be distance, not the server.

## H. Lessons learned (symptom → cause → fix)
- **Content hidden under the header on phones** → a sticky header with a top offset draws below its place in the page and overlaps whatever follows by that offset → give the next element top spacing larger than the offset.
- **The layout fit in tests but broke on a real phone** → desktop fonts are narrower than Android's Roboto → test in Roboto at 320 and 344 px with a 1.15 text scale.
- **A third-party badge or embed shows as a broken image** → the Content Security Policy blocks its host → add the host after checking that it sets no cookies and runs no script.
- **"Image without alt" and "link without anchor text" in audit tools** → `alt=""` on decorative images, and icon-only links → CSS backgrounds for decoration, and screen-reader text inside links.
- **A slow "response time" in an audit** → distance to the server, not server time → a CDN, after making the app trust the forwarded visitor IP only from the CDN's published address ranges.
- **The canonical points at a redirecting URL** → mixed trailing-slash or host forms → build every URL through one helper.
- **Two templated pages read alike** → template thinking → tie each to its own facts: location, direction, season, audience.
- **Articles published with stale or wrong facts** → checked only when written → a fresh fact-check on publish day.
- **Dozens of hreflang errors on a one-language site** → links with query strings made crawlable copies whose HTML carries the clean page's canonical and hreflang → carry those values in the fragment.
- **"Toxic" backlinks the week after launch** → automated new-domain list pages → ignore them; disavow nothing without a manual action.
- **Dozens of nofollow internal links on a hub** → links to noindexed template pages carried nofollow → link only indexable pages and list the rest as text.
- **Hubs stuck under a 10% text ratio** → repeated utility-class strings, inline icon paths and attributes, and photo tiles carrying no text → named utilities, an icon sprite with base-layer defaults, CSS pseudo-element icons, and a summary list from existing data.
- **A pushed change never went live** → the CI deploy did not run (on a private repository, used-up Actions minutes stop every workflow) → compare the deployed commit with the push, deploy by the documented fallback, and check the Actions billing page.
- **New articles stay "URL is unknown to Google"** → slow crawling of a new domain and no sitemap re-read → re-submit the sitemap, link the articles from pages that are already crawled, and use Request indexing.
- **A password appears in a tool's output** → masking keyed on the wrong field → mask every field after the identifier, and rotate the password.
- **An agent's audit advice breaks extraction** → the advice was never tested → test it with trafilatura before shipping.

## I. Checklists

**New page:**
- One primary query group, with no overlap.
- An answer-first opening.
- Figures from the data source.
- Primary sources, checked today.
- At least one table, where the gate requires it.
- FAQs that match real questions.
- The gate passes.
- Internal links in and out.
- A ledger entry.
- The sitemap updated by the build.
- The score loop run on it: 100 in every tool, or only ceiling items left.

**Launch:**
- One origin, with 301s from every variant.
- `robots.txt` correct, AI crawlers allowed.
- Sitemaps truthful.
- Smoke test and gate green.
- Lighthouse and the responsive check green.
- The score loop run on every template: 100 in every tool, or only ceiling items left.
- Trust pages live.
- Search Console and Bing verified, with the sitemap submitted.
- IndexNow key in place.
- Analytics behind consent where required.
- The launch set at about 100 pages or fewer (small sites launch whole).

**Weekly:**
- An API pull: position bands, the top-20 count, and pages close to page 1.
- URL Inspection of new pages.
- Indexing reasons classified.
- Tracker and link work within the pace.

**Monthly:**
- A full-site score loop, with the scoreboard updated.
- Dated facts and data refreshed, with new dataset versions published.
- Snippet and seasonal tests judged against their baselines.
- Template checks after any change.

**Directory listing:**
- The fit test passes.
- The approved copy is used, unchanged.
- The listings mailbox is used.
- The login is in the private register.
- The public page was checked while logged out, with the `rel` recorded.
- The tracker row is updated with the status and reason.

## J. Free backlink catalog

<!-- backlink-catalog:start -->
<!-- Generated from data/backlink-catalog.csv by scripts/build.mjs; edit the CSV, not this section. -->

136 platforms, checked in October 2026.
- **Run the fit test (E.1) for your own site.** A platform that is wrong for one site can be right for another.
- **Re-check before you sign up:** platforms change their free routes and link types often.
- **DR** is the figure published in a public list of free backlink sites, not a fresh measurement.

### J.1 Brand profiles and social (13)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Pinterest](https://www.pinterest.com/) | 97 | Visual search engine with idea boards | Free business account | reCAPTCHA and Arkose bot checks at signup; birth date; website claim needs a meta tag, HTML file or DNS record on your domain | followed (profile website link); pin links not checked | Any site with original visuals such as maps, charts, photos or designs | Pinterest can block a new domain as possible spam, so pins cannot link to it until an appeal succeeds. The signup bot checks need a person. |
| [Flickr](https://www.flickr.com/) | 94 | Photo hosting community | Free account (1,000 photos) | Account with a reCAPTCHA | nofollow (descriptions); the profile website link was seen without nofollow | Photographers and sites with original photos | An automated filter can delete a brand-new account within minutes, and a second account after that counts as ban evasion. |
| [Pixabay](https://pixabay.com/) | 92 | Free stock photos, videos and illustrations | Free contributor profile | Account; uploads are reviewed | not checked | Photographers, illustrators and videographers with original media to give away | Contribute only original media; every upload goes through review. |
| [GIPHY](https://giphy.com/) | 91 | GIF and sticker host with verified brand channels | Free account; brand channel by application | Account, 5 uploaded GIFs, an avatar, an email at the company domain, a public social profile and a review (2 to 14 days, as reported) | nofollow (GIF source links) | Brands with original animated content | The brand channel page stays noindex until the application is approved. Give each GIF a title and tags. |
| [Imgur](https://imgur.com/) | 91 | Image hosting and sharing community | Free account | Blocks automated requests (HTTP 429) | none (no useful outbound link) | Sharing images with its community, not backlinks | Profiles and posts carry no link of value. |
| [500px](https://500px.com/) | 90 | Photographer community | Free profile | Account | not checked | Photographers with original work | Only fits real original photography; anything else is an irrelevant placement. |
| [About.me](https://about.me/) | 90 | Personal homepage for individuals and freelancers | Free plan | Google or Facebook sign-in only (email signup ended); reCAPTCHA and hCaptcha; must be a real person | nofollow (pages are indexable) | Founders, freelancers and other individuals who want a personal page | Personal-login-only signup, so the person signs in themselves. Outbound links are nofollow. |
| [Crunchbase](https://www.crunchbase.com/) | n/a | Company database used by journalists and AI search | Free company profile | Cloudflare check at signup; a company profile needs a connected Google or LinkedIn login | nofollow (as reported) | Any real company or startup | A person has to pass the Cloudflare check, and new company profiles go through a review of up to one business day. |
| [Facebook](https://www.facebook.com/) | n/a | Social network with free brand pages | Free brand page | The page is created and run from a personal Facebook account | nofollow | Any real business, brand or publication | Links are nofollow, so the value is a brand profile to list in sameAs, not link equity. Keep it active with real posts. |
| [Instagram](https://www.instagram.com/) | n/a | Photo and video social network with brand profiles | Free profile | Email and password account | nofollow (bio link only) | Brands with real photos or video to post | Only the bio carries a link, and it is nofollow. Use a strong password and turn on two-factor authentication. |
| [LinkedIn company page](https://www.linkedin.com/) | n/a | Professional network with company pages | Free company page | A company page can only be created from a personal LinkedIn account | nofollow | Any real company, especially B2B | Personal-login-only: someone at the company creates and runs the page from their own profile. |
| [X (Twitter)](https://x.com/) | n/a | Social network for short posts | Free profile | Bot check, birth date and a puzzle at signup; automated signups are refused | nofollow (links pass through t.co) | Any real business or brand | Refuses automated signups, so a person signs up and solves the puzzle. Links are nofollow. |
| [YouTube](https://www.youtube.com/) | n/a | Video platform with brand channels | Free channel | Google account | nofollow | Sites with real video content such as demos, explainers or how-tos | Links are nofollow; the value is video search and a brand profile. Figures or dates shown in a video go out of date, so plan re-cuts. |

### J.2 Local business listings (2)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Bing Places](https://www.bingplaces.com/) | n/a | Local business listing that feeds Bing, Copilot and ChatGPT search | Free listing | Address verification | not checked | Local businesses with a real street address | Needs a real business address that passes verification. |
| [Google Business Profile](https://business.google.com/) | n/a | Google's local business listing | Free listing | Address verification | not checked | Local businesses with a real, verifiable street address | A business without a real address that passes verification cannot list. |

### J.3 Publishing, newsletters and Q&A (13)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Reddit](https://www.reddit.com/) | 95 | Topic communities (subreddits) | Free account | JavaScript bot challenge on the register page; email code or Google or Apple sign-in; karma gates; subreddit self-promotion rules | nofollow, ugc | Anyone who can answer real questions in a relevant community as a disclosed person | Post as a real person who discloses the connection, follow each subreddit's self-promotion rules and keep the pace low. Karma gates limit new accounts. |
| [Medium](https://medium.com/) | 94 | Blogging platform | Free account and publication | Email magic link or Google, Apple, Facebook or X sign-in; Cloudflare check on the site | nofollow, ugc (as reported) | Writers with original articles | Links are nofollow (as reported), so the value is readers rather than link equity. The Cloudflare check needs a person. |
| [Substack](https://substack.com/) | 94 | Newsletter and blog platform | Free publication and author profile | Email magic link; reCAPTCHA can appear when creating a publication; a mobile-number step with a Skip option (as reported) | followed (post links); author profiles take no website link | Any site with original writing or data worth a regular newsletter | New publications are noindex for a while. Author profiles accept only social profile links, not a website link. |
| [Patreon](https://www.patreon.com/) | 93 | Creator membership platform | Free creator page | Account; payout identity details | not checked | Creators with a real membership offer | Only fits a real membership business. |
| [Fandom](https://www.fandom.com/) | 92 | Fan wikis | Free editing | Account; Cloudflare check | nofollow (as reported) | Fan communities and the topics they cover | Irrelevant for most businesses; adding links to your own site in wiki edits is self-promotion. |
| [Gumroad](https://gumroad.com/) | 92 | Storefront for digital products | Free store (fee per sale) | Account; payout details | not checked | Creators who sell real digital products | Listing a free download as a product only to get a link is contrived; use it to sell something real. |
| [Beehiiv](https://www.beehiiv.com/) | 91 | Newsletter platform | Free Launch plan | Phone verification required; email or Google sign-in | followed (checked on a post: no rel) | Sites that run a real newsletter | Phone verification is required. Run one newsletter on one platform instead of duplicating it. |
| [DEV Community (dev.to)](https://dev.to/) | 91 | Developer blogging community | Free posts | Account | followed (article links); ugc on the profile website link | Writers with a technical story; developer tools | Readers are developers, so an article needs a genuine technical angle. Articles are indexable (no noindex was seen). |
| [Quora](https://www.quora.com/) | 91 | Questions and answers | Free profile, answers and Spaces | Real-name personal profile; email, Google or Facebook sign-in; CAPTCHA and Cloudflare check | nofollow | Experts who can answer real questions in their field under their own name | Needs a real full name on a personal profile, so a brand cannot answer as itself. The bot checks need a person. |
| [HackerNoon](https://hackernoon.com/) | 87 | Technology publishing platform for contributor stories | Free to write; publishing as a brand author is paid | Account; editorial review | none on profiles (website shown as plain text); story links not checked | Writers with a technical story | Stories go through editorial review (about a week). Disclose a vested interest and AI assistance with the platform's story tags. |
| [Hashnode](https://hashnode.com/) | 83 | Developer blogging platform | Free blog | Account with an email code; the sign-in page sits behind a Vercel checkpoint | not checked | Writers with a technical story; developer blogs | The checkpoint rejects automated browsers with nothing to click, so a person signs in. When cross-posting, set the canonical to the original. |
| [Stacker News](https://stacker.news/) | 63 | Bitcoin community forum where posting costs sats | None; posting needs Lightning payments | Bot challenge (HTTP 202); a Lightning wallet | not checked | Bitcoin and Lightning projects | Every post costs sats, so there is no free route. Off-topic for anything outside Bitcoin. |
| [PromptZone](https://promptzone.com/) | 18 | AI prompts community and guides | Free community account | Account | not checked | Writers of AI prompts and AI guides | An irrelevant placement for sites outside AI prompting. |

### J.4 Data and code repositories (4)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [GitHub](https://github.com/) | 97 | Code hosting with public repositories and organization profiles | Free organization profile and public repositories | Account | nofollow (user content) | Sites that publish real open code or open data | Links in repositories are nofollow; the value is the repository and its users. Automated pushes need a deploy key with write access to that one repository. |
| [Hugging Face](https://huggingface.co/) | n/a | Machine learning hub with public dataset repositories | Free public dataset repository | An AWS "confirm you are human" puzzle at signup; a rate limit after automated tries | not checked | Sites with a real open dataset or machine learning model | The signup puzzle blocks automated browsers and repeated tries trigger a rate limit, so a person signs up. |
| [Kaggle](https://www.kaggle.com/) | n/a | Data science community and dataset host | Free public dataset | reCAPTCHA at signup | nofollow | Sites that publish a real open dataset | Dataset links are nofollow; the value is reach among data users and an indexable dataset page. The reCAPTCHA needs a person. |
| [Zenodo](https://zenodo.org/) | n/a | CERN open research repository that mints a DOI for each record | Free record with a DOI; updates go in as new versions of the same record | Email and password account | followed (no rel on links) | Sites that publish a real open dataset, report or research output | Upload real data or research with a licence and a README. Records are indexable; add each update as a new version, not a new record. |

### J.5 Product launch sites (7)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Product Hunt](https://www.producthunt.com/) | 91 | Launch site for tech products | Free launch | Social login only (no email signup; Google, Apple, Facebook, X, LinkedIn or GitHub, as reported); CAPTCHA at profile setup; a personal maker account | ugc on the visit link (as reported) | Tech products and SaaS with a real launch | Company accounts are banned, so a real person launches as the maker. Never ask for upvotes; the badge is optional and not a condition of listing. |
| [BetaList](https://betalist.com/) | 76 | Showcase for early-stage tech startups | Free with a wait; paid expedite | Login required to submit | nofollow (through an internal redirect) | Early-stage tech startups | Criteria require a tech startup and exclude blogs and service businesses. Free submissions wait unless you pay to expedite. |
| [Uneed](https://www.uneed.best/) | 75 | Daily product launch platform for makers (tools, apps, startups) | Free waiting line; paid fast-track | Account; Cloudflare Turnstile; upvote contest | followed only if the launch earns enough upvotes | Makers launching tools, apps or SaaS | The followed link depends on winning upvotes, a vote-game pattern of low-quality directories. Free launches wait behind a paid fast-track. |
| [PeerPush](https://peerpush.com/) | 69 | Product discovery directory for people and AI assistants, with non-software categories such as automotive, logistics and free tools | Free launch through a queue, hidden until its slot; paid from $39 | Account by email with a 6-digit code (or Google); no CAPTCHA seen in the signup page | followed | Products and free web tools in many categories, not only software | The free queue is long (about three months for one listing) and the listing stays hidden until its slot. |
| [PitchWall](https://pitchwall.co/) | 69 | Product discovery site, mostly AI products (formerly BetaPage) | Free launch after a 30-day minimum wait | Login only through Google, GitHub, Microsoft or Discord | followed (seen on a listing) | AI and tech products | Social login only, and free launches wait at least 30 days. Little relevance outside AI and tech. |
| [Firsto](https://firsto.co/) | 55 | Launch platform for indie makers; listings are mostly AI tools | Free launch with about a 180-day queue (5 slots a day) | Account by email, Google or GitHub; sign-in needs a Cloudflare check; paid fast-track at $19.90 and $59.90 | nofollow (free tier) | Indie makers with tools or apps | Free launches are nofollow and wait about 180 days. The Cloudflare check at sign-in needs a person. |
| [Startup Buffer](https://startupbuffer.com/) | 43 | Generic startup directory | Free listing; premium extras | Cloudflare challenge; moderation | nofollow (as reported) | Startups that want one more directory listing (low value) | The Cloudflare check kept coming back in an automated browser, so a person has to submit by hand. Submit only if the listing stays free with no link back. |

### J.6 AI, SaaS and software directories (38)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Capterra](https://www.capterra.com/) | 91 | Software directory for vendors (part of Gartner) | Free basic listing; pay-per-click upgrades | Vendor account | not checked | Software vendors | Software only; upgrades are pay-per-click. |
| [Clutch](https://clutch.co/) | 91 | Directory of B2B service providers (agencies, IT, consulting) | Free profile | Account; staff review; hourly rate and minimum project fields; client reviews | nofollow | B2B service providers such as agencies, IT firms and consultancies | Links are nofollow, and profiles need staff review and client reviews. Consumer sites do not fit. |
| [G2](https://www.g2.com/) | 91 | B2B software and services review marketplace | Free vendor profile (software) | Business account; review | not checked | B2B software vendors | A site that is not software does not belong; listing it as software misrepresents it. |
| [GoodFirms](https://www.goodfirms.co/) | 86 | B2B ratings of IT service firms and software | Free company profile | Account; review | not checked | IT service firms and software vendors | Only for IT services and software; profiles are reviewed. |
| [TrustRadius](https://www.trustradius.com/) | 84 | B2B software reviews | Free vendor profile | Business account; vendor verification | not checked | B2B software vendors | Software reviews only. |
| [AppSumo](https://appsumo.com/) | 83 | Software deals marketplace | Revenue-share deals for software | Partner application | not checked | Software products ready to offer a deal | Software only; deals run on revenue share after an application. |
| [AlternativeTo](https://alternativeto.net/) | 79 | Crowdsourced directory of software alternatives | Free app submission | Account; moderation | nofollow (as reported) | Software and apps that are a real alternative to existing products | List only where the product truly replaces the software in that category; a forced fit misrepresents the site. |
| [SaaSHub](https://www.saashub.com/) | 79 | Directory of SaaS and software alternatives | Free listing | Account; moderation; paid fast-track | not checked | SaaS products and other software | SaaS only, so listing anything else misrepresents it. Free listings wait for moderation. |
| [There's an AI for That](https://theresanaiforthat.com/) | 77 | AI tools directory | None (paid listing) | Cloudflare challenge | not checked | AI tools | AI only; pay-only, so any followed link from it would be a paid link. |
| [ShowMeBestAI](https://showmebest.ai/) | 76 | AI tools directory | not recorded | not recorded | mixed | AI tools | AI only. |
| [Alternative Me](https://alternative.me/) | 75 | Software alternatives directory | not recorded | not recorded | not checked | Software products | Software only. |
| [Privacy Tools](https://privacytools.io/) | 73 | Privacy software recommendations | None (editorial picks) | not recorded | not checked | Privacy software | Editorial recommendations, not a self-serve listing. |
| [Toolify AI](https://www.toolify.ai/) | 73 | AI tools directory | None (paid listing, about $99 as reported) | Cloudflare challenge | not checked | AI tools | AI only; pay-only, so any followed link from it would be a paid link. |
| [Futurepedia](https://www.futurepedia.io/) | 72 | AI tools directory and AI learning platform | None found for a free tool listing | Account | not checked | AI tools | AI only; listing a site that is not an AI tool misrepresents it. |
| [Latka](https://www.getlatka.com/) | 72 | Revenue database and CEO interviews for SaaS and AI companies | None for listing; profiles come from interviews and revenue data | Editorial | not checked | SaaS and AI companies with revenue to share | No self-serve listing. |
| [Tekpon](https://tekpon.com/) | 72 | SaaS buying and procurement marketplace | Vendor listing for software | Vendor account | not checked | SaaS vendors | Only for software that is for sale. |
| [RocketHub](https://www.rockethub.com/) | 69 | Lifetime software deal marketplace | Vendor deals only | Vendor application | not checked | Software vendors offering a lifetime deal | Sells software deals only. |
| [Open Tools](https://opentools.ai/) | 68 | AI tools and models directory | Submit form | Form | not checked | AI tools and models | AI only. |
| [Next Gen Tools](https://www.nxgntools.com/) | 67 | Launch directory for AI and SaaS tools | Free launch; paid premium | Account | followed (as advertised by the site) | AI and SaaS tools | AI and SaaS only. |
| [SaaS Pirate](https://saaspirate.com/) | 67 | SaaS lifetime deal listings | None | not recorded | not checked | SaaS with a lifetime deal | Software deals only, with no free route. |
| [Serchen](https://www.serchen.com/) | 67 | Business software marketplace | Vendor listing for software | Vendor account | not checked | Business software vendors | Software only. |
| [AI Agent Store](https://www.aiagentstore.io/) | 59 | AI agent directory and marketplace | Free listing of AI agents | Account | not checked | AI agents | AI agents only. |
| [Dealify](https://dealify.com/) | 59 | Lifetime software deal marketplace | Vendor deals only | Vendor application | not checked | Software vendors offering a lifetime deal | Sells software deals only. |
| [SaaS Genius](https://www.saasgenius.com/) | 58 | SaaS pricing and value reviews | None (editorial) | Editorial | not checked | SaaS products, through editorial selection | Editorial reviews, no self-serve listing. |
| [AI Tool Trek](https://aitooltrek.com/) | 55 | AI tools directory | Submit form | Form | followed (no nofollow on outbound links) | AI tools | AI only. |
| [AIxploria](https://www.aixploria.com/) | 55 | AI tools directory | Reviewed submission (fee unclear); paid featured and verified options | Cloudflare challenge; editorial review | not checked | AI tools | AI only; whether the basic submission is free was unclear. |
| [Affiliate Watch](https://affiliate.watch/) | 52 | Directory of affiliate programs with commission details | Free plan for program operators | Account; hCaptcha | not checked | Businesses that run a real affiliate program | Only fits a site with a real affiliate program. |
| [FounderPass](https://www.founderpass.com/) | 50 | Members' club of software discounts for founders | Partner signup to offer a deal | Partner application | not checked | Software or services with a real deal for founders | Lists software deals only. |
| [DealMirror](https://dealmirror.com/) | 47 | Lifetime software deal marketplace | Vendor submission (paid deals) | Vendor application | not checked | Software vendors offering a lifetime deal | Sells software deals only. |
| [Altern](https://altern.ai/) | 42 | AI tools and agents directory | Free plan with standard review; $29 base plan | Account | not checked | AI tools and agents | AI only. |
| [Appscribed](https://appscribed.com/) | 42 | AI tools directory with reviews | None ($49 permanent listing) | Paid; reCAPTCHA | not checked | AI tools | AI only; pay-only, so any followed link from it would be a paid link. |
| [Wavel](https://wavel.io/) | 42 | AI tools and agent marketplace | Submit form | Account; Cloudflare Turnstile | not checked | AI tools and agents | AI only. |
| [KEN Moo](https://kenmoo.me/) | 39 | SaaS lifetime-deal reviews and community | None found | not recorded | not checked | SaaS with a lifetime deal | SaaS deals only; editorial. |
| [Powerusers](https://powerusers.ai/) | 34 | AI tools directory | None ($69 via PayPal) | Login; reCAPTCHA; paid | not checked | AI tools | AI only; pay-only, so any followed link from it would be a paid link. |
| [SaaSZilla](https://saaszilla.co/) | 33 | SaaS directory | Unknown (the site blocks fetches) | Cloudflare challenge | not checked | SaaS products | SaaS only; the free route could not be confirmed. |
| [Startups FYI](https://startups.fyi/) | 31 | Directory of AI, SaaS and side projects with revenue figures, plus a newsletter | "Share your project" form; paid sponsor slots | Form; reCAPTCHA and Turnstile on the site | not checked (product links carry UTM tags) | Indie AI, SaaS and side projects with revenue figures | The listings on show are sponsored. |
| [Product Canyon](https://productcanyon.com/) | 27 | Lifetime subscription deal marketplace | Vendor dashboard | Google or LinkedIn login; reCAPTCHA | not checked | Software vendors offering a lifetime deal | Sells software deals only. |
| [SEOFAI](https://seofai.com/) | 18 | AI tools directory | None found ($29 and $69 packages) | Account; reCAPTCHA and Turnstile; paid | nofollow (seen on a listing) | AI tools | AI only and pay-only, with nofollow links. |

### J.7 Developer and open-source directories (9)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Chrome Web Store](https://chrome.google.com/webstore) | 99 | Browser extension store | None ($5 one-time developer fee) | Google account; fee | not checked | Sites that ship a real browser extension | Only for a real extension, and publishing costs a one-time $5 developer fee. |
| [SourceForge](https://sourceforge.net/) | 93 | Open-source and business software directory | Free project or vendor listing | Account; Cloudflare check | not checked | Open-source projects and business software | Software only; a site that is not software does not belong. |
| [StackShare](https://stackshare.io/) | 79 | Directory of companies' tech stacks | Free company stack page | Account | not checked | Tech companies that want to show their stack | Every page returned a Vercel checkpoint (HTTP 429) to automated browsers, so a person has to sign up. |
| [DevHunt](https://devhunt.org/) | 63 | Weekly launches of developer tools | Free launch queue | GitHub login | not checked | Developer tools | Developer tools only. |
| [LibHunt](https://www.libhunt.com/) | 62 | Trending open-source projects | not recorded | not recorded | not checked | Open-source projects | Open source only. |
| [OpenAlternative](https://openalternative.co/) | 51 | Open-source alternatives to SaaS | Free submission with a queue; paid advertising | Form; moderation | nofollow (seen on a listing) | Open-source software that replaces a SaaS product | Open source only; links are nofollow. |
| [Public APIs](https://publicapis.dev/) | 45 | Crowdsourced list of public developer APIs | Submit page | Form | not checked | Sites with a real, documented public API | Only for a real public API; private endpoints do not qualify. |
| [API List](https://apilist.fun/) | 37 | Public list of free developer APIs | Register and add an API | Account | not checked | Sites with a real free public API | Only for a real public API. |
| [OSS Gallery](https://oss.gallery/) | 31 | Gallery of open-source projects built with Dub | not recorded | A GitHub project | not checked (links go through a redirect) | Open-source projects on GitHub | Open source only; outbound links pass through a redirect. |

### J.8 Founder and startup communities (11)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Hacker News](https://news.ycombinator.com/) | 91 | Tech link aggregator; Show HN for launches | Free submission (Show HN) | Username and password only | followed only once a story scores | Founders with a real tech product or story | Forbids generated or AI-edited text, so a person writes the post and answers comments. The link is followed only once a story scores. |
| [Wellfound](https://wellfound.com/) | 87 | Startup jobs and recruiting (formerly AngelList Talent) | Free company profile and job posts | A personal user profile to administer a company | not checked | Startups that are hiring | Recruiting only. |
| [Indie Hackers](https://www.indiehackers.com/) | 81 | Founder community and revenue-based product database | Free product page and posts | New accounts only through Google sign-in; built around a named founder and revenue figures | followed on profiles, nofollow on product pages (seen on other listings) | Founders building in public with a named founder and real revenue figures | Signup is personal-login-only through Google, and a brand without a named founder fits poorly. |
| [Peerlist](https://peerlist.io/) | 77 | Professional network for individual builders | Free personal profile; Launchpad | Personal profile of a real person | nofollow, ugc | Founders and builders with a real personal profile and project | Profiles belong to a real person, not a brand. New project pages are noindex for a while. |
| [FoundrList](https://founderslist.com/) | 72 | Co-founder matching and founder network | Free | Personal founder profile | not checked | Founders looking for a co-founder | Networking, not a listing. |
| [GrowthMentor](https://www.growthmentor.com/) | 72 | Startup mentor marketplace | None (paid membership) | not recorded | not checked | Founders looking for mentoring | Not a listing site. |
| [SideProjectors](https://www.sideprojectors.com/) | 70 | Marketplace to buy and sell developers' side projects | Free showcase listing | Account | not checked | Developers showcasing or selling a real side project | A listing presents the site as a side project, often for sale; list only what that honestly describes. |
| [TrustMRR](https://trustmrr.com/) | 69 | Marketplace to buy and sell startups with Stripe-verified revenue | Listing needs verified revenue | Stripe connection | not checked | Founders selling a startup with verified revenue | Needs a Stripe connection and verified revenue. |
| [Indie Page](https://indiepa.ge/) | 66 | Personal page that shows a maker's startups and revenue | Free page builder; publishing costs $25 a year or $45 for life | Personal maker profile | not checked | Indie makers who want a personal portfolio page | Building the page is free but publishing it is paid. |
| [WIP](https://wip.co/) | 55 | Paid community of makers who log their progress | None ($199 a year, or monthly) | Paid membership; Cloudflare Turnstile on the page | not checked | Makers who want a paid accountability community | No free route, so any profile link is a paid one. |
| [Micro Founder](https://microfounder.com/) | 38 | Blog and community for solo developer founders | None found | Login with reCAPTCHA | not checked | Solo developer founders | No listing route found. |

### J.9 Editorial outlets (no self-serve listing) (18)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [Forbes](https://www.forbes.com/) | 94 | Business news | None (Forbes Councils are paid and vetted) | Editorial | not checked | Businesses with a newsworthy story, through PR | Editorial or pay-to-play; a paid council membership is a paid placement, not earned coverage. |
| [TechCrunch](https://techcrunch.com/) | 92 | Startup and tech news | Tips email (editorial) | Editorial | not checked | Tech startups with real news | Editorial only. |
| [VentureBeat](https://venturebeat.com/) | 91 | Enterprise tech and AI news | None | Editorial | not checked | Enterprise tech and AI companies with news | Editorial only. |
| [Evernote](https://evernote.com/) | 90 | Note-taking app | Free plan (not a listing) | not recorded | none (no public profile link) | None as a link source | Not a listing or publishing site. |
| [Muck Rack](https://muckrack.com/) | 85 | Journalist database and PR software | Free profiles for journalists only | Brands pay for the PR software | not checked | Journalists; brands only as paying PR customers | No self-serve listing for brands. |
| [YourStory](https://yourstory.com/) | 85 | Indian startup media | None (editorial only) | not recorded | not checked | Indian startups with news | Editorial only. |
| [First Round Review](https://review.firstround.com/) | 82 | Editorial publication of a venture capital firm | None (editorial only) | not recorded | not checked | Founders and operators, through editorial selection | Editorial only. |
| [Starter Story](https://www.starterstory.com/) | 76 | Researched database of profitable businesses with founder interviews | Editorial interview | A named founder and revenue figures | not checked | Businesses with a named founder, real revenue and traction | An editorial interview, not a listing; pitch once there is traction to report. |
| [Failory](https://failory.com/) | 75 | Startup failure stories and newsletter | Editorial | not recorded | not checked | Founders with a startup story | Editorial only. |
| [Mixergy](https://mixergy.com/) | 75 | Founder interview podcast | Editorial | A named founder | not checked | Founders with a story and traction | An editorial interview, not a listing; pitch once there is traction. |
| [Niche Pursuits](https://www.nichepursuits.com/) | 74 | Blog about niche websites and SEO | Editorial | not recorded | not checked | Niche site and SEO stories, through pitching | Editorial only. |
| [Founder Reports](https://founderreports.com/) | 64 | Business reports and founder interviews | None | Editorial | not checked | Founders with traction to report | An editorial interview, not a listing; pitch once there is traction. |
| [Launch Directories](https://launchdirectories.com/) | 64 | List of 100+ startup directories, plus a paid submission service | None (not a product listing site) | not recorded | not checked | None as a listing; useful only as a list to vet | Nothing to be listed on; vet each directory on the list on its own merits. |
| [My First Million](https://www.mfmpod.com/) | 63 | Site of a business podcast | None | Editorial | not checked | Businesses with a story worth pitching to the show | Podcast; editorial only. |
| [SaaS Club](https://saasclub.io/) | 58 | Coaching and podcast for B2B SaaS founders | None | Editorial | not checked | B2B SaaS founders | A founder program and podcast, not a directory. |
| [The SaaS Podcast](https://thesaaspodcast.com/) | 58 | Podcast domain that redirects to the SaaS Club podcast | None | Editorial guest selection | not checked | SaaS founders, through editorial guest selection | The same show as SaaS Club; guests are chosen editorially. |
| [Bootstrappers](https://bootstrappers.com/) | 37 | Editorial publication of bootstrapped-founder stories (from Acquire.com) | "Tell us your story" form (its embed was broken when checked) | Editorial selection; a named founder | not checked | Bootstrapped founders with a story | Editorial selection, not a listing; pitch once there is traction. |
| [SEO Wins](https://seowins.io/) | 32 | Database of SEO tactics by one author | None; paid sponsorship only | Paid | not checked | None as a listing | An editorial resource, not a directory; sponsorship is paid. |

### J.10 Avoid for every site (21)

| Platform | DR | What it is | Free route | Signup barriers | Link type | Best for | Watch out |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| [GitHub Pages](https://pages.github.com/) | 97 | Static hosting for repositories | Free hosting | GitHub account | not checked | None as a link source (fine for hosting a real project site) | Hosting, not a link source: a self-made mirror or satellite site that links back is a manipulative link. |
| [Wikipedia](https://www.wikipedia.org/) | 97 | Encyclopedia | Editing | Conflict-of-interest rules; notability | nofollow | None for self-promotion; a subject gets an article only after independent coverage | Citing your own site or editing about yourself breaks its conflict-of-interest rules, and links are nofollow. |
| [WikiHow](https://www.wikihow.com/) | 91 | How-to wiki | Free editing | Account; source and conflict-of-interest rules | nofollow (checked on article sources) | None for self-promotion | Adding your own pages as sources is self-promotion, and source links are nofollow. |
| [Fazier](https://fazier.com/) | 82 | Launch platform for startups, SaaS and AI tools | Basic free tier, reviewed and listed within 30 days | Account; the free tier requires a link back to Fazier on your homepage or footer | not checked (followed links are sold in paid tiers) | None as a link source | The free tier requires a link back on your homepage or footer, and followed links are sold in paid tiers. |
| [Vocal Media](https://vocal.media/) | 82 | User-generated story platform | Free account; paid Vocal+ | Account; moderation | ugc (in-story links in a sampled story) | None as a link source | An article-marketing platform heavily used for link building, so its links carry link spam risk. |
| [LaunchIgniter](https://launchigniter.com/) | 75 | Product launch platform | Free launch only with its badge on your homepage; paid tiers $12 to $99 | Account; badge on your homepage | not checked (followed only for the weekly top or with the badge, as reported) | None as a link source | The free launch requires its badge on your homepage, a reciprocal link. |
| [ToolFame](https://toolfame.com/) | 74 | Directory of AI, SaaS and online tools | Free: one followed link, reviewed within 180 days | Account | followed (more links are sold) | None as a link source | Sells followed links ($19.90 for 3) and guest posts ($79.90): a link scheme. |
| [TinyLaunch](https://www.tinylaunch.com/) | 72 | Product launch platform | Free standard launch | Account | followed only for the top 3, with a badge embed, or paid ($39) | None as a link source | Followed links are bought or traded for a badge embed. |
| [Aura Plus Plus](https://auraplusplus.com/) | 71 | Daily startup launch platform | Free launch | Account; paid tiers | nofollow on free; followed only on Premium | None as a link source | Followed links are a paid Premium feature, and the site sells a "DR Booster" and guest posts. |
| [Tiny Startup](https://www.tinystartups.com/) | 69 | Pay-what-you-want launch board for indie makers | Free or pay-what-you-want; every listing hand-approved | Account; revenue and founder steps | followed (as stated by the site), with rank set by payment | None as a link source | Paying more buys a higher rank, a paid-link pattern. |
| [Microlaunch](https://microlaunch.net/) | 61 | Launch platform for tech products (AI, dev, marketing, productivity) | Launch Now; a free tier was not shown | Account; paid packs | followed only on paid Launch Pro | None as a link source | Sells followed links as part of paid Launch Pro. |
| [Scroll Launch](https://www.scrolllaunch.com/) | 61 | Weekly launch board for indie makers | Free launch | Account | nofollow, ugc before launch week; followed only while its badge stays on your site | None as a link source | The followed link depends on keeping its badge on your site, re-checked weekly: a reciprocal link. Its edit page can pre-select a paid Premium tier. |
| [StartupBase](https://startupbase.io/) | 60 | Daily launch platform | Free launch with a 4 to 5 week queue | The free tier requires a StartupBase badge on your site; new accounts only through Google, LinkedIn or X | followed only as a paid feature | None as a link source | The free tier requires a reciprocal badge, and followed links are paid. |
| [IndieHunt](https://indiehunt.io/) | 59 | Weekly launches of AI and indie SaaS | Free launch; the followed link is a $19 Premium | Account | nofollow on free | None as a link source | Sells the followed link as a $19 Premium. |
| [EarlyHunt](https://earlyhunt.com/) | 58 | Weekly AI product launches and AI tools directory | Free launch; the followed link is Premium | Account | nofollow on free | None as a link source | Sells the followed link as a Premium feature. |
| [That AI Collection](https://thataicollection.com/) | 43 | Generative AI apps directory | None ($25 to publish, promotions from $10) | Paid only | followed (paid) | None as a link source | Pay-only with a paid followed link: a link scheme. |
| [RankYourAI](https://rankyourai.com/) | 35 | AI tools directory | None ($29 one-time featured listing sold with a "DoFollow backlink") | Paid only | followed (paid) | None as a link source | Sells followed backlinks: a link scheme. |
| [AI Parabellum](https://aiparabellum.com/) | 32 | AI tools directory and AI news | Submission portal; paid guest posts | Account | not checked | None as a link source | Sells guest posts, a paid-link pattern. |
| [Boring Cash Cow](https://boringcashcow.com/) | 28 | Boring-business case studies, with a product directory that was not yet open | Free listing with name, website, tagline and email | Email; reciprocal badge | followed only after adding its badge to your site | None as a link source | The only followed route is a badge exchange, a reciprocal link. |
| [Toolfolio](https://toolfolio.io/) | 25 | Curated tools for designers, makers and startups | None found (boosted listings from $150 with a followed link) | Paid | followed on paid boosted listings; some free listings seen without nofollow | None as a link source | Sells followed links through boosted listings, a link scheme. |
| [Dan Recommends](https://danrecommends.com/) | 22 | Paid positive reviews of SaaS products for a one-time fee | None (checkout only) | Paid; hCaptcha | not checked | None | A paid positive review with a link breaks Google's link spam policy and the FTC rule on reviews. |

<!-- backlink-catalog:end -->
