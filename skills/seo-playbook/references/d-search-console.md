# D. Search Console in practice

## D.1 API access
- In Google Cloud, create a project, enable the Search Console API, create a service account and download its JSON key. In Search Console, open Settings, then Users and permissions, and add the service account's email with **Full** permission. Full is enough to read data and submit sitemaps; do not grant Owner, which only the Indexing API needs.
- Store the key in an owner-only file, never in git or chat.
- **Useful calls:**
  - search analytics by date, query, page, device, country, and query plus page;
  - URL Inspection in batches (2,000 a day per property);
  - sitemaps list, get and submit.
- Data lags about 2 days. Totals include anonymized queries that the query list does not show.

## D.2 Page indexing reasons

| Reason | Usually means | Action |
| --- | --- | --- |
| Alternate page with proper canonical tag | Parameter or variant URLs whose canonical points to the clean page | None, if Google's chosen canonical equals the declared one |
| Excluded by 'noindex' tag | Pages you noindexed on purpose | None, if intended; check that none are pages you want indexed |
| Page with redirect | Host or scheme variants, old URLs | None, if they redirect to the right place |
| Crawled, currently not indexed | Doubt about quality or demand; also data files | Fine for CSV or PDF downloads. For real pages, improve or merge them, and watch the share |
| Discovered, currently not indexed | Known but not fetched yet (new site, low crawl budget) | Internal links, a sitemap re-submission, manual Request indexing |
| URL is unknown to Google | Not discovered yet | Sitemap re-submission, internal links, Request indexing |
| Duplicate without user-selected canonical, Soft 404, Server error, Blocked by robots.txt | Real problems | Fix, then "Validate fix" |

## D.3 Changing content on a young site: do and don't
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

## D.4 Bing and AI search
Bing's index is a source for Copilot, DuckDuckGo and ChatGPT search. Verify Bing Webmaster Tools by importing from Search Console, and ping IndexNow after each batch.
