# Y2O Website — Redesigned Source Code

## Files

```
index.html   — Full page with all revised copy (single page, 8 sections)
styles.css   — Complete stylesheet (CSS variables, responsive, animations)
main.js      — Nav scroll effect, mobile menu, scroll reveal animations
```

## Quick Start

Open `index.html` in any browser. No build tools needed.
These files are framework-agnostic — adapt to your existing React/Next.js setup as needed.

## TODO Before Launch

1. **Replace survey links** — Search for `#survey` and `[SURVEY_URL]` comments in index.html.
   Replace with actual Google Forms / Typeform / custom survey URL.

2. **Connect waitlist form** — The waitlist form in index.html is static HTML.
   Wire it up to your form handler (Formspree, Google Forms embed, or backend API).

3. **Replace founder photos** — Search for `founder-img-placeholder` in HTML.
   Replace `<div>` placeholders with actual `<img>` tags.

4. **Replace hero profile card** — The mock profile card in the hero uses placeholder data.
   Keep it as visual illustration or replace with a designed image/mockup.

5. **Add Y2O logo** — The text logo "Y2O" is in the nav and footer.
   Replace with your actual SVG/PNG logo if preferred.

6. **Google Search Console** — Submit https://www.youth2opportunities.ca to
   Google Search Console for indexing. This is critical — the site currently
   does not appear in Google search results.

7. **Analytics** — Add GA4 or Plausible tracking. Set up a conversion event
   for survey CTA clicks.

## Fonts

Uses Google Fonts (loaded via CDN in HTML head):
- **DM Sans** — body text, navigation, buttons
- **Fraunces** — headlines, display text, stat numbers

No installation needed. If you want to self-host, download from Google Fonts
and update the `@font-face` declarations in styles.css.

## Color Palette

All colours use CSS custom properties in `:root` of styles.css:

| Variable       | Value       | Usage                  |
|----------------|-------------|------------------------|
| --navy         | #0B1D3A     | Primary dark / headings |
| --teal         | #00A89D     | Brand accent / CTAs     |
| --coral        | #FF6B4A     | Secondary accent        |
| --cream        | #FDF8F3     | Page background         |
| --text-body    | #3D3D56     | Body copy               |

## Responsive Breakpoints

- **960px** — Cards stack to single column, hero goes single column
- **768px** — Mobile nav (hamburger), reduced spacing
- **480px** — Full-width buttons, tighter padding

## Key Design Decisions

- **Survey is the primary CTA** throughout (nav, hero, bottom section).
  Waitlist is secondary/fallback.
- **Parents & Families** added as a distinct audience card.
- **Institutions/Employers** marked as "Coming 2027" to avoid overpromising.
- **Stats section** — dollar signs removed from percentages, "21%" replaced
  with "1 in 5" for stronger framing.
- **Feature names removed** — No references to unbuilt product features
  (SkillMap, ImpactTracker, Launchpad, AI suggestions). Copy focuses on
  outcomes, not features.
- **Story section** trimmed — redundant paragraphs and typos fixed.
  Core emotional narrative preserved.

## Adapting to React / Next.js

If the existing site uses React:
1. Copy the HTML structure into your JSX components
2. Move styles.css content into your CSS modules or global stylesheet
3. The scroll reveal logic in main.js can be replaced with Framer Motion
   or react-intersection-observer
4. Convert `class` → `className`, `for` → `htmlFor`, etc.
