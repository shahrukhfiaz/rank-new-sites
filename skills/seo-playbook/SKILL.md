---
name: seo-playbook
description: "Step-by-step playbook for taking any new or young website (blog, local business, SaaS, online store, publisher, directory or programmatic site) from launch to indexed, ranked and cited in AI answers, organic only. Covers the technical foundation, content and programmatic pages without doorway risk, publishing pace on a new domain, a score loop that re-runs claude-seo, Lighthouse and other SEO checkers until 100, reading Search Console and Page indexing reasons, earning backlinks and vetting free directory lists with a catalog of common platforms, and AI search readiness. Use it whenever setting up, launching, auditing or growing a site's SEO, running SEO tools, deciding how many pages to publish, interpreting Search Console data, choosing which backlink or directory sites to join, or planning SEO work for another agent, even if the user never says \"playbook\"."
license: MIT
---

# SEO playbook

A step-by-step method for taking a new or young website from zero to search traffic and AI citations, organic only: no paid links and no shortcuts that risk a penalty. It works for any kind of site, including a blog, a local business, a SaaS product, an online store, a publisher, and a directory or programmatic site. It is written for AI agents and works just as well for people.

## How to use it

1. Find where the site stands in the phase map, then read that phase file in full before acting.
2. Work its steps in order. Each step ends on a **Done when** line: move on only when it is true.
3. Apply the rules below on every step. "Reference D.1" means section D.1 of the reference D file in the reference map; open a reference file when a step sends you there.
4. Where an example does not match the site (a city page, a product page, a local listing), apply the principle to the site's own facts.
5. For a whole launch, copy this checklist into your notes and tick it as each phase's last **Done when** holds:

```
SEO progress:
- [ ] Phase 1: Foundation, before the first page is public
- [ ] Phase 2: Content that deserves to rank
- [ ] Phase 3: The score loop: every tool to 100, round after round
- [ ] Phase 4: Launch and indexing control
- [ ] Phase 5: Read Search Console correctly (weekly from week 2)
- [ ] Phase 6: Earned authority
- [ ] Phase 7: Improve with evidence (from about week 3)
- [ ] Phase 8: Cadence
```

**Leading words used throughout:**
- **people-first:** written for the searcher, not for the ranking.
- **earned:** a link or mention given on merit, never bought or swapped.
- **doorway:** a page that differs from its siblings only by a swapped name, such as a city or a product variant.
- **gate:** an automated check that the build or publish step fails on.
- **score loop:** run every tool, fix what it finds, run it again, until 100 or only ceiling items remain (Phase 3).
- **ceiling item:** a missing point that no honest code or content change can remove: owner input, real-world data or time.
- **settle period:** the first 4 to 8 weeks, while search engines test a new site.
- **one change, one baseline:** change one thing, record its starting numbers, judge it later.

## Rules that hold on every site

1. **People-first and true.** Every claim is checkable against a primary source (a government body, a statute, a standards body, the data's owner), and every number on the site comes from one source of truth. Cite the page that supports the claim, not a home page.
2. **Earned authority only.** Links come from honest fits: a real profile, a real listing in the right category, a real article, a real dataset. **Skip every listing that asks for something back**: a badge or link on your site, a reciprocal link, or payment for a followed link. Google's spam policies count link exchanges, paid links and automated mass submissions as link schemes. **The usual exception is Product Hunt**: its badge is optional and not a condition of listing. If you add another badge anyway, make it a recorded decision, keep it on one page (never sitewide), and note the risk.
3. **Describe the site as what it is.** A recipe blog is not "SaaS", and a plumbing company is not "an AI tool". Listing a site in the wrong category to get a link misrepresents it and puts it in front of the wrong audience.
4. **Bot checks belong to people.** An agent never solves, bypasses or outsources a CAPTCHA or "verify you are human" check (no solver services, even with a key someone hands you), and never enters a phone number. The pattern that works: the agent prefills the form, a person clicks the check, and the agent finishes.
5. **Secrets stay out of git and chat.** Passwords, API keys and tokens live in an owner-only file or a secret store. When printing anything from a credentials file, mask every field after the identifier. If a secret leaks into a log or chat, rotate it the same day.
6. **One change, one baseline.** Record every content or template change with its date, files, URLs and starting Search Console numbers, then judge it after 3 to 4 weeks. During the settle period, change little and measure a lot.
7. **The indexing pace is a rule, not a target.** A new domain publishes a capped number of new indexable pages per day and week ([reference C](references/c-indexing-caps.md)), even when more drafts are ready.
8. **Every tool at 100.** Run every SEO tool, fix what it finds and run it again, until each one reads 100 or only ceiling items remain ([Phase 3](phases/3-score-loop.md)). Never raise a score by inventing anything.

## Phase map

| Phase | Read when | File |
| --- | --- | --- |
| 1. Foundation, before the first page is public | The site is not public yet, or its technical base is unchecked: site type, canonicals, robots, templates, speed, sitemaps, measurement. | [phases/1-foundation.md](phases/1-foundation.md) |
| 2. Content that deserves to rank | Planning, writing or fact-checking pages, above all programmatic, location or product-variant pages. | [phases/2-content.md](phases/2-content.md) |
| 3. The score loop: every tool to 100, round after round | Running claude-seo, Lighthouse or any SEO checker; asked to get scores to 100; after each publishing batch or template change. | [phases/3-score-loop.md](phases/3-score-loop.md) |
| 4. Launch and indexing control | Launching, or deciding how many pages to publish and how to get them discovered. | [phases/4-launch.md](phases/4-launch.md) |
| 5. Read Search Console correctly (weekly from week 2) | Reading Search Console performance, URL Inspection or the Page indexing report. | [phases/5-search-console.md](phases/5-search-console.md) |
| 6. Earned authority | Backlinks, brand and local profiles, directories, launch sites, communities and digital PR. | [phases/6-earned-authority.md](phases/6-earned-authority.md) |
| 7. Improve with evidence (from about week 3) | Improving clicks and rankings on a live site; deciding what to change and what to leave alone. | [phases/7-improve.md](phases/7-improve.md) |
| 8. Cadence | Setting the routine: each publishing day, weekly, monthly, after template changes. | [phases/8-cadence.md](phases/8-cadence.md) |

## Reference map

| Reference | What it holds | File |
| --- | --- | --- |
| A. Technical standards | Head tags, structured data by site type, robots and sitemaps, internal links, performance levers, accessibility, extraction. | [references/a-technical-standards.md](references/a-technical-standards.md) |
| B. The quality gate (fail the build, not the review) | The checks a build or publish step fails on, per page type. | [references/b-quality-gate.md](references/b-quality-gate.md) |
| C. Indexing caps and freeze rules (new domain) | New pages per day and week on a new domain, and the freeze rules. | [references/c-indexing-caps.md](references/c-indexing-caps.md) |
| D. Search Console in practice | API access, what each Page indexing reason means, changing content on a young site. | [references/d-search-console.md](references/d-search-console.md) |
| E. Link-building triage | The fit test for any listing, verdicts by site type, platform notes. | [references/e-link-triage.md](references/e-link-triage.md) |
| F. AI search (GEO) | AI crawlers, CDN defaults that block them, what makes a page quotable. | [references/f-ai-search.md](references/f-ai-search.md) |
| G. Tool notes and gotchas | Tool gotchas: claude-seo, Lighthouse, Playwright, audit sites. | [references/g-tool-notes.md](references/g-tool-notes.md) |
| H. Lessons learned (symptom → cause → fix) | Symptom, cause and fix for common problems. | [references/h-lessons.md](references/h-lessons.md) |
| I. Checklists | New page, launch, weekly, monthly and directory listing checklists. | [references/i-checklists.md](references/i-checklists.md) |
| J. Free backlink catalog | Common backlink platforms: what each is, free route, signup barriers, link type, who it fits, what to watch out for. Grep it by name. | [references/j-backlink-catalog.md](references/j-backlink-catalog.md) |
