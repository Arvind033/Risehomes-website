# RISE HOMES

Building Dreams, Creating Futures

A lightweight React, Vite, JavaScript, React Router, and CSS foundation for the
Rise Homes construction and interiors website. Home, Construction, Interiors,
Projects, About, the Blog journal, and Contact are implemented.

## Local development

Use a current Node.js LTS release and npm.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. It will choose another port if its default
port is already in use.

```sh
npm run lint
npm run build
npm run preview
```

## GitHub Pages deployment

The workflow in `.github/workflows/deploy-pages.yml` builds and deploys the site
to GitHub Pages on pushes to `main` or `master`. The `public/CNAME` file
configures `www.risehomes.in`, and the build creates a `404.html` fallback so
React Router routes continue to work when opened directly or refreshed.

After connecting this project to a GitHub repository, select **Settings > Pages
> Build and deployment > GitHub Actions**. In the repository's Pages settings,
set the custom domain to `www.risehomes.in` and enable HTTPS after DNS has
propagated. In GoDaddy, point the `www` CNAME record to the GitHub Pages hostname
for the account that owns the repository. To serve the apex domain
(`risehomes.in`) too, configure its GitHub Pages A records and choose the
preferred redirect in Pages settings.

The existing Vite configuration and Oxlint setup are retained. React Router and
tree-shakeable Lucide icons are the added direct dependencies. No UI framework or
TypeScript was added.

## Structure

```text
src/
	components/
		blog/         Journal reference images, article metadata and consultation CTA
		common/       Reusable controls, responsive photos, consultation dialog and form
		contact/      Contact-page enquiry form and its unavailable state
		layout/       Header, Footer, SiteLayout
		sections/     Homepage hero, services, process, inspiration, content bands and FAQ
	data/           Business configuration, page content, journal articles and navigation
	pages/          Dedicated pages, the article reader and shared placeholder page
	styles/         Brand tokens, shared styles and scoped page styles
```

## Routes

`/`, `/construction`, `/interiors`, `/projects`, `/about`, `/blog`, and `/contact`
render dedicated pages.

`/blog/:slug` renders one of six complete journal articles. An unknown article
slug shows an Article Not Found view with a Back to Blog link. `/projects/:slug`
remains a placeholder and does not imply the existence of a project. Other
unknown URLs show a Page Not Found screen with a working Return Home link.

All routes share the same header, main landmark, and footer. The header includes
a mobile navigation disclosure, a skip link is available to keyboard users, and
page navigation updates the title, description, and heading focus.

Temporary page text and navigation labels live in
[src/data/pages.js](src/data/pages.js). Add dedicated page components as the real
pages are designed; the shared layout can remain unchanged.

## Journal content

[src/data/blog.js](src/data/blog.js) contains the journal copy and all six
articles: slugs, categories, estimated reading times, summaries, introductions,
sections and takeaway checklists. The journal filters All, Construction,
Interiors, and Planning & Budget; nonmatching featured content is hidden too.

[src/pages/BlogPage.jsx](src/pages/BlogPage.jsx) renders the index, and
[src/pages/BlogArticlePage.jsx](src/pages/BlogArticlePage.jsx) renders article
URLs, section navigation and the shared consultation CTA. Illustrations reuse
the existing local reference photographs, not completed company projects.
There is no newsletter form, CMS, new dependency or invented publication history.

Direct article URLs and refreshes work in Vite development and production
preview. Deployment still requires the SPA fallback described below; the
article routes do not change that hosting requirement.

## Business details

Edit [src/data/business.js](src/data/business.js) when verified information is
available. Company name, tagline, service line, production site URL, Bengaluru
service location, phone contacts, and street address are configured. The
marketing phone (`7019256060`) is the primary Call Us destination; `7975418080`
is listed as an additional phone contact. WhatsApp, email, and social URLs remain
unset until confirmed.

- Keep phone numbers and verified contact destinations in the business configuration.
- Online enquiry forms remain disabled until a real email or WhatsApp destination is configured; phone calls remain available.
- Consultation CTAs and Get In Touch open the existing dialog on Home, Construction, Interiors, Projects, About, Blog, article pages, and Contact.
- Placeholder pages retain the Get In Touch link to the Contact page.
- Request Consultation is disabled until a real email or WhatsApp destination is configured.
- Email/WhatsApp handoff prepares an enquiry for the visitor to review and send; it never claims a message was sent automatically.
- WhatsApp actions activate, and the homepage floating link appears, only when a number is provided.
- Contact and social links appear in the footer and contact page only when set.
- Additional service locations must have `enabled: true` to appear.

The consultation form validates required fields, phone, optional email, and
area. No backend, analytics, lead storage, or local-storage persistence has been
added. A live contact destination is required before accepting enquiries.

The Contact page uses [src/data/contact.js](src/data/contact.js) and
[src/components/contact/ContactEnquiryForm.jsx](src/components/contact/ContactEnquiryForm.jsx).
Its separate six-field enquiry requires name, email, service and message; phone
and project location are optional. The entire fieldset and submission button
remain disabled while both configured email and WhatsApp destinations are empty.
A submit-handler guard also prevents reading form data in that state. Once a
verified destination is configured, validation runs before preparing an email
or WhatsApp draft for the visitor to send. This is not a backend submission
service and there is no delivery confirmation or data persistence. Verified
contact details and enabled service locations come from the existing business
configuration; no address or map pin is assumed.

No fabricated projects, articles, testimonials, statistics, or partner claims
are included. All homepage imagery is explicitly labeled as reference or
design inspiration, never as Rise Homes work.

## Homepage content and imagery

[src/data/home.js](src/data/home.js) contains the services, values, six process
steps, design inspiration, quality principles, and FAQs. The homepage includes
financing-support copy without claiming any banking partnership or loan terms.

The shared reference imagery is stored locally; there are no runtime stock-image
hotlinks. Heroes retain eager loading and below-the-fold photographs retain lazy
loading. The seven page areas and all six articles use the `referencePhotos`
entries in [src/data/home.js](src/data/home.js), directly or through the journal
and gallery data. No separate CSS background-photo URLs or mobile-only photo
subjects were found in the October 17, 2026 audit; `srcSet` selects resolution
variants of the same subject.

### India-focused imagery audit

The inventory below was recorded before the complete-refresh image edits on
October 17, 2026. It preserves the pre-refresh source mapping and decisions.
The three completed interior replacements are documented separately below;
the original files in this inventory are not their current render sources.
Renaming, relabeling, or recropping an existing photograph does not count as
a new replacement.

| Reference | Pre-refresh local files and source | Every page/section usage | Initial decision |
| --- | --- | --- | --- |
| `hero` | [public/images/home/home-hero-indian-villa.webp](public/images/home/home-hero-indian-villa.webp), 1774 x 887; existing local asset with no external provenance record supplied | Home, Construction, Projects and About heroes; Projects "Contemporary Home Exterior" gallery/lightbox; Blog construction-stages card/article | Retain the existing Indian-style villa: compound wall, gate, balconies, stone cladding and planting fit the design direction. Usage rights still need a provenance record. |
| `house` | [public/images/construction/indian-villa-garden-reference-720.webp](public/images/construction/indian-villa-garden-reference-720.webp) and [public/images/construction/indian-villa-garden-reference-1200.webp](public/images/construction/indian-villa-garden-reference-1200.webp); existing crops of `hero`, not a separate photograph | Home Construction service; About Construction tile; Projects "Garden-Facing Home" gallery/lightbox; Blog featured article; "Before You Build a Home in Bengaluru" and "How to Plan a Home Construction Budget" cards/articles | Retain current exterior usage while preserving its proportions, but do not count the earlier crop as new imagery or another project. Same unresolved provenance as `hero`. |
| `living` | [public/images/interiors/living-room-reference-600.webp](public/images/interiors/living-room-reference-600.webp) and [public/images/interiors/living-room-reference-1080.webp](public/images/interiors/living-room-reference-1080.webp); [existing Unsplash source](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0) | Home Interiors service; Interiors hero; Projects "Light-Filled Living Space" gallery/lightbox; About Interiors tile; Blog "Planning Lighting for Every Room" card/article | Replace with a genuinely different contemporary Indian living room with appropriate furniture, lighting and ceiling design. Earlier neutral-style retention is superseded by the user's explicit request. |
| `details` | [public/images/interiors/interior-detail-reference-600.webp](public/images/interiors/interior-detail-reference-600.webp) and [public/images/interiors/interior-detail-reference-1080.webp](public/images/interiors/interior-detail-reference-1080.webp); [existing Unsplash source](https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea) | Home "Details that bring it together" inspiration; Interiors spaces; Projects "Timber Details & Open Living" gallery/lightbox; Blog hero; "Choosing Materials for a Practical, Long-Lasting Home" card/article | Replace the open-staircase, large-glass-wall scene with a genuinely different Indian residential interior featuring a suitable staircase, warm wood and practical furnishings. |
| `openPlan` | [public/images/projects/natural-light-reference-600.webp](public/images/projects/natural-light-reference-600.webp) and [public/images/projects/natural-light-reference-1080.webp](public/images/projects/natural-light-reference-1080.webp); [existing Unsplash source](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c) | Home "Room for life to unfold" inspiration; Interiors spaces; Projects "Connected Living & Kitchen" gallery/lightbox; Blog "A Room-by-Room Guide to Interior Planning" card/article; Contact hero | Replace the fireplace/deck setting with a genuinely different Indian living, dining and modular-kitchen combination. |

The source mapping is centralized in `referencePhotos`. The gallery uses the
same record in each thumbnail and lightbox. The Blog uses the same record in
listing cards and article readers. Responsive variants are resolutions of the
same photograph, not additional subjects. There are no photo files in
`src/assets`, separate CSS background-photo URLs, or mobile-only photo subjects.

#### Brand and inactive asset inventory

These assets are excluded from the imagery refresh and must remain unchanged:

| Files | Usage/status |
| --- | --- |
| [public/images/logo/Rise-Homes-Website-Horizontal-3000x1000.png](public/images/logo/Rise-Homes-Website-Horizontal-3000x1000.png) | Shared header at every viewport |
| [public/images/logo/Rise-Homes-White-Transparent-6000px.png](public/images/logo/Rise-Homes-White-Transparent-6000px.png) | Shared footer |
| [public/images/logo/Rise-Homes-Favicon-32x32.png](public/images/logo/Rise-Homes-Favicon-32x32.png), [public/images/logo/Rise-Homes-Favicon-192x192.png](public/images/logo/Rise-Homes-Favicon-192x192.png), [public/images/logo/Rise-Homes-Favicon-180x180.png](public/images/logo/Rise-Homes-Favicon-180x180.png) | Browser icons and Apple touch icon in `index.html` |
| [public/images/logo/Rise-Homes-Favicon-512x512.png](public/images/logo/Rise-Homes-Favicon-512x512.png), [public/images/logo/Rise-Homes-Icon-2000px.png](public/images/logo/Rise-Homes-Icon-2000px.png), [public/images/logo/Rise-Homes-Master-Transparent-6000px.png](public/images/logo/Rise-Homes-Master-Transparent-6000px.png), [public/images/logo/Rise-Homes-Social-Square-2000px.png](public/images/logo/Rise-Homes-Social-Square-2000px.png) | Preserved brand assets; not referenced by the current frontend |
| [public/images/home/home-hero-indian-villa.png](public/images/home/home-hero-indian-villa.png) | Existing PNG companion; not referenced by the frontend |
| [public/images/construction/contemporary-home-reference-720.webp](public/images/construction/contemporary-home-reference-720.webp), [public/images/construction/contemporary-home-reference-1200.webp](public/images/construction/contemporary-home-reference-1200.webp), [public/images/construction/contemporary-home-reference-1920.webp](public/images/construction/contemporary-home-reference-1920.webp) | Archived overseas-style exterior; no longer referenced by the frontend |

The six original interior WebP variants in the pre-refresh table are also
preserved as archives. No current `referencePhotos` entry points to them.

### Verified interior replacements

All three entries below use different source images from the pre-refresh
photographs and from each other. They are not renamed files, alternate crops
of the old photographs, or additional crops of the villa image. Their usage
locations are the corresponding rows in the inventory above; changing the
central record updates every thumbnail, hero, article image and lightbox use.

| Reference | New local variants | Creator and source page | Source context and usage rights |
| --- | --- | --- | --- |
| `living` | [public/images/interiors/indian-light-filled-living-reference-600.webp](public/images/interiors/indian-light-filled-living-reference-600.webp), [public/images/interiors/indian-light-filled-living-reference-1080.webp](public/images/interiors/indian-light-filled-living-reference-1080.webp) | iKshana Productions: [A cozy and modern living room decor](https://unsplash.com/photos/a-cozy-and-modern-living-room-decor-60OrX4hTS_g) | Source is tagged India and shows light upholstery, timber furniture, veined flooring and a layered, illuminated ceiling. Photo page offers "Download free" under the Unsplash License. No property address or RISE HOMES project location is claimed. |
| `details` | [public/images/interiors/indian-stair-living-reference-600.webp](public/images/interiors/indian-stair-living-reference-600.webp), [public/images/interiors/indian-stair-living-reference-1080.webp](public/images/interiors/indian-stair-living-reference-1080.webp) | Mustafa Fatemi: [Cozy and modern living room with unique decor](https://unsplash.com/photos/cozy-and-modern-living-room-with-unique-decor-F307jXWOjfw) | Source page identifies Rajnandgaon, Chhattisgarh, India. The photograph shows an integrated staircase, timber-framed opening and residential seating. Photo page offers "Download free" under the Unsplash License. |
| `openPlan` | [public/images/projects/indian-open-plan-render-reference-600.webp](public/images/projects/indian-open-plan-render-reference-600.webp), [public/images/projects/indian-open-plan-render-reference-1080.webp](public/images/projects/indian-open-plan-render-reference-1080.webp) | POOJAN THANEKAR: [A modern living room with open kitchen and divider](https://unsplash.com/photos/a-modern-living-room-with-open-kitchen-and-divider-CBstGVEgTlw) | Creator explicitly describes a 1BHK 3D interior render and tags it as an Indian interior. It is a design visualization, not a photographed home or completed project. Photo page offers "Download free" under the Unsplash License. The alt text also identifies it as a 3D render. |

The [Unsplash License](https://unsplash.com/license) was read through the normal
public browser page during this refresh. It permits free downloading, copying,
modification, distribution and commercial use without mandatory attribution.
It does not permit selling unmodified images or building a competing stock-image
service. The individual source pages were checked for their free-license and
download status; paid Unsplash+ candidates were excluded. These are copyright
license checks, not assertions of a partnership, endorsement, or ownership of
the pictured properties. Creator credits are retained here even though they
are not mandatory under that license.

The downloaded source images are:

- `living`: https://images.unsplash.com/photo-1746439302510-4e0894dfd359
- `details`: https://images.unsplash.com/photo-1742319096901-b8dc2e2734cc
- `openPlan`: https://images.unsplash.com/photo-1745429523615-2a82c60bfc02

All six exported files are WebP, at the existing 600 x 400 and 1080 x 720 sizes.
The photographic variants use quality 82; the render uses quality 85. File sizes
are 36,852 / 96,608 bytes (`living`), 53,366 / 152,320 bytes (`details`), and
42,886 / 95,500 bytes (`openPlan`): 477,532 bytes in total. Container ratios,
object positioning, loading behavior, filters, routes and page copy are unchanged.
The article reader's existing wide-screen 21:9 display crop is preserved.
All runtime image URLs point to local public assets, not the source CDN.

The normal Unsplash photo pages and public image CDN were accessible during
this refresh. The earlier organization-policy block on Pexels was not bypassed,
and the earlier Houzlook research lead was not used. No external portfolio was
copied outside a verified stock-image license.

The three flagged overseas-looking interiors are no longer active image
references. The retained villa and its earlier crop remain visually suitable,
but their original usage-rights/provenance record is still required before
public deployment, as noted below. They are not counted as new replacements.

#### Earlier-pass exterior crop

The earlier-pass exterior crop files are
[720 x 480](public/images/construction/indian-villa-garden-reference-720.webp) and
[1200 x 800](public/images/construction/indian-villa-garden-reference-1200.webp),
87,316 and 186,426 bytes respectively. They were encoded locally as WebP at
quality 0.86, without upscaling the source crop. They preserve the existing 3:2
image containers and object positioning. This is reuse of one existing design
reference, not a newly photographed house or an additional project. The original
[villa reference](public/images/home/home-hero-indian-villa.webp) is unchanged.
No external author/license record was supplied for that existing asset; retain
or obtain evidence of its usage rights before public deployment. This audit does
not establish ownership or a third-party license for it.

The three archived interior sources are:

- [Sunlit living room](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0)
- [Timber staircase and living space](https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea)
- [Connected living and kitchen space](https://images.unsplash.com/photo-1600607687939-ce8a6c25118c)

The old [exterior source](https://images.unsplash.com/photo-1600585154340-be6161a56a0c)
and its original local files are retained for reference but are no longer used
by the site. All active and archived stock-image files retain their applicable
source licenses. Design-reference labels never imply RISE HOMES client work.
The original company logos are not included in any image conversion or
optimization. Their supplied PNG bytes remain unchanged.

The supplied full master logo is about 7 MB and the white logo about 2.3 MB.
Those original file sizes remain a deployment performance consideration; no
smaller or altered logo artwork has been generated.

The process tabs support Arrow Left/Right, Home, and End. FAQs use native HTML
disclosures. The consultation dialog uses native modal focus containment,
Escape dismissal, and focus restoration. It initially focuses its heading and
keeps the Close control available while enlarged content scrolls. Motion
respects reduced-motion preferences; there are no auto-advancing carousels or
continuous animations.

## Official logo assets

The supplied PNGs are used directly, without cropping, recoloring, redrawing,
re-encoding, or generating replacement artwork. CSS only controls proportional
display size; the original files and their built-in clear space are preserved.

The `business.logos` configuration records the approved usage of all five files:

| Usage | Original asset |
| --- | --- |
| Desktop header | [public/images/logo/Rise-Homes-Website-Horizontal-3000x1000.png](public/images/logo/Rise-Homes-Website-Horizontal-3000x1000.png) |
| Full logo, including the compact header | [public/images/logo/Rise-Homes-Master-Transparent-6000px.png](public/images/logo/Rise-Homes-Master-Transparent-6000px.png) |
| Dark backgrounds, including the teal footer | [public/images/logo/Rise-Homes-White-Transparent-6000px.png](public/images/logo/Rise-Homes-White-Transparent-6000px.png) |
| Social/profile usage, reserved for future integration | [public/images/logo/Rise-Homes-Social-Square-2000px.png](public/images/logo/Rise-Homes-Social-Square-2000px.png) |
| Favicon and small icons | [public/images/logo/Rise-Homes-Icon-2000px.png](public/images/logo/Rise-Homes-Icon-2000px.png) |

The favicon is referenced directly in [index.html](index.html). Social profiles
remain hidden until their real URLs are supplied.

## Styles

The teal, gold, white, and supporting neutral variables are defined in
[src/styles/tokens.css](src/styles/tokens.css). Global resets, typography,
containers, buttons, and focus styles are in
[src/styles/global.css](src/styles/global.css). Shared layout rules are in
[src/styles/layout.css](src/styles/layout.css).

Homepage styling is scoped in [src/styles/home.css](src/styles/home.css), with
the reusable dialog and form styles in
[src/styles/consultation.css](src/styles/consultation.css).

DM Serif Display and Manrope are loaded through Google Fonts with local font
fallbacks. No font package is required; the fallback fonts are used if external
font requests are unavailable.

## Deployment later

No deployment is configured by this foundation task. BrowserRouter uses normal
URL paths, so a production host must route nested-page requests to the app entry
HTML. GitHub Pages needs a deliberate SPA fallback and repository-base-path
setup before deployment. Vite handles these routes during local development.

Continue following [.github/copilot-instructions.md](.github/copilot-instructions.md)
when implementing the real pages.
