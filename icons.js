/* ==========================================================================
   Y2O — icons.js
   Lucide-style inline SVG icons, stroke 1.5px, currentColor
   Usage: icon("check-circle", 24)  → returns SVG string
   ========================================================================== */

(function () {
  "use strict";

  var PATHS = {
    "check-circle":
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>' +
      '<polyline points="22 4 12 14.01 9 11.01"></polyline>',

    "badge-check":
      '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>' +
      '<path d="m9 12 2 2 4-4"></path>',

    "user":
      '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>' +
      '<circle cx="12" cy="7" r="4"></circle>',

    "users":
      '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>' +
      '<circle cx="9" cy="7" r="4"></circle>' +
      '<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>' +
      '<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',

    "home":
      '<path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1Z"></path>',

    "briefcase":
      '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>' +
      '<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',

    "layers":
      '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>' +
      '<polyline points="2 17 12 22 22 17"></polyline>' +
      '<polyline points="2 12 12 17 22 12"></polyline>',

    "send":
      '<line x1="22" y1="2" x2="11" y2="13"></line>' +
      '<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',

    "database":
      '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>' +
      '<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>' +
      '<path d="M3 12a9 3 0 0 0 18 0"></path>',

    "calendar":
      '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>' +
      '<line x1="16" y1="2" x2="16" y2="6"></line>' +
      '<line x1="8"  y1="2" x2="8"  y2="6"></line>' +
      '<line x1="3"  y1="10" x2="21" y2="10"></line>',

    "clock":
      '<circle cx="12" cy="12" r="10"></circle>' +
      '<polyline points="12 6 12 12 16 14"></polyline>',

    "trending-up":
      '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>' +
      '<polyline points="16 7 22 7 22 13"></polyline>',

    "shield":
      '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>',

    "file-text":
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>' +
      '<polyline points="14 2 14 8 20 8"></polyline>' +
      '<line x1="16" y1="13" x2="8" y2="13"></line>' +
      '<line x1="16" y1="17" x2="8" y2="17"></line>' +
      '<polyline points="10 9 9 9 8 9"></polyline>',

    "mail":
      '<rect x="2" y="4" width="20" height="16" rx="2"></rect>' +
      '<polyline points="22 6 12 13 2 6"></polyline>',

    "chevron-down":
      '<polyline points="6 9 12 15 18 9"></polyline>',

    "chevron-right":
      '<polyline points="9 6 15 12 9 18"></polyline>',

    "arrow-right":
      '<line x1="5" y1="12" x2="19" y2="12"></line>' +
      '<polyline points="12 5 19 12 12 19"></polyline>',

    "sparkles":
      '<path d="M12 3 13.9 8.6 19.5 10.5 13.9 12.4 12 18 10.1 12.4 4.5 10.5 10.1 8.6 12 3Z"></path>' +
      '<path d="M19 14v4"></path>' +
      '<path d="M17 16h4"></path>' +
      '<path d="M5 4v4"></path>' +
      '<path d="M3 6h4"></path>',

    "target":
      '<circle cx="12" cy="12" r="10"></circle>' +
      '<circle cx="12" cy="12" r="6"></circle>' +
      '<circle cx="12" cy="12" r="2"></circle>',

    "award":
      '<circle cx="12" cy="8" r="7"></circle>' +
      '<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',

    "book-open":
      '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>' +
      '<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',

    "video":
      '<polygon points="23 7 16 12 23 17 23 7"></polygon>' +
      '<rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',

    "play":
      '<polygon points="6 4 20 12 6 20 6 4"></polygon>',

    "heart":
      '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>',

    "building":
      '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>' +
      '<line x1="9"  y1="7"  x2="9"  y2="7"></line>' +
      '<line x1="15" y1="7"  x2="15" y2="7"></line>' +
      '<line x1="9"  y1="12" x2="9"  y2="12"></line>' +
      '<line x1="15" y1="12" x2="15" y2="12"></line>' +
      '<path d="M10 22v-4h4v4"></path>',

    "lock":
      '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>' +
      '<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',

    "eye":
      '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>' +
      '<circle cx="12" cy="12" r="3"></circle>',

    "message-circle":
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',

    "star":
      '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',

    "zap":
      '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',

    "bell":
      '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>' +
      '<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>',

    "share":
      '<circle cx="18" cy="5" r="3"></circle>' +
      '<circle cx="6" cy="12" r="3"></circle>' +
      '<circle cx="18" cy="19" r="3"></circle>' +
      '<line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>' +
      '<line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>'
  };

  function icon(name, size) {
    var s = size || 24;
    var body = PATHS[name];
    if (!body) {
      return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24"></svg>';
    }
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="' + s + '" height="' + s +
        '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
        'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
        body +
      '</svg>'
    );
  }

  window.icon = icon;
})();
