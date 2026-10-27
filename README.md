# rank-new-sites

**An SEO playbook your AI agent can follow, step by step: take any new website from launch to indexed, ranked and cited in AI answers. Organic only.**

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Agent Skills](https://img.shields.io/badge/Agent%20Skills-SKILL.md-orange.svg)](skills/seo-playbook/SKILL.md)
[![Claude Code plugin](https://img.shields.io/badge/Claude%20Code-plugin-8A2BE2.svg)](#install)

Most SEO advice tells you *what matters*. This tells an agent *what to do next, and when it is done*. It is a field-tested procedure in 8 phases, each step ending on a checkable **Done when** line, plus the reference material those steps need: technical standards, a quality gate for templated pages, publishing caps for new domains, how to read Search Console, a fit test for backlinks, and a catalog of backlink platforms with their real signup barriers and link types.

It works for any kind of site: a blog, a local business, a SaaS product, an online store, a publisher, or a directory or programmatic site.

## What it covers

| Phase | What the agent does |
| --- | --- |
| 1. Foundation | Names the site type and money pages; one canonical origin; robots that allow AI crawlers; templates, speed and mobile; truthful sitemaps; measurement |
| 2. Content | Long tail first; programmatic and location pages without doorway risk; answer-first pages; a fact-check on publish day; trust pages |
| 3. Score loop | Installs [claude-seo](https://github.com/AgriciDaniel/claude-seo) and the other checkers, runs every tool, verifies each finding, fixes, re-runs, and repeats until **every score reads 100** or only honest "ceiling items" remain |
| 4. Launch | A capped launch set, a daily publishing pace for new domains, sitemap and IndexNow after each batch, what the settle period looks like |
| 5. Search Console | Position bands, ranking problems versus snippet problems, what each Page indexing reason means |
| 6. Earned authority | Brand and local profiles, a fit test for every directory, placements by site type, people-only channels, digital PR, link pace |
| 7. Improve | Small, measured changes with baselines; what not to touch on a young site |
| 8. Cadence | What to run each publishing day, weekly and monthly |

Reference files: technical standards (A), the quality gate (B), indexing caps (C), Search Console (D), link triage and platform notes (E), AI search (F), tool notes (G), lessons learned (H), checklists (I), and the **backlink catalog** (J).

## What it will not do

The skill keeps an agent inside search engine guidelines, so it never:
- buys, swaps or trades links, including badge-for-listing deals (Product Hunt's optional badge is the exception);
- solves, bypasses or outsources a CAPTCHA, or enters a phone number for you;
- invents authors, addresses, reviews, ratings or statistics to raise a score;
- uses the Google Indexing API for ordinary pages;
- floods a new domain with templated pages.

## Install

### Claude Code (plugin)

```
/plugin marketplace add shahrukhfiaz/rank-new-sites
/plugin install seo-playbook@rank-new-sites
```

### Claude Code (personal skill, no plugin)

```bash
git clone https://github.com/shahrukhfiaz/rank-new-sites.git
cp -r rank-new-sites/skills/seo-playbook ~/.claude/skills/
```

### claude.ai

Download [`dist/seo-playbook.skill`](dist/seo-playbook.skill) and upload it in the Skills section of claude.ai's settings.

### Other agents (Codex, Cursor, Gemini CLI and others)

The skill is a standard `SKILL.md` folder under the open Agent Skills format. Copy `skills/seo-playbook/` into your tool's skills directory (see its documentation).

### No agent at all

Read [`PLAYBOOK.md`](PLAYBOOK.md): the same content in one file.

## Use it

The skill loads itself when a request is about SEO. Some prompts that use it well:

- "Our site launches next week with 400 city pages from one template. Plan the launch and tell me what each page needs."
- "Use claude-seo and every other tool to get example.com to 100 on every SEO score. Write the plan first."
- "Here is a list of free backlink sites. Which ones should my recipe blog join, and how?"
- "Read my Search Console data for the last 28 days and tell me whether my problem is ranking or snippets."
- "We are a local plumbing company with 15 pages. Walk me through the foundation phase."

## How it is built

```
skills/seo-playbook/
├── SKILL.md              the router: rules, a progress checklist, and when to read each file
├── phases/               one file per phase (8)
├── references/           one file per reference section (A to J)
└── evals/                test cases in the layout `claude plugin eval` reads
PLAYBOOK.md               the single-file edition and the one source
data/backlink-catalog.csv the platform catalog behind reference J
scripts/build.mjs         renders the catalog and splits PLAYBOOK.md into the skill
```

`SKILL.md` stays short. An agent reads it, picks the phase that fits the task, and loads only that file and the references it points to. This follows Anthropic's [skill authoring guidance](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices): a description that says when to use the skill, a body under 500 lines, references one level deep, and a contents list on long files.

## Tested

Three realistic tasks, each run with and without the skill (Claude Sonnet), graded on concrete, checkable statements:

| Task | With the skill | Without |
| --- | ---: | ---: |
| Plan a launch of 400 templated city pages on a new domain | 5 of 6 | 4 of 6 |
| Vet an 11-site "free backlinks" list for a recipe blog | 9 of 9 | 6 of 9 |
| Plan a loop to get every SEO score to 100 | 7 of 7 | 4 of 7 |
| **Total** | **21 of 22 (95%)** | **14 of 22 (64%)** |

It is a small test set, graded by hand against each statement, so treat it as a sanity check rather than a benchmark.

Without the skill, a capable model knows general SEO but misses the operational rules: an automated uniqueness gate for templated pages, a fact-check on publish day, a weekly pace for new referring domains, checking each placed link while logged out, the tool install steps, and looping until 100 instead of stopping after a fixed number of rounds. To run the tests yourself (Claude Code v2.1.269 or later; these are real, billed model runs): `cd skills/seo-playbook && claude plugin eval . --allow-tools Write,Edit,Bash`.

## Contributing

Corrections are welcome, above all for platform facts that have changed. Edit `PLAYBOOK.md` or `data/backlink-catalog.csv`, run `node scripts/build.mjs`, and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Credits

- [claude-seo](https://github.com/AgriciDaniel/claude-seo) by AgriciDaniel (MIT) is the audit toolkit the score loop runs. It is a separate project; install it on its own.
- Anthropic's [Agent Skills documentation](https://code.claude.com/docs/en/skills) for the skill format.

## Disclaimer

Not affiliated with Google, Microsoft, Anthropic or any platform named here. Search engines do not publish their ranking systems, and nothing here guarantees rankings or traffic. Platform facts were checked in October 2026 and change often, so verify them before you rely on them. Nothing here is legal advice: check consent, privacy and advertising rules for your own country and business.

## License

[MIT](LICENSE)
