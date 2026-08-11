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

});
