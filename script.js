document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var tabs = document.querySelector('nav.tabs');

  if (toggle && tabs) {
    toggle.addEventListener('click', function () {
      tabs.classList.toggle('open');
      toggle.setAttribute('aria-expanded', tabs.classList.contains('open'));
    });
  }

  // Launch a TinySurveys widget whenever the visitor navigates to another
  // page on the site (tab links, in-content links to other pages, etc).
  // Intentionally does NOT fire on first page load, only on click-through.
  var internalLinks = document.querySelectorAll('a[href$=".html"]');

  internalLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var destination = link.getAttribute('href');

      if (typeof TinySurveys === 'undefined' || typeof TinySurveys.showTS !== 'function') {
        return; // SDK not loaded — fall back to normal navigation
      }

      event.preventDefault();
      TinySurveys.showTS(function () {
        window.location.href = destination;
      });
    });
  });

});
