# G. Tool notes and gotchas

Install and use: [Phase 3](../phases/3-score-loop.md). These notes save the retries.
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
- **A quality gate and a smoke test** run in CI and fail the build ([reference B](b-quality-gate.md)).
- **A change ledger:** append-only, holding date, type, URLs, files, baseline and note.
- **One-off audit sites** (Seobility and similar):
  - Treat their findings as hints, and fix the real ones.
  - Their "response time" is measured from their own country, so a slow figure there can be distance, not the server.
