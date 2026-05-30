/* ==========================================================================
   Y2O — faq.js
   Accordion: one open at a time, smooth height transition
   Usage: buildFAQ("#faq-list", FAQ.students)
   ========================================================================== */

(function () {
  "use strict";

  function chevronSVG() {
    if (typeof window.icon === "function") {
      // Replace default size + add class hook
      var svg = window.icon("chevron-down", 20);
      return svg.replace('<svg ', '<svg class="faq-chevron" ');
    }
    return (
      '<svg class="faq-chevron" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" ' +
      'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<polyline points="6 9 12 15 18 9"></polyline>' +
      '</svg>'
    );
  }

  function escapeHTML(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function buildFAQ(containerSelector, faqArray) {
    var container = (typeof containerSelector === "string")
      ? document.querySelector(containerSelector)
      : containerSelector;

    if (!container || !Array.isArray(faqArray)) return;

    container.classList.add("faq-list");

    var html = faqArray.map(function (entry, i) {
      var qid = "faq-q-" + i;
      var aid = "faq-a-" + i;
      return (
        '<div class="faq-item" data-faq-index="' + i + '">' +
          '<button class="faq-question" id="' + qid + '" aria-expanded="false" aria-controls="' + aid + '">' +
            '<span>' + escapeHTML(entry.q) + '</span>' +
            chevronSVG() +
          '</button>' +
          '<div class="faq-answer" id="' + aid + '" role="region" aria-labelledby="' + qid + '">' +
            '<div class="faq-answer-inner">' + escapeHTML(entry.a) + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join("");

    container.innerHTML = html;

    var items = Array.prototype.slice.call(container.querySelectorAll(".faq-item"));

    function close(item) {
      item.classList.remove("open");
      var ans = item.querySelector(".faq-answer");
      var btn = item.querySelector(".faq-question");
      if (ans) ans.style.maxHeight = "0px";
      if (btn) btn.setAttribute("aria-expanded", "false");
    }

    function open(item) {
      item.classList.add("open");
      var ans = item.querySelector(".faq-answer");
      var btn = item.querySelector(".faq-question");
      if (ans) {
        var inner = ans.querySelector(".faq-answer-inner");
        var h = inner ? inner.offsetHeight : ans.scrollHeight;
        ans.style.maxHeight = (h + 8) + "px";
      }
      if (btn) btn.setAttribute("aria-expanded", "true");
    }

    items.forEach(function (item) {
      var btn = item.querySelector(".faq-question");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        items.forEach(close);
        if (!isOpen) open(item);
      });
    });

    // Recompute heights on resize so open answers don't clip
    window.addEventListener("resize", function () {
      items.forEach(function (item) {
        if (item.classList.contains("open")) open(item);
      });
    });
  }

  window.buildFAQ = buildFAQ;
})();
