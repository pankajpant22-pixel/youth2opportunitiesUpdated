# CLAUDE.md

Static marketing site for Youth2Opportunities (Y2O), no build step. `partials.js` injects the shared top bar, navbar (`NAV_ITEMS`) and footer into every page. `brand.css` holds the styles. `persist-ref.js` carries a `?ref=` referral param across internal links via sessionStorage. To add a page, create the HTML file, include the shared scripts, and add it to `NAV_ITEMS` if it belongs in the nav.
