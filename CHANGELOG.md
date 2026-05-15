# Changelog

## 2026-05-15 · Sticky header off, Mission redesigned, pillar accent restored

- **Header**: changed from fixed to relative; no longer sticky on scroll. Hero no longer needs pt-20 to clear nav
- **Hero eyebrow**: shortened from "Supported Accommodation, North East England" to a simpler "For Young People 16 to 21" so it doesn't wrap on mobile
- **Hero stats card on mobile**: switched back to 2x2 grid (was 1-col, user requested two rows). Cards use vertical-stacked content (icon on top, value+label below) so labels don't break across multiple lines
- **Pillar cards**: brought back the teal accent line at the bottom of each card; slides in from left on hover (`scaleX 0 to 1`)
- **Spec trust badges**: were broken on mobile (horizontal flex with vertical divider didn't fit at 375px). Switched to 1-col grid on mobile, 2-col on sm, flex-row on lg. Divider hidden below lg
- **Wellbeing pillar image**: replaced the foggy forest photo with a "mindfulness" lettered card on a windowsill - much better fit for the Wellbeing and Health pillar
- **Mission section completely rebuilt**:
  - Background image (faded mentor/young-person photo) under deep navy gradient
  - Centered header: small star icon, "STATEMENT OF PURPOSE" label, short teal divider
  - Big serif italic quote with teal opening + closing quotation marks
  - Supporting paragraph
  - Script-font (Caveat) "Kiipwell Solutions" signature
  - "COMMITTED TO BETTER OUTCOMES" label
  - Bottom row: 5 trust pillar items (Local Authority Ready, Safeguarding First, Ofsted Prepared, Outcomes Focused, UASC Specialist Support) with teal icons and vertical dividers between
- **Fonts**: added Caveat (script) from Google Fonts; added `font-script` and `font-serif` to Tailwind theme

## 2026-05-15 · Hero stats mobile fix, Spec contextual icons + 2-line heading

- **Hero stats card mobile**: was breaking with text labels wrapping to 3 to 4 lines on 375px. Switched the grid from 2-col to 1-col on mobile (sm: 2-col, lg: 4-col). IconCircle dropped from md (56px) to sm (44px) for tighter rows. Labels now fit on a single line
- **Spec: tick marks replaced with contextual icons** in both inner cards
  - Designed for: Globe (UASC), UserCheck (care leavers), Heart (young people at risk)
  - What we provide: Clock (24/7), Users (key worker), FileText (ISP), ShieldCheck (welfare), Home (properties), Sparkle (life skills)
- **Spec heading**: was wrapping to 4 lines on wide viewports. Reduced font-size clamp from (2rem,3.5vw,3.25rem) to (1.875rem,3vw,2.875rem), bumped max-w from 640px to 760px, added a forced line break ("Safe, Structured Supported / Accommodation"). Now reliably 2 lines
- **Spec padding**: section py reduced from py-20 lg:py-28 to py-16 lg:py-24; header mb tightened; bottom strip mt reduced. Total section height down from ~1300px to ~1100px

## 2026-05-15 · Spec section rebuilt to match new reference

- **New heading + sub**: "Safe, Structured Supported Accommodation" with a tighter one-sentence lead-in below it
- **Trust badges in the header right rail**: two icon-and-text blocks separated by a thin teal divider — "Registered Tier 3 Placement" (shield) and "Designed for Local Authorities" (columns/library)
- **Background**: switched from `bg-offwhite` to a custom `#F2F7F6` soft teal-cream to match the reference
- **Property image card**: added a navy gradient at the bottom and a pin-icon "Properties Across / North East England" overlay
- **Designed for card**: redesigned as a list of three items, each with a teal-circled checkmark, a bold title, and a short description underneath (was a flat 3-row list)
- **What We Provide card**: expanded from 5 items with INCLUDED badges to 6 clean rows with teal-circled checkmarks. Dropped the visually noisy INCLUDED badges entirely
- **Bottom trust strip**: new soft-teal panel below the grid: white circle + shield icon, headline "Trusted by Local Authorities Across the North East", supporting copy, and an outline-style "Download Statement of Purpose" button on the right
- **Icons added**: `BuildingLibrary`, `Download`, `MapPin` (re-exported from Heroicons solid)

## 2026-05-15 · Filled icons, uniform section widths, repo cleanup

- **Icons**: switched the entire icon set from stroke outlines to Heroicons solid (filled). Matches the reference style (filled glyph inside a soft brand-tinted circle). IconCircle component upgraded with bigger sizes (sm 44px, md 56px, lg 64px) and teal-tinted background with navy-dark glyph
- **Section widths**: every section now uses the same container-x wrapper (max-w-1280, px-5/8/10 by breakpoint). Hero and About no longer full-bleed; photos now live inside the container with rounded-2xl. All section headings start at the same left x coordinate (40px on desktop)
- **Hero**: photo now inside container with rounded corners. Stats card position adjusted to still float (negative margin-top) but within the same container width
- **Section padding**: standardised to py-20 lg:py-28 across all sections (was inconsistent: py-32 in some, py-28 in others, py-24 in mission)
- **Card radii**: bumped from rounded-lg (14px) to rounded-2xl (16px) on the larger surfaces for a softer modern feel
- **Cleanup**: removed legacy files (`index.legacy.html`, `contact.legacy.html`, `index.old.html`, `kiipwell-homepage.html`) and the `/assets/` folder (logo + favicon now live in `/public/` only)

## 2026-05-15 · Migrated from vanilla HTML to Vite + React + Tailwind

- **Stack migration**: vanilla HTML/CSS rewritten as a React SPA on Vite + Tailwind. Same Vercel deploy, same visual output, much cleaner code architecture for upcoming internal pages
- **Architecture**: src/components/{layout,ui,sections}, src/pages, src/lib/icons.jsx. Components are reusable across the 5 pages we'll be building (home, about, services, safeguarding, contact)
- **Tailwind theme**: navy / teal / offwhite tokens, custom shadows (card, cardHover, float), Inter sans, fadeUp animation. Drops the 100+ inline styles that were everywhere in the vanilla version
- **Logo**: 1.5x bigger in the header (60px height, was 40px). Nav bar height grew from 68px to 80px to accommodate
- **Nav links**: About / Services / Safeguarding are now rendered as greyed-out, non-clickable spans (cursor-not-allowed, aria-disabled, title="Coming soon"). Home and Contact remain live links. Solves the user's request that clicking About should not scroll to a section
- **Hero**: rebuilt with no white-fog effects. Clean white background (no cream gradient), no radial glow blob, no `::before` overlay on the photo's left edge, no "Empowering young people" poster overlay. Just the photo, clean. Eyebrow pill, big heading, teal divider, description, two CTAs (navy primary + teal-outline secondary). Stats card still floats below
- **Routing**: React Router v6, catch-all route serves Home for now so the dev server doesn't 404 on /about /services /safeguarding /contact (all renders Home)
- **Vercel config**: switched from static-only to Vite build, `outputDirectory: dist`, SPA rewrite all routes to /
- **Legacy files**: index.html and contact.html preserved as index.legacy.html / contact.legacy.html in the repo root for reference; will be deleted once internal pages are ported

## 2026-05-15 · Multi-page nav, logo image, clean Approach + Safeguarding, no em dashes

- **Em dashes**: stripped every em dash (and en dash) from index.html and contact.html; user preference saved to project memory as a hard, permanent rule
- **Nav**: replaced "KIIPWELL SOLUTIONS" wordmark + "REGISTERED PROVIDER" sub-label with the real horizontal Logo.PNG asset; sub-label and divider removed entirely
- **Nav links**: changed from in-page anchors (`#about`, `#services`, `#safeguarding`) to separate page URLs (`/about`, `/services`, `/safeguarding`, `/contact`) so the site is now structured as multi-page; other pages not yet built per instruction
- **Nav CTA**: replaced solid teal-gradient "Make a Referral" pill with subtle text-style link (transparent background, teal text, arrow with hover translate); softer in the visual hierarchy
- **Scroll-spy script**: removed (no longer relevant for multi-page architecture)
- **Favicon**: added `<link rel="icon">` and `<link rel="apple-touch-icon">` pointing to `/assets/kiipwell-icon.png` (renamed from `Kiipwell icon.PNG` for URL safety)
- **Hero**: removed the custom SVG brand mark (house + person); replaced with a small teal pill eyebrow tag "SUPPORTED ACCOMMODATION, NORTH EAST ENGLAND"; logo lives only in nav now
- **Approach section**: scrapped the three cinematic full-image panels with overlays; rebuilt as a clean 3-column card grid on off-white background, each card white with subtle border, number label, circular teal icon, title, body; no background images, no gradients, no overlays
- **Safeguarding section**: scrapped the image-left split with white gradient bleeding into content; rebuilt as a centered section with header on top and 4 policy cards in a 2x2 grid on white background; no image, no gradient border, clean modern cards
- **Mobile**: approach + safeguarding cards stack to single column; logo height 32px on mobile

## 2026-05-15 · Hero redesign split layout + Vercel deploy fix

- **Vercel fix**: added `vercel.json` with `outputDirectory: "."` the live `kiipwell.vercel.app` was returning 404 because Vercel's "Other" preset defaults to `public/` as the output dir; with no `index.html` in `public/`, the homepage 404'd
- **Hero split layout**: completely rebuilt to match the reference design
  - Left column (5fr): inline brand mark (custom SVG: teal house + navy person figure) + Kiipwell wordmark with "SOLUTIONS" subtext + heading + teal accent bar + description + two CTAs
  - Right column (6fr): full-bleed photo (`about.jpg` support worker in conversation) + decorative "Empowering young people. Building independence." poster overlay (dark teal gradient, white text, top-right of photo)
  - Floating stats card overlapping the hero bottom: 4 stats with circular teal icon badges + value + label, dropped-shadow card with negative margin-top
- **Buttons**: added `.btn-navy` (solid navy primary for the hero) and `.btn-outline-teal` (teal-outline secondary for "View Services" with heart icon) keeps site-wide `btn-primary` teal gradient intact for other CTAs
- **Hero colours**: warm cream gradient background (`#FAFBF6` → `#F2F5EE`); navy text on light surface instead of white-on-photo overlay; teal accent bar; subtle teal radial glow upper-left
- **Removed**: standalone Impact strip section between About and Services those 4 stats are now in the hero floating card, no duplication
- **Mobile responsive**: hero stacks to single column at ≤1023px; photo height 420px (tablet) / 320px (mobile); stats card 2-col grid; poster scales down; entrance animations stagger on brand/h1/divider/sub/ctas

## 2026-05-15 · Mobile responsiveness overhaul

- **Nav**: hide "REGISTERED PROVIDER" sub-label and divider at ≤767px to prevent logo overflow at 375px
- **Hero h1**: reduce font-size 2.25rem → 1.875rem at mobile; add `overflow-wrap: break-word` so "Supported Accommodation" never overflows
- **Hero body**: reduce padding 5rem/4rem → 3rem/3rem on mobile content no longer floats with excessive whitespace above/below
- **Spec section**: fix class-name bug `@media(max-width:1023px)` was targeting `.spec-grid` but HTML uses `.spec-cols`; 3-col grid now correctly collapses at tablet
- **Impact strip**: fix `border-right` on 2nd item (was sticking out at grid edge in 2-col layout); add row separator between first and second row; reduce section padding to 3rem at mobile
- **Section padding**: reduce Services, Spec, Core Support from 8rem → 4.5rem; Approach header 7rem → 4rem; Mission 7rem → 4rem all overriding inline styles via aria-attribute selectors
- **Approach panels**: reduce `min-height` 380px → 260px at mobile; 3 stacked panels was 1140px of content alone
- **Footer**: collapse 4-col → 2-col → single-column at mobile (was 2-col which crammed content and email into half-width)
- **Footer legal links**: add `flex-wrap: wrap` so "Privacy Notice / Safeguarding Policy / Accessibility Statement" wraps at narrow widths
- User-facing: no horizontal overflow, correct grid layouts, proportionate spacing across all sections at 375px

## 2026-05-14 · Services, pillar cards, hero glow + entrance animation

- **Service cards**: replaced `gap:1px` divider grid with `gap:1.5rem` floating cards; padding 2rem → 2.5rem/2.25rem; stronger hover lift + glow shadow; icon gets border + hover tint; title 1.0625rem
- **Pillar cards**: image height 240px → 260px; cubic-bezier transitions; teal bottom accent line slides in on hover; flex column for consistent height; icon border added
- **Hero glow layer**: `hero__glow` div added teal radial blob upper-left + deep navy radial lower-left gives hero depth and warmth beyond the photo overlay
- **Hero entrance animation**: `heroFadeUp` keyframe eyebrow, h1, subtext, CTAs each stagger in 120ms apart on page load
- **Lenis removed**: CDN caused white-screen render conflict; native CSS `scroll-behavior: smooth` handles smooth scrolling without JS overhead

## 2026-05-14 · Parallax on About + Safeguarding split images

- **Parallax scroll effect**: added lightweight JS scroll listener `[data-parallax]` images translate ±40px on `translateY` as user scrolls, creating a depth effect inside their clipped containers
- **Image overscan**: `.split__img img` set to `inset: -15%; height: 130%` so parallax movement never exposes white edges
- **Reduced-motion safe**: effect is skipped entirely if `prefers-reduced-motion: reduce` is set
- Applied to: About section (`about.jpg`) and Safeguarding section (`team.jpg`)

## 2026-05-14 · Remove duplicate stats bar from hero

- **Hero stats strip removed**: deleted the 16 to 21 / 24/7 / 100% / Tier 3 glass bar from the bottom of the hero identical stats already exist in the Impact section below
- User-facing: hero flows cleanly into About with no repeated metrics

## 2026-05-14 · Remove About structured-list table

- **Structured data table removed**: deleted the 5-row "Organisation type / Client group / Geographic area / Established / Framework" table from the About section looked institutional and redundant
- User-facing: About section now reads as clean prose only, no data table below the paragraphs

## 2026-05-14 · Hero overlay contrast fix

- **Hero overlay lightened**: left-stop reduced from 0.92 → 0.82, mid-stop 0.80 → 0.60, right stops 0.35/0.15 → 0.20/0.05 photo now shows through with warmth and depth rather than flat navy wash
- User-facing: hero background image (young person reading, warm orange sofa) is visibly rich; text still reads clearly on the left

## 2026-05-14 · Hero cleanup + pillar card image fix

- **Hero credential bar removed**: eliminated the 4-pill credential strip (Registered Provider, North East England, Safeguarding Compliant, Est. 2024) from the hero it was misaligned and redundant since "Registered Provider" already appears in the nav
- **Hero eyebrow pill**: `.hero__eyebrow` converted from line-style flex layout to matching pill badge (`inline-flex`, teal tint background + border, `border-radius: 9999px`) consistent with all other section eyebrows
- **Pillar card white overlay removed**: deleted `.pillar-card__img::after` gradient pseudo-element (white fade at bottom of card photos) images now cut cleanly into the card body with no wash-out
- User-facing: hero opens with clean pill eyebrow directly under nav; pillar card photos display at full contrast with no white overlay

## 2026-05-14 · Premium layout elevation spacing, type scale, gradient textures

- **Typography scale**: all section h2 headings enlarged to `clamp(2 to 3.75rem)` commands the page like the reference design
- **Section padding**: major sections increased from 6rem → 8rem; approach header 4rem → 7rem
- **About split**: changed 1fr/1fr → 55fr/45fr; content padding 5rem/4rem → 6rem/5rem; min-height 640px → 700px
- **Safeguarding split**: changed 5fr/7fr → 45fr/55fr; content padding increased; min-height 600px → 680px
- **Impact strip**: moved to dark navy background (matching section colours); numbers enlarged to `clamp(2.75rem,5vw,4rem)`; subtle teal radial glow texture added
- **Gradient textures**: radial gradient blobs added to Services, Spec, Core Support, and Approach sections gives depth without changing brand colours
- **Pillar grid gap**: 1.5rem → 2rem
- **Mission quote**: headline enlarged to `clamp(1.875rem,3.5vw,3rem)`
- User-facing: every section now breathes; typography is bold and confident; the page feels premium

## 2026-05-14 · Modern design overhaul inspired by NewME reference

- **Border radius**: `--radius` increased from 4px → 14px across all components; pill badges at `9999px`
- **Section eyebrows**: all "01 Section" labels now render as teal pill badges (inline-flex, teal bg tint + border); white variant for dark sections
- **Buttons**: removed `text-transform: uppercase`; all CTAs now pill-shaped (`border-radius: 9999px`); primary button gets teal gradient + glow shadow
- **Credential badges**: pill-shaped, glass-blur backdrop
- **Pillar cards**: replaced `1px solid border` with `box-shadow`; photo height 200px → 240px; teal circle icon containers; teal dot bullets replacing left-border list items
- **Service cards**: circular icon containers; hover lift; extra padding
- **Policy items** (safeguarding): replaced flat list with icon-circle cards on hover-tinted off-white background
- **Structured list** (about): replaced table-style rows with teal dot rows on off-white pill cards
- **Sharp cards** (spec): border replaced with shadow
- **Hero stats bar**: floated inside glass card with 14px radius instead of full-width strip
- **Impact strip**: new section between About and Services with large bold stat numbers (16-21, 24/7, 100%, Tier 3) inspired by the NewME metrics row
- **CTA strip**: changed from flat navy to teal → dark gradient; white "Make a Referral" button with shadow; outline secondary button
- **Nav links**: pill hover state; slightly larger base font
- **CSS variables**: added `--shadow-sm`, `--shadow-md`, `--shadow-card`, `--shadow-hover`, `--teal-light`, `--radius-sm`, `--radius-full`; `--border` lightened; `--off-white` adjusted
- User-facing: entire homepage now looks modern, clean, and 2024-quality not institutional

## 2026-05-14 · Real Unsplash photos + split-grid fix

- **Images**: replaced all placeholder/picsum URLs and local Hero.webp/mentors.webp with 8 contextually relevant Unsplash photos downloaded to `public/unsplash/`
  - `hero.jpg` young person reading at home (Anita Jankovic)
  - `about.jpg` support worker meeting (Rémi Walle)
  - `terrace.jpg` UK residential terrace exterior (Viktor Forgacs)
  - `education.jpg` young people studying together (Brooke Cagle)
  - `wellbeing.jpg` calm mental health / wellbeing (Priscilla Du Preez)
  - `lifeskills.jpg` person cooking / independent living (Douglas Fehr)
  - `community.jpg` diverse community support (Rajiv Perera)
  - `team.jpg` professional team meeting (Vitaly Gariev)
- **Credits**: `public/unsplash/_credits.json` full photographer attribution for all 8 photos
- **Split-grid fix**: added `width: 100%` to `.split` class prevents grid collapse to 265px in constrained viewports
- **Zero picsum remaining**: all 12 image slots now serve real, contextually appropriate photography
- User-facing: every image across the homepage now shows relevant, high-quality photography

## 2026-05-14 · Full visual redesign proper image-first layout

- **Hero**: full 100vh with `Hero.webp` as genuine full-bleed background; gradient overlay weighted left; large display H1; credential bar; bottom stats strip (glass-blur panel)
- **About (01)**: true edge-to-edge split `mentors.webp` fills entire left half with no container constraints; structured list on right
- **Services (02)**: replaced text list with 3×2 service card grid on dark navy; each card has icon container, title, description; UASC card accent-highlighted in teal
- **Spec (03)**: 3-column layout property placeholder image filling left column, "Designed For" and "What We Provide" cards beside it
- **Core Support (04)**: 4 pillar cards each with 200px top photo, hover zoom, lift-on-hover shadow; photo fades to white at bottom
- **Approach (05)**: 3 full-height cinematic panels (560px min) each panel has a background image with deep gradient overlay; middle panel uses teal gradient for contrast; section header in dark navy above
- **Mission**: genuine full-bleed background image with 87% navy overlay; centered quote layout
- **Safeguarding (06)**: true image-left split (`sg-split`) image fills left 5/12, policy items on right; no container padding on image side
- All images: 12 total (Hero.webp + mentors.webp at native 1536px; 10 picsum seeds for pillars, approach panels, property, mission, safeguarding)
- CSS: complete rewrite with dedicated component classes (`hero`, `split`, `service-card`, `pillar-card`, `approach-panel`, `mission`, `sg-split`)
- User-facing: every section now has meaningful imagery, not decorative strips

## 2026-05-14 · Visual overhaul images throughout homepage

- Hero: replaced data panel with `Hero.webp` as a full-height split image; floating stats bar (16-21 / 24/7 / 100% DBS / Tier 3) overlaid at bottom with glass-blur effect
- About (01): restructured to 1fr+1fr grid; `mentors.webp` fills right column with "Our Team" badge overlay
- Services (02): added 320px full-bleed property image banner with navy-to-dark gradient at top of section; secondary inline property placeholder image alongside text
- Specification (03): added 260px wide residential terrace image strip with fade-to-white gradient flowing into cards below
- Core Support (04): added 280px support/people image banner fading to white above the 4-pillar card grid
- Approach (05): full section background image with 93% off-white wash (photo visible as texture through content)
- Mission: full-bleed background image with deep navy 88% overlay darkened cinematic feel
- Safeguarding (06): 240px banner image with white fade-out bottom + left navy tint
- All 7 placeholder images use `picsum.photos` with deterministic seeds (`kiipwell-property`, `kiipwell-house2`, `kiipwell-terrace`, `kiipwell-support`, `kiipwell-approach`, `kiipwell-mission`, `kiipwell-safeguard`) swap seeds for real photos when ready
- User-facing: page now has 9 images across 9 sections, both real assets (Hero.webp, mentors.webp) loading at full 1536px resolution

## 2026-05-13 · Institutional redesign + contact/referral page

- Complete homepage pivot to government/public-sector institutional aesthetic Inter exclusively, CSS custom properties, no Tailwind CDN
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
- Removed all em dashes (6 occurrences) replaced with `|`, `,`, `:`, or `.` as appropriate
- Fixed select dropdown spacing: `Referral:Young Person` → `Referral: Young Person`
- Fixed footer copyright year: 2025 → 2026
- Added nav scroll-spy: active link updates as user scrolls through sections
- Added form submit handler: `preventDefault` + teal toast notification (4s) on submission
- Stitch MCP connected at user scope (`stitch.googleapis.com/mcp`)

User-facing: complete homepage live at localhost:3000 with real copy, brand images, working nav highlighting, and referral form feedback toast.
