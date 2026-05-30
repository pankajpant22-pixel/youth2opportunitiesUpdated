// persist-ref.js
(function () {
  const params = new URLSearchParams(window.location.search);
  const ref = params.get("ref");

  // Save to sessionStorage if present in URL
  if (ref) {
    sessionStorage.setItem("ref", ref);
  }

  // On all internal link clicks, append ref param if missing
  const storedRef = sessionStorage.getItem("ref");
  if (!storedRef) return;

  document.addEventListener("click", function (e) {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    // Only process internal links
    const isInternal =
      href.startsWith("/") ||
      href.startsWith("./") ||
      href.startsWith("../") ||
      href.includes(window.location.hostname);

    // Skip anchors, mailto, tel, external
    if (
      !isInternal ||
      href.startsWith("#") ||
      href.startsWith("mailto") ||
      href.startsWith("tel")
    )
      return;

    const url = new URL(link.href, window.location.origin);
    if (!url.searchParams.get("ref")) {
      url.searchParams.set("ref", storedRef);
      link.href = url.toString();
    }
  });
})();
