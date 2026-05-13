# Changelog

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
