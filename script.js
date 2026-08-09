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

  // Only wire up the survey-on-navigation behavior once a real TinySurveys
  // key has been set. Until then, links behave normally so the site isn't
  // broken while the key is pending.
  var sdkScript = document.querySelector('script[data-key]');
  var placeholder = 'YOUR_TINYSURVEYS_KEY';
  var keyIsSet = sdkScript &&
    sdkScript.getAttribute('data-key') &&
    sdkScript.getAttribute('data-key') !== placeholder;

  if (!keyIsSet) {
    return; // links fall through to normal navigation
  }

  var internalLinks = document.querySelectorAll('a[href$=".html"]');

  internalLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      var destination = link.getAttribute('href');

      if (typeof TinySurveys === 'undefined' || typeof TinySurveys.showTS !== 'function') {
        return; // SDK didn't load — fall back to normal navigation
      }

      event.preventDefault();

      try {
        TinySurveys.showTS(function () {
          window.location.href = destination;
        });
      } catch (err) {
        // If the widget throws instead of calling back, don't strand the visitor
        console.error('TinySurveys failed to open, navigating anyway.', err);
        window.location.href = destination;
      }
    });
  });

});