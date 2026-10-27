# Phase 4. Launch and indexing control

## 4.1 Launch set and pace
- **Small sites launch whole.** A local business or a product site with a few dozen pages goes live at once; the caps below matter for sites that can generate hundreds of pages.
- **Large sites launch with at most about 100 indexable pages:** the strongest templated pages, the hubs that have real substance, tools, data pages, and core and trust pages. Hold the rest as drafts.
- Then publish within the caps in [reference C](../references/c-indexing-caps.md). Track each batch in a staged sitemap.
- The sitemap only ever lists indexable pages, each with `lastmod` taken from its real last content change (1.6). Pages held back stay out of it until they publish.

**Done when:** you can state today's allowance from the publish history, and every publishing session uses it.

## 4.2 Ask for discovery after each batch
After every publishing batch:
1. **Re-submit the sitemap index** through the Search Console Sitemaps API or the Sitemaps report ([reference D.1](../references/d-search-console.md)).
2. **Ping IndexNow** with the changed URLs.
3. **Use URL Inspection, then Request indexing** for the most important new pages, about 10 a day. That manual button is fine. The **Indexing API** is restricted to job postings and livestream video pages; never use it for ordinary pages.

**Done when:** the sitemap shows a fresh submission with no errors, and IndexNow returned success.

## 4.3 Expect the settle period
- Search engines show a new site deep in results while they test it: most early impressions sit at position 50 or worse, and clicks are rare.
- Crawling comes in a burst in the first days, then slows to a handful of pages a day.
- New pages can stay "URL is unknown to Google" for days after they publish.

This is normal. Do not react to it with rewrites.

**Done when:** the owner knows what the settle period looks like, so early numbers do not trigger panic edits.
