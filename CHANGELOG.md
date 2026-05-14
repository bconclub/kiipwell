# Changelog

## 2026-05-14 · Remove duplicate stats bar from hero

- **Hero stats strip removed**: deleted the 16–21 / 24/7 / 100% / Tier 3 glass bar from the bottom of the hero — identical stats already exist in the Impact section below
- User-facing: hero flows cleanly into About with no repeated metrics

## 2026-05-14 · Remove About structured-list table

- **Structured data table removed**: deleted the 5-row "Organisation type / Client group / Geographic area / Established / Framework" table from the About section — looked institutional and redundant
- User-facing: About section now reads as clean prose only, no data table below the paragraphs

## 2026-05-14 · Hero overlay contrast fix

- **Hero overlay lightened**: left-stop reduced from 0.92 → 0.82, mid-stop 0.80 → 0.60, right stops 0.35/0.15 → 0.20/0.05 — photo now shows through with warmth and depth rather than flat navy wash
- User-facing: hero background image (young person reading, warm orange sofa) is visibly rich; text still reads clearly on the left

## 2026-05-14 · Hero cleanup + pillar card image fix

- **Hero credential bar removed**: eliminated the 4-pill credential strip (Registered Provider, North East England, Safeguarding Compliant, Est. 2024) from the hero — it was misaligned and redundant since "Registered Provider" already appears in the nav
- **Hero eyebrow pill**: `.hero__eyebrow` converted from line-style flex layout to matching pill badge (`inline-flex`, teal tint background + border, `border-radius: 9999px`) — consistent with all other section eyebrows
- **Pillar card white overlay removed**: deleted `.pillar-card__img::after` gradient pseudo-element (white fade at bottom of card photos) — images now cut cleanly into the card body with no wash-out
- User-facing: hero opens with clean pill eyebrow directly under nav; pillar card photos display at full contrast with no white overlay

## 2026-05-14 · Premium layout elevation — spacing, type scale, gradient textures

- **Typography scale**: all section h2 headings enlarged to `clamp(2–3.75rem)` — commands the page like the reference design
- **Section padding**: major sections increased from 6rem → 8rem; approach header 4rem → 7rem
- **About split**: changed 1fr/1fr → 55fr/45fr; content padding 5rem/4rem → 6rem/5rem; min-height 640px → 700px
- **Safeguarding split**: changed 5fr/7fr → 45fr/55fr; content padding increased; min-height 600px → 680px
- **Impact strip**: moved to dark navy background (matching section colours); numbers enlarged to `clamp(2.75rem,5vw,4rem)`; subtle teal radial glow texture added
- **Gradient textures**: radial gradient blobs added to Services, Spec, Core Support, and Approach sections — gives depth without changing brand colours
- **Pillar grid gap**: 1.5rem → 2rem
- **Mission quote**: headline enlarged to `clamp(1.875rem,3.5vw,3rem)`
- User-facing: every section now breathes; typography is bold and confident; the page feels premium

## 2026-05-14 · Modern design overhaul — inspired by NewME reference

- **Border radius**: `--radius` increased from 4px → 14px across all components; pill badges at `9999px`
- **Section eyebrows**: all "01 — Section" labels now render as teal pill badges (inline-flex, teal bg tint + border); white variant for dark sections
- **Buttons**: removed `text-transform: uppercase`; all CTAs now pill-shaped (`border-radius: 9999px`); primary button gets teal gradient + glow shadow
- **Credential badges**: pill-shaped, glass-blur backdrop
- **Pillar cards**: replaced `1px solid border` with `box-shadow`; photo height 200px → 240px; teal circle icon containers; teal dot bullets replacing left-border list items
- **Service cards**: circular icon containers; hover lift; extra padding
- **Policy items** (safeguarding): replaced flat list with icon-circle cards on hover-tinted off-white background
- **Structured list** (about): replaced table-style rows with teal dot rows on off-white pill cards
- **Sharp cards** (spec): border replaced with shadow
- **Hero stats bar**: floated inside glass card with 14px radius instead of full-width strip
- **Impact strip**: new section between About and Services with large bold stat numbers (16-21, 24/7, 100%, Tier 3) — inspired by the NewME metrics row
- **CTA strip**: changed from flat navy to teal → dark gradient; white "Make a Referral" button with shadow; outline secondary button
- **Nav links**: pill hover state; slightly larger base font
- **CSS variables**: added `--shadow-sm`, `--shadow-md`, `--shadow-card`, `--shadow-hover`, `--teal-light`, `--radius-sm`, `--radius-full`; `--border` lightened; `--off-white` adjusted
- User-facing: entire homepage now looks modern, clean, and 2024-quality — not institutional

## 2026-05-14 · Real Unsplash photos + split-grid fix

- **Images**: replaced all placeholder/picsum URLs and local Hero.webp/mentors.webp with 8 contextually relevant Unsplash photos downloaded to `public/unsplash/`
  - `hero.jpg` — young person reading at home (Anita Jankovic)
  - `about.jpg` — support worker meeting (Rémi Walle)
  - `terrace.jpg` — UK residential terrace exterior (Viktor Forgacs)
  - `education.jpg` — young people studying together (Brooke Cagle)
  - `wellbeing.jpg` — calm mental health / wellbeing (Priscilla Du Preez)
  - `lifeskills.jpg` — person cooking / independent living (Douglas Fehr)
  - `community.jpg` — diverse community support (Rajiv Perera)
  - `team.jpg` — professional team meeting (Vitaly Gariev)
- **Credits**: `public/unsplash/_credits.json` — full photographer attribution for all 8 photos
- **Split-grid fix**: added `width: 100%` to `.split` class — prevents grid collapse to 265px in constrained viewports
- **Zero picsum remaining**: all 12 image slots now serve real, contextually appropriate photography
- User-facing: every image across the homepage now shows relevant, high-quality photography

## 2026-05-14 · Full visual redesign — proper image-first layout

- **Hero**: full 100vh with `Hero.webp` as genuine full-bleed background; gradient overlay weighted left; large display H1; credential bar; bottom stats strip (glass-blur panel)
- **About (01)**: true edge-to-edge split — `mentors.webp` fills entire left half with no container constraints; structured list on right
- **Services (02)**: replaced text list with 3×2 service card grid on dark navy; each card has icon container, title, description; UASC card accent-highlighted in teal
- **Spec (03)**: 3-column layout — property placeholder image filling left column, "Designed For" and "What We Provide" cards beside it
- **Core Support (04)**: 4 pillar cards each with 200px top photo, hover zoom, lift-on-hover shadow; photo fades to white at bottom
- **Approach (05)**: 3 full-height cinematic panels (560px min) — each panel has a background image with deep gradient overlay; middle panel uses teal gradient for contrast; section header in dark navy above
- **Mission**: genuine full-bleed background image with 87% navy overlay; centered quote layout
- **Safeguarding (06)**: true image-left split (`sg-split`) — image fills left 5/12, policy items on right; no container padding on image side
- All images: 12 total (Hero.webp + mentors.webp at native 1536px; 10 picsum seeds for pillars, approach panels, property, mission, safeguarding)
- CSS: complete rewrite with dedicated component classes (`hero`, `split`, `service-card`, `pillar-card`, `approach-panel`, `mission`, `sg-split`)
- User-facing: every section now has meaningful imagery, not decorative strips

## 2026-05-14 · Visual overhaul — images throughout homepage

- Hero: replaced data panel with `Hero.webp` as a full-height split image; floating stats bar (16-21 / 24/7 / 100% DBS / Tier 3) overlaid at bottom with glass-blur effect
- About (01): restructured to 1fr+1fr grid; `mentors.webp` fills right column with "Our Team" badge overlay
- Services (02): added 320px full-bleed property image banner with navy-to-dark gradient at top of section; secondary inline property placeholder image alongside text
- Specification (03): added 260px wide residential terrace image strip with fade-to-white gradient flowing into cards below
- Core Support (04): added 280px support/people image banner fading to white above the 4-pillar card grid
- Approach (05): full section background image with 93% off-white wash (photo visible as texture through content)
- Mission: full-bleed background image with deep navy 88% overlay — darkened cinematic feel
- Safeguarding (06): 240px banner image with white fade-out bottom + left navy tint
- All 7 placeholder images use `picsum.photos` with deterministic seeds (`kiipwell-property`, `kiipwell-house2`, `kiipwell-terrace`, `kiipwell-support`, `kiipwell-approach`, `kiipwell-mission`, `kiipwell-safeguard`) — swap seeds for real photos when ready
- User-facing: page now has 9 images across 9 sections, both real assets (Hero.webp, mentors.webp) loading at full 1536px resolution

## 2026-05-13 · Institutional redesign + contact/referral page

- Complete homepage pivot to government/public-sector institutional aesthetic — Inter exclusively, CSS custom properties, no Tailwind CDN
- Navy `#0a1f4d` / `#1B3A8C` dominant; teal `#00B89F` accent-only; 4px radius; 1px borders; zero box-shadow
- 6 numbered sections (01 Organisation, 02 Services, 03 Specification, 04 Support Areas, 05 Methodology, 06 Safeguarding)
- Data-led hero: credential bar, service spec panel with stat grid, dark navy background
- Gov.uk-style structured lists, `sharp-card`, `data-cell`, `policy-item` CSS components
- Lucide icons via `unpkg.com/lucide@latest`
- All contact/referral CTAs moved off homepage to new `contact.html`
- Created `contact.html`: full institutional referral page with 4-section structured form (Referrer Details, Young Person Details, Needs Assessment, Placement Details) + Declaration
- Contact sidebar: 4 contact info cards, "Who Can Refer" list, service spec download link
- UASC conditional panel revealed on radio selection; form reset + toast on submit
- Page header with navy dark background, credential panel with age/region data cells
- Nav active state correctly set to "Contact" when on contact.html
- User-facing: homepage live at localhost:3000; referral form at localhost:3000/contact.html

## 2026-05-13 · Kiipwell homepage: design system rebuild, images, bug fixes

- Replaced old custom-CSS homepage (Syne/Inter, dark navy split hero) with Stitch-sourced Civic Excellence design system (Playfair Display + DM Sans, Tailwind CDN)
- Applied full DESIGN.md spec: primary `#1B3A8C`, secondary `#00B89F`, tonal surface layering, rounded-xl cards, 1px outline-variant borders
- Populated all real content: Who We Are, What We Offer, Our Service, Core Support (4 pillars), Our Approach (3 steps), Mission, Safeguarding (4 cards), Contact + referral form, Footer
- Added `Hero.webp`: split-panel hero layout (text left, young person at home right) with floating "Safe & Registered" trust badge
- Added `mentors.webp`: 3-column "Who We Are" layout (team photo / copy / What We Offer card)
- Mobile hero fallback: compact image strip shown below CTA on small screens
- Removed all em dashes (6 occurrences) — replaced with `|`, `,`, `:`, or `.` as appropriate
- Fixed select dropdown spacing: `Referral:Young Person` → `Referral: Young Person`
- Fixed footer copyright year: 2025 → 2026
- Added nav scroll-spy: active link updates as user scrolls through sections
- Added form submit handler: `preventDefault` + teal toast notification (4s) on submission
- Stitch MCP connected at user scope (`stitch.googleapis.com/mcp`)

User-facing: complete homepage live at localhost:3000 with real copy, brand images, working nav highlighting, and referral form feedback toast.
