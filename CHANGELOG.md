# Changelog

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
