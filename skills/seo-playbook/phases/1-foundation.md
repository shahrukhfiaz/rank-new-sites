# Phase 1. Foundation, before the first page is public

## 1.1 Know what kind of site it is

| Site type | Pages that earn search traffic | Watch for |
| --- | --- | --- |
| Blog or publisher | Articles that answer one question each, topic hubs | Thin posts, generic filler, no visible author or editorial standard |
| Local business | One page per service, a location page, a contact page with the real name, address and phone | Business profile listings, the same name, address and phone everywhere, real reviews only, no virtual-office addresses |
| SaaS or software | Feature, use-case, integration and comparison pages, docs, free tools | Thin "alternatives" pages, content hidden behind sign-up |
| Online store | Category and product pages, buying guides | Copied manufacturer text, faceted URLs that multiply, Product markup without a real price and stock |
| Directory or programmatic | Location, item or comparison pages built from data, plus hubs | Doorway risk: each page needs unique substance or stays out of the index |
| Data or tools site | Calculators, datasets, reports | Make the data citable: method, date, download, licence |

**Done when:** you can name the site type, its money pages and its main risk.

## 1.2 One canonical origin
- Pick one origin, such as `https://www.example.com`. Every other host and scheme returns a **301** to it: http, the bare domain, and www over http.
- Every internal link, canonical, hreflang, sitemap URL and structured-data `@id` uses that origin and the same trailing-slash form as the URL the server actually serves.
- A canonical that points at a URL which redirects is a real and common bug. Build every URL through one helper, or set the site address once in your CMS (WordPress site URL and permalinks, the Shopify primary domain).

**Done when:** `curl -sI` on each variant shows one 301 hop to the canonical, and a crawl finds no internal link that redirects.

## 1.3 Robots and crawler access
- `robots.txt` disallows only private paths, such as an API, a cart or an admin area. Never block CSS, JavaScript or image folders: search engines render pages and need them.
- **Allow AI crawlers** unless the owner decides otherwise: OAI-SearchBot, ChatGPT-User, GPTBot, PerplexityBot, Perplexity-User, ClaudeBot, Claude-SearchBot, Applebot, Bingbot and Googlebot. Repeat the private-path disallow in each named group. Blocking them removes the site from AI answers.
- Name the sitemap index in `robots.txt`.

**Done when:** a live fetch of `robots.txt` and Search Console's robots report show pages, styles and scripts allowed and only the private paths blocked.

## 1.4 Templates that pass the standards in reference A
- **Titles and descriptions:** titles of 60 characters or fewer (drop the brand suffix when it would not fit); meta descriptions of 70 to 160 characters.
- **Page structure:** one H1 per page; an answer under the H1; a visible "Updated" date equal to `dateModified` and to the sitemap `lastmod`.
- **Structured data:** JSON-LD from one builder, never hand-written per page.
- **Share images:** a 1200x630 image per page that shows the right subject.
- **Accessibility:** no empty alt and no text-less links (A.6).
- **Extraction:** content that text extractors keep (A.7).

**Done when:** a smoke test over the built site fails on a title over 60 characters, a description outside 70 to 160, a missing canonical, a redirecting internal link, a missing H1 or an unrendered placeholder, and it passes. On a CMS, an SEO plugin's site audit plus a crawler can stand in for the smoke test.

## 1.5 Speed and mobile
- Aim for Lighthouse 100 in performance, accessibility, best practices and SEO on every template (A.5 lists the levers).
- Test on a **real Android phone**, or in Roboto at 320 and 344 px with a 1.15 text scale. Windows and Mac fonts are narrower than Android's and hide overflow: a navbar that fits on a laptop can overflow on a phone.

**Done when:** Lighthouse on each template scores 100 on desktop and 90 to 100 on mobile (the median of 3 runs), and a 320 to 1440 px check finds no horizontal scroll, cut-off control or overlapping element.

## 1.6 Sitemaps that tell the truth
- List **only indexable pages**: no noindex pages, no redirects, no parameter URLs.
- `lastmod` is the page's real last content change, never the build time.
- Split large sites into per-template sitemaps under one index (articles, products, locations, tools), and give each publishing batch its own file, so Search Console coverage can be read per batch.

**Done when:** every URL in the sitemaps returns 200, is self-canonical and indexable, and `lastmod` changes only when the content changes.

## 1.7 Measurement wiring
- **Google Search Console** on a **Domain property**, verified by DNS.
- **Bing Webmaster Tools**: one click with "Import from Google Search Console".
- **IndexNow** key file at the root, for Bing and other participating engines.
- **Analytics only behind consent** where the law requires it (EU and UK rules, and US state laws that require honoring Global Privacy Control). Opt-in analytics undercount traffic, so count conversions (leads, sales, sign-ups) in your own database or CRM.
- **A Search Console service account** for API reads ([reference D.1](../references/d-search-console.md)).

**Done when:** both consoles show the property verified and the sitemap index submitted, and an API query returns rows.
