# Abacus Experts — website

A Next.js (App Router) site reproducing the approved reference at
<https://abacus-experts-hyderabad.sam3234.chatgpt.site/>. Fourteen routes:

| Route | Page |
| --- | --- |
| `/` | Abacus classes in Hyderabad — 25 sections, 30 FAQs, two enquiry forms |
| `/about-us/` | The centre, trainer Joshna, programmes, method, standards |
| `/how-abacus-classes-work/` | The five-step process, from assessment to progression |
| `/student-progress-and-assessment/` | How progress is measured and reported |
| `/parent-faqs/` | 30 questions in six topic groups |
| `/areas-we-serve/` | Centre location and the Hyderabad areas served |
| `/contact-us/` | Contact options, demo booking, directions |
| `/child-safeguarding-policy/` · `/photo-and-video-consent-policy/` · `/accessibility/` | Policy pages, content-page layout |
| `/privacy-policy/` · `/terms-and-conditions/` · `/refund-cancellation-policy/` · `/disclaimer/` | Legal pages, prose layout |

The home page uses in-page anchors (`#batches`, `#syllabus`, `#fees`, `#faq`,
`#assessment`, …). Its twelve jump targets are declared once in `lib/nav.js` as
`SECTIONS`; the table of contents and the section-nav strip both render from
that array and `app/page.js` sets the matching `id`s, so they cannot drift
apart. Each secondary page passes its own section list to the same components.

`lib/nav.js` also holds `SITE_ROUTES`, which drives `/sitemap.xml`.

## Fidelity to the reference

Every page is a match for its reference page, verified by diffing the two. On
all fourteen pages the rendered text is identical **except the phone number** —
see the caveat below. On the home page:

- **all 913 text nodes are identical**
- **the DOM tree is identical** but for three nodes, all deliberate:
  - `<div hidden>` — React's own Suspense marker, emitted by the framework
  - `<p class="form-status">` ×2 — an `aria-live` line the reference has no need
    for, because its form posts to a backend while this one hands off to
    WhatsApp and has to report validation errors
  - the closing form submits with `<button type="submit">` where the reference
    uses `<a class="button form-whatsapp">`. Same class, same appearance, but an
    anchor cannot submit a form from the keyboard.

### ⚠ The reference publishes two different phone numbers

Its home page shows **+91 81868 44555**; all thirteen secondary pages show
**+91 90325 89990**. Both cannot be right.

This build uses a single number — `BUSINESS.phoneDigits` in `lib/business.js`,
currently set to the home-page one — everywhere: visible text, `tel:` links,
WhatsApp links and the schema.org `telephone`. **Confirm which number is
current and change that one constant.** The generated content modules were
normalised to it, so nothing else needs editing.

To re-verify after a change, diff the rendered markup against a fresh copy of
the reference:

```bash
curl -sL https://abacus-experts-hyderabad.sam3234.chatgpt.site/ -o /tmp/ref.html
npm run build && npm run start &
curl -s http://localhost:3000/ -o /tmp/ours.html
# then compare tag/class trees and text nodes
```

## The stylesheet is vendored

`app/globals.css` is the reference's own design layer, extracted from its
compiled stylesheet. **Treat it as a build artefact**: re-extract it rather than
hand-editing, or the two pages drift.

It is Tailwind-free — the markup uses the reference's semantic class names
(`.section`, `.feature-grid`, `.mode-card-grid`, `.faq-item`, …), and those class
names are the contract between the stylesheet and `app/page.js`.

Two local changes to the extracted CSS, both flagged in comments in the file:

1. Font stacks are prefixed with `var(--font-inter)` / `var(--font-nunito)`.
   `app/layout.js` self-hosts Inter and Nunito Sans through `next/font` — same
   faces as the reference, without the third-party request — and next/font
   exposes hashed family names that the reference's bare names would not resolve.
2. A `.form-status` rule appended at the end, for the validation line above.

## URLs

`next.config.mjs` sets `trailingSlash: true`: every secondary page is linked
with a trailing slash, as in the reference, and without it Next would redirect
each of those links on every click.

`components/SiteLink.js` routes same-origin paths through `next/link` and leaves
external, `tel:` and `mailto:` links as plain anchors. Both render the same
`<a href>`, so the markup still matches the reference.

## Where the copy lives

Body copy is **not** in `app/page.js`. It lives in `lib/content/`, grouped by
part of the page, so text edits never touch layout:

| File | Covers |
| --- | --- |
| `course.js` | hero, batch details, 12-stage curriculum, course overview, programmes, how it works, teaching method |
| `why.js` | differentiators, provider comparison, what is an abacus, prerequisites, skills |
| `fees.js` | fee cards and mode comparison, centre location, home practice |
| `outcomes.js` | benefits and evidence, readiness signs, progress assessment, trainer, parent feedback, checklist, abacus vs Vedic |
| `faqs.js` | the home page's 30 FAQs |
| `forms.js` | the two enquiry form field sets, enrolment steps |
| `parent-faqs.js` | the longer 30-question set on `/parent-faqs/` |
| `pages.js` | five secondary pages, as section/block lists |
| `legal.js` | the four legal pages, as flat block lists |

`pages.js` and `legal.js` were extracted from the reference and are rendered by
`components/PageBlocks.js` and `components/LegalBlocks.js`. Their block formats
are documented at the top of each module. Copy in them is plain text with two
inline markers — `**bold**` and `[[label|href]]` — so it stays editable without
touching JSX.

Verified business facts are split in two on purpose: **`lib/business.js`** holds
contact details and is imported by client components, so everything in it ships
to the browser; **`lib/programme.js`** holds fees, batch limits, trainer and
practice guidance and is read only by the server page and `lib/schema.js`.

`lib/schema.js` builds the whole schema.org graph — WebSite,
EducationalOrganization/LocalBusiness, WebPage, Course with three priced Offers
and three CourseInstances, BreadcrumbList and a 30-question FAQPage — from those
same constants, so the structured data and the visible page cannot disagree.

There is deliberately **no** Review or AggregateRating markup for the parent
comments. They are self-hosted and unverified, which makes them ineligible for
review snippets and a manual-action risk if marked up anyway.

## Components

Almost the whole page is server-rendered. Only three components are client
components, and each earns it:

| Component | Client? | Why |
| --- | --- | --- |
| `SiteHeader` | no | the mobile menu is a `<details>` disclosure, so it opens with JavaScript off |
| `SiteFooter` | no | — |
| `Brand`, `SiteLink` | no | — |
| `PageToc` | yes | highlights the section currently in view |
| `SectionNav` | yes | same, for the horizontal strip |
| `EnquiryForm` | yes | validation and the WhatsApp hand-off |

`PageToc` and `SectionNav` share `useActiveSection.js`, which mutes its
`IntersectionObserver` for 700 ms after a click — smooth scrolling otherwise
walks the observer through every section in between and the highlight flickers
down the list.

## Forms

`EnquiryForm` renders whatever field list it is handed, so a new question is a
data change in `lib/content/forms.js`, not a component change.

There is **no backend**. Submitting validates the Indian mobile number and then
opens WhatsApp with the answers prefilled; the parent still has to tap Send.
The name and number go only to WhatsApp — never into the `dataLayer`.

Each control is nested inside its `<label>`, which associates the two
implicitly. That is how the reference does it, and it means two forms can render
on one page without id collisions.

## Domain

`BUSINESS.url` is the production domain. It feeds `metadataBase` in
`app/layout.js`, builds the schema.org `@id` values, and generates
`/sitemap.xml` and `/robots.txt`. Change the domain in that one place and
everything follows.

One thing the code cannot do for you: make sure the bare domain
**301-redirects to `www.abacusexperts.com`** at your DNS/host layer. Every
canonical, `og:url` and sitemap `<loc>` points at the `www` host, so serving the
same page on the apex without a redirect splits crawl signals. Note this is the
opposite direction from an earlier version of this site, which canonicalised on
the apex.

## Develop / build

```bash
npm run dev      # local dev at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Structure

```
app/
  layout.js                # <html>/<body>, next/font, global metadata
  globals.css              # vendored reference stylesheet — do not hand-edit
  page.js                  # the page — layout only, copy comes from lib/content
  sitemap.js  robots.js
components/                # SiteHeader, SiteFooter, PageToc, SectionNav, EnquiryForm, …
lib/business.js            # site URL, address, phone/WhatsApp config, tracking
lib/programme.js           # fees, batch limits, trainer (server-only)
lib/nav.js                 # section anchors, header nav, footer + policy links
lib/schema.js              # the schema.org @graph
lib/content/               # all body copy
lib/seo.js                 # shared openGraph block for page metadata
public/                    # abacus-experts-logo.png, abacus-method.png
```

Page metadata merges *shallowly* in Next.js: a page that defines `openGraph`
replaces the layout's entirely. `pageOpenGraph()` in `lib/seo.js` exists so
`type` / `locale` / `siteName` are not silently dropped — use it rather than
writing a bare `openGraph` object in a page.

## Docker

`next.config.mjs` sets `output: "standalone"`, so the image ships only the traced
`node_modules` and a minimal `server.js` — no dev dependencies.

```bash
docker compose up -d --build     # build and run at http://localhost:3020
docker compose logs -f web
docker compose down
```

The container listens on **3020** (`PORT` / `HOSTNAME` env vars), runs as the
non-root `node` user, and has a healthcheck that requests `/`. To publish on a
different host port, change only the left-hand side of the compose `ports`
mapping, e.g. `"8080:3020"`.

## Deploying as plain static files (optional)

Replace `output: "standalone"` with `output: "export"` in `next.config.mjs` and
run `npm run build`; the static site is emitted to `out/` for hosting on any
static host. (The Docker setup above expects `"standalone"`.)
