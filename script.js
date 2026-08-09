// Mobile nav toggle — shared across all pages
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var tabs = document.querySelector('nav.tabs');

  if (toggle && tabs) {
    toggle.addEventListener('click', function () {
      tabs.classList.toggle('open');
      var expanded = tabs.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }

  /* ---------------------------------------------------------------
     TinySurveys WebSDK hook (placeholder)
     -----------------------------------------------------------------
     This is just a friendly marker so it's easy to find where to wire
     up the SDK once you drop the real snippet in. Safe to delete.
  ----------------------------------------------------------------- */
  if (window.TinySurveys) {
    console.log('TinySurveys WebSDK detected on this page.');
  }
});
