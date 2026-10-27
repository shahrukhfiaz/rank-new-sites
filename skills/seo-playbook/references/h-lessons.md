# H. Lessons learned (symptom → cause → fix)

- **Content hidden under the header on phones** → a sticky header with a top offset draws below its place in the page and overlaps whatever follows by that offset → give the next element top spacing larger than the offset.
- **The layout fit in tests but broke on a real phone** → desktop fonts are narrower than Android's Roboto → test in Roboto at 320 and 344 px with a 1.15 text scale.
- **A third-party badge or embed shows as a broken image** → the Content Security Policy blocks its host → add the host after checking that it sets no cookies and runs no script.
- **"Image without alt" and "link without anchor text" in audit tools** → `alt=""` on decorative images, and icon-only links → CSS backgrounds for decoration, and screen-reader text inside links.
- **A slow "response time" in an audit** → distance to the server, not server time → a CDN, after making the app trust the forwarded visitor IP only from the CDN's published address ranges.
- **The canonical points at a redirecting URL** → mixed trailing-slash or host forms → build every URL through one helper.
- **Two templated pages read alike** → template thinking → tie each to its own facts: location, direction, season, audience.
- **Articles published with stale or wrong facts** → checked only when written → a fresh fact-check on publish day.
- **New articles stay "URL is unknown to Google"** → slow crawling of a new domain and no sitemap re-read → re-submit the sitemap, link the articles from pages that are already crawled, and use Request indexing.
- **A password appears in a tool's output** → masking keyed on the wrong field → mask every field after the identifier, and rotate the password.
- **An agent's audit advice breaks extraction** → the advice was never tested → test it with trafilatura before shipping.
