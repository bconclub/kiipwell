# Changelog

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
