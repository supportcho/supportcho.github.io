(function () {
  "use strict";

  // Footer year
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  // If the URL points at a domestic publication (#pub-kN), open the
  // collapsed <details> first so the browser can scroll to it.
  var domestic = document.querySelector(".domestic-details");
  function revealDomesticTarget() {
    var id = window.location.hash.slice(1);
    if (!domestic || !id || id.indexOf("pub-k") !== 0) return;
    domestic.open = true;
    window.requestAnimationFrame(function () {
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({ block: "start" });
    });
  }
  revealDomesticTarget();
  window.addEventListener("hashchange", revealDomesticTarget);

  // Highlight the nav link for the section currently in view
  if (!("IntersectionObserver" in window)) return;

  var links = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      links.forEach(function (a) {
        if (a.getAttribute("href") === "#" + entry.target.id) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-20% 0px -70% 0px", threshold: 0 });

  sections.forEach(function (s) { io.observe(s); });
})();
