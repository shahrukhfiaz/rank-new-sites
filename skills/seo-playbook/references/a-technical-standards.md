# A. Technical standards

## A.1 Head and metadata
- Titles: 60 characters or fewer, unique; the brand suffix only if it fits.
- Meta descriptions: 70 to 160 characters, unique, carrying the answer (a number beats a promise).
- Canonical: self-referencing, absolute, the served URL with its trailing-slash form.
- `og:type article` with published and modified times on articles; a 1200x630 share image with alt text.
- A `robots` meta tag only where a page must stay out (`noindex, follow`).

## A.2 Structured data (one builder, a JSON-LD `@graph`)
- **Organization** with logo and `sameAs`; **WebSite**; **BreadcrumbList** on every page below home.
- **Article or BlogPosting** with an image (several aspect ratios), `datePublished`, `dateModified`, author, and `citation` from the sources.
- **LocalBusiness**, with the most specific subtype (such as `Plumber`, `Bakery` or `Dentist`), only for a real business at a real, verifiable address, with opening hours and the same name, address and phone as its listings.
- **Product and Offer** only with a real price and availability; review and rating markup only from real reviews shown on the page.
- **Dataset** with `distribution` (download links), licence, `temporalCoverage` and `measurementTechnique` on data pages.
- **SoftwareApplication** for software and free tools; **Service** for service pages.
- **ImageObject** for credited photos, with `creditText`, `license`, `acquireLicensePage`, `creator` and `copyrightNotice`. Search Console's image metadata report warns when `copyrightNotice` is missing.
- **FAQPage** markup is harmless, but Google retired FAQ rich results in May 2026; keep FAQs for readers. HowTo rich results are gone too. Never mark up reviews, ratings or awards that do not exist.

## A.3 Robots, sitemaps and redirects
Disallow only private paths; allow the AI crawlers; name the sitemap index. Sitemaps hold only indexable pages, with honest `lastmod`, split per template and staged per batch. One 301 hop from every host variant.

## A.4 Internal links
- Listing pages link only to published pages; links to pages you noindexed on purpose carry `rel="nofollow"`.
- Use descriptive anchors that name the target's topic, such as "emergency boiler repair prices", not "click here".
- Links that prefill a form with query parameters are fine when the target's canonical drops the parameters; Search Console files them under "Alternate page with proper canonical tag".
- No orphan pages; every key page within three clicks of the home page.

## A.5 Performance levers that reach Lighthouse 100
- The above-the-fold image loads eagerly at high priority, with `sizes` matching the real column width and pre-cropped copies for phones.
- Load scripts at low priority, and only the parts of a UI library you use.
- Below-the-fold sections use `content-visibility: auto` with `overflow: hidden`; leave out the first screen, forms and sticky areas.
- Inline only small page styles. Measure any "critical CSS" tool: it can add layout shift.
- Start animations only when they are visible (an IntersectionObserver). Serve AVIF with a WebP fallback, with no fallback image over 200 KB.
- Every third-party image or embed sits in a box with a fixed size, so it causes no layout shift.

## A.6 Accessibility that audit tools also check
- Decorative images are **CSS backgrounds**: some audit tools count `alt=""` as missing. A base map under a drawn overlay carries the description in its alt, with the overlay `aria-hidden`, so screen readers hear it once.
- Icon-only links keep `aria-label` and also contain screen-reader-only text: some crawlers and audit tools ignore `aria-label`.
- Data tables have no empty header cell (axe `td-has-header`). Scrollable tables are named regions.
- Small text keeps WCAG AA contrast. Tap targets are 24 px everywhere and 44 px on touch screens. Form fields are 16 px on touch screens, or iOS zooms into them.

## A.7 Extraction: how search and AI engines read the page
Text extractors such as trafilatura, and the AI systems built on them, drop whatever sits inside a `<button>` and pick the narrowest `<article>` element as the page.
- **Page header and FAQs:** the page header is a `<div>`. FAQ questions are text in an `<h3>`, with a transparent toggle button laid over it.
- **The article itself:** no `<article>` wraps only part of a page. The article body uses a neutral class.
- **Tables:** never add a hidden `<caption>`; it extracts as an extra row. Name the table with `aria-label` on its scroll region.
- **Bylines:** one `<p>` with the author name as plain text.
- **Reading order:** the cookie banner renders last in `<body>`, so the H1 and the answer are the first text an extractor meets.

Check with trafilatura on built pages after any template change.
