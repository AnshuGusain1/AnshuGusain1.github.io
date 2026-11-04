// Site analytics: Google Analytics 4 + Microsoft Clarity.
// Paste your IDs below. Each tool only loads once its ID is filled in.
//   GA4 Measurement ID: analytics.google.com > Admin > Data streams > your stream (looks like "G-XXXXXXXXXX")
//   Clarity Project ID: clarity.microsoft.com > your project > Settings > Overview (looks like "abc123xyz")
(function () {
  var GA_MEASUREMENT_ID = "G-8L2B9XX8X7";
  var CLARITY_PROJECT_ID = "z84y65uhmb";

  // Skip tracking when previewing the site locally.
  var host = location.hostname;
  if (host === "localhost" || host === "127.0.0.1" || location.protocol === "file:") return;

  if (GA_MEASUREMENT_ID) {
    var ga = document.createElement("script");
    ga.async = true;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(ga);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }

  if (CLARITY_PROJECT_ID) {
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", CLARITY_PROJECT_ID);
  }
})();
