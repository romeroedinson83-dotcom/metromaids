# Metro Maids Cleaning Services — Website

A fast, static, SEO/GEO/AIO-optimized website for Metro Maids Cleaning Services, matching the brand's navy-and-gold logo.

## What's included
- `index.html` — full one-page site (hero, services, why-us, service areas, process, testimonials, FAQ, lead form, footer)
- `css/style.css` — styling in the brand's navy (`#1a2b4d`) and gold (`#b8894e`) palette
- `js/main.js` — mobile nav toggle + lead form AJAX submission with a honeypot spam field
- `assets/logo.svg`, `assets/favicon.svg` — vector logo recreated in the same style/colors as the provided logo (crest "MM" monogram, gold sparkle, broom, navy/gold ribbon, serif wordmark)
- `robots.txt`, `sitemap.xml` — standard SEO crawler files
- `llms.txt` — a plain-text business summary for AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) to cite accurately (GEO/AIO)
- JSON-LD structured data embedded in `index.html`: `LocalBusiness` (with service area, hours, offers) and `FAQPage` schema

## Before you launch — required setup

### 1. Connect the lead form (currently a placeholder)
The form posts to Formspree. You must create a free form:
1. Go to formspree.io and sign up (free tier is fine to start).
2. Create a new form; copy the form ID it gives you (looks like `xkgqwrbp`).
3. In `index.html`, find:
   ```html
   <form id="leadForm" class="lead-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" novalidate>
   ```
   Replace `YOUR_FORM_ID` with your real ID.
4. Set the notification email in your Formspree dashboard to `contact@metromaidscleaning.com`.

Leads submitted on the site will land in your Formspree inbox/email. No backend server needed.

**Alternative:** if you host on Netlify, you can instead add `data-netlify="true"` and a matching hidden input to the form and skip Formspree — ask if you'd like this swapped.

### 2. Replace the placeholder domain
The canonical URL, Open Graph tags, and structured data currently use `https://www.metromaidscleaning.com/`. Once you buy your real domain, do a find-and-replace across `index.html`, `robots.txt`, `sitemap.xml`, and `llms.txt` for that URL.

### 3. Verify contact info
Phone `(801) 856-6403` and email `contact@metromaidscleaning.com` are already wired into the header, hero, contact section, footer, and structured data.

### 4. Swap in your real logo file (optional)
`assets/logo.svg` is a hand-recreated vector version of your logo (same colors, layout and monogram style) so the site never depends on a raster upload. If you'd rather use your original PNG/JPG file exactly, drop it into `assets/` (e.g. `assets/logo.png`) and update the `src="assets/logo.svg"` references in `index.html` (3 places: header, hero, footer) plus the favicon reference if desired.

### 5. Reviews & ratings
The `4.9` rating and `127` review count (hero, trust bar, and JSON-LD `aggregateRating`) are placeholders until you have real Google/Yelp review data — update or remove them once you have real numbers so structured data stays accurate.

## SEO / GEO / AIO notes
- **SEO**: semantic HTML, descriptive `<title>`/meta description, canonical tag, Open Graph + Twitter cards, fast static assets, mobile-first responsive layout, alt text on images.
- **GEO** (local + generative-engine optimization): `LocalBusiness` schema with explicit `areaServed` neighborhoods (Denver, Cherry Creek, DTC, Greenwood Village, Centennial, etc.), a dedicated "Service Areas" section with neighborhood names in plain text for local search and AI citation.
- **AIO** (AI answer-engine optimization): `FAQPage` schema with direct, quotable answers; an `llms.txt` file summarizing the business in plain language for AI crawlers; consistent NAP (name/address/phone) data across the page and structured data so AI tools can confidently cite Metro Maids.

## Running locally
No build step — just open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8080
```
then visit `http://localhost:8080`.

## Deploying
Any static host works: GitHub Pages, Netlify, Vercel, or Cloudflare Pages. Drag-and-drop the whole folder, or connect the repo — no build command required.
