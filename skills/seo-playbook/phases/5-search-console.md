# Phase 5. Read Search Console correctly (weekly from week 2)

Use the API ([reference D](../references/d-search-console.md)) for performance data and URL Inspection, and the website for the Page indexing, Links, Manual actions and Core Web Vitals reports.

## 5.1 Diagnose before prescribing
- **Split queries into position bands:** 1 to 3, 4 to 10, 11 to 20, 21 to 50, 51 and worse. When most impressions sit at 51 or worse, the problem is **ranking**: no title earns a click on page 6.
- **Click-through work only pays on pages already in the top 15.**
- **Separate the noise:**
  - brand and `site:` searches (legal pages "ranking" for the brand name);
  - off-target queries that only share a word with the page;
  - impressions from countries you do not serve.
- **Read each page's rows by date.** A page can rank in the top 10 every day while its visible queries look worse, because Google hides rare queries. A page with daily top-10 positions and a click-through rate under 1% has a snippet problem, not a ranking problem.

**Done when:** you can state, with numbers, whether a page is limited by its ranking or by its snippet.

## 5.2 Page indexing reasons: what is fine and what is not
[Reference D.2](../references/d-search-console.md) has the full table. In short:
- **Fine:** "Alternate page with proper canonical tag" for parameter URLs, "Excluded by 'noindex' tag" for pages you excluded on purpose, "Page with redirect" for host variants, and data files under "Crawled, currently not indexed".
- **Act on:** errors, soft 404s, "Duplicate without user-selected canonical", and a rising "Crawled, currently not indexed" share on real pages. "Validate fix" is only for real problems you fixed.

**Done when:** each reason in the report is classified as intended, or as a problem with a cause.
