/* ==========================================================================
   Y2O — partials.js
   Shared top-bar + navbar + footer injection
   ========================================================================== */

(function () {
  "use strict";

  var NAV_ITEMS = [
    { href: "index.html",        label: "Home" },
    { href: "students.html",     label: "Students" },
    { href: "parents.html",      label: "Parents" },
    { href: "partners.html",     label: "Partners" },
    { href: "institutions.html", label: "Institutions" },
    { href: "about.html",        label: "About" }
  ];

  function currentPage() {
    var path = window.location.pathname.split("/").pop() || "index.html";
    return path.toLowerCase();
  }

  function wordmark() {
    return '<a href="index.html" class="wordmark" aria-label="Y2O home">' +
             '<img src="assets/y2o-logo-full-colour.png" alt="Y2O" />' +
           '</a>';
  }

  function buildNavbar() {
    var host = document.querySelector("[data-navbar]");
    if (!host) return;

    var here = currentPage();

    var links = NAV_ITEMS.map(function (item) {
      var active = (item.href.toLowerCase() === here) ? " active" : "";
      return '<a href="' + item.href + '" class="' + active.trim() + '">' + item.label + '</a>';
    }).join("");

    var cta = '<a href="contact.html" class="nav-cta">Join the waitlist</a>';

    var hamburger =
      '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">' +
          '<line x1="4" y1="7"  x2="20" y2="7"></line>' +
          '<line x1="4" y1="12" x2="20" y2="12"></line>' +
          '<line x1="4" y1="17" x2="20" y2="17"></line>' +
        '</svg>' +
      '</button>';

    var topbar =
      '<div class="topbar">' +
        '<div class="container topbar-inner">' +
          '<span class="topbar-dot" aria-hidden="true"></span>' +
          '<span class="topbar-text">Built in Canada <span class="topbar-sep">·</span> Launching first across the GTA</span>' +
        '</div>' +
      '</div>';

    host.innerHTML =
      topbar +
      '<nav class="nav" role="navigation" aria-label="Primary">' +
        '<div class="container nav-inner">' +
          wordmark() +
          '<div class="nav-links">' + links + cta + '</div>' +
          hamburger +
        '</div>' +
      '</nav>';

    // Mobile toggle
    var navEl  = host.querySelector(".nav");
    var toggle = host.querySelector(".nav-toggle");
    if (navEl && toggle) {
      toggle.addEventListener("click", function () {
        var open = navEl.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  }

  function buildFooter() {
    var host = document.querySelector("[data-footer]");
    if (!host) return;

    var year = new Date().getFullYear();

    var html =
    '<footer class="footer" role="contentinfo">' +
      '<div class="container">' +

        '<div class="footer-headline">Every effort matters.</div>' +

        '<div class="footer-grid">' +

          '<div class="footer-col footer-brand">' +
            wordmark() +
            '<p>The student-owned verified growth record for what students do beyond grades.</p>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h5>Audiences</h5>' +
            '<ul>' +
              '<li><a href="index.html">Home</a></li>' +
              '<li><a href="students.html">Students</a></li>' +
              '<li><a href="parents.html">Parents</a></li>' +
              '<li><a href="partners.html">Partners</a></li>' +
              '<li><a href="institutions.html">Institutions</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h5>Explore</h5>' +
            '<ul>' +
              '<li><a href="score.html">Score</a></li>' +
              '<li><a href="research.html">Research</a></li>' +
              '<li><a href="about.html">About</a></li>' +
              '<li><a href="index.html#faq">FAQ</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h5>Trust</h5>' +
            '<ul>' +
              '<li><a href="privacy.html">Privacy</a></li>' +
              '<li><a href="terms.html">Terms</a></li>' +
              '<li><a href="contact.html">Contact</a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="footer-col">' +
            '<h5>Reach Y2O</h5>' +
            '<ul>' +
              '<li><a href="mailto:hello@youth2opportunities.ca">hello@youth2opportunities.ca</a></li>' +
              '<li><a href="mailto:privacy@youth2opportunities.ca">privacy@youth2opportunities.ca</a></li>' +
            '</ul>' +
          '</div>' +

        '</div>' +

        '<div class="footer-bottom">' +
          '<span>© ' + year + ' Y2O Growth Inc.</span>' +
          '<span class="footer-tag">For early access, join the waitlist.</span>' +
        '</div>' +

      '</div>' +
    '</footer>';

    host.innerHTML = html;
  }

  function init() {
    buildNavbar();
    buildFooter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for manual use if needed
  window.Y2O = window.Y2O || {};
  window.Y2O.buildNavbar = buildNavbar;
  window.Y2O.buildFooter = buildFooter;
})();
