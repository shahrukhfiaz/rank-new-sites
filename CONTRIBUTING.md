# Contributing

Thanks for helping make this playbook better. Corrections of stale platform facts are the most useful contribution of all.

## How the repository fits together

- `PLAYBOOK.md` is the one source. Edit the method here.
- `data/backlink-catalog.csv` holds the platform catalog. Edit platforms here, not in reference J of the playbook.
- `scripts/build.mjs` renders the catalog into the playbook and splits the playbook into the skill in `skills/seo-playbook/`. Never edit the files under `skills/seo-playbook/phases/` or `references/` by hand; they are generated.
- `skills/seo-playbook/evals/` holds test cases in the layout `claude plugin eval` reads.

## Making a change

1. Edit `PLAYBOOK.md` or `data/backlink-catalog.csv`.
2. Run `node scripts/build.mjs` (Node 18 or newer, no dependencies).
3. Optionally run `python scripts/package_skill.py` to rebuild `dist/seo-playbook.skill`.
4. Open a pull request. CI runs `node scripts/build.mjs --check` and fails when the generated files are out of date.

## What belongs here

- **Methods that stay within search engine guidelines.** No paid or exchanged links, no ways around bot checks, no fake reviews, no use of the Indexing API for ordinary pages.
- **Facts with a source.** A platform fact (free route, link type, signup barrier) should say when it was checked; link the platform's own page where you can.
- **Advice that works across site types.** Where a step only applies to one kind of site (local, ecommerce, programmatic), say so.

## Style

- Plain, direct sentences in the imperative. One idea per sentence.
- Every step ends on a **Done when** line that someone can check.
- No em-dashes. Keep titles and headings in sentence case.

## Updating a platform in the catalog

Each row has `group, site, url, dr, what_it_is, free_route, signup_barriers, link_type, best_for, watch_out`. Use one of the existing group names exactly. A platform whose free listing needs a badge or link back goes in "Avoid for every site", with the requirement stated in `watch_out`.
