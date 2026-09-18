// Mobile nav toggle — shared across all Design 2 pages.
(function () {
  var btn = document.getElementById('navtoggle');
  var tabs = document.getElementById('tabs');
  if (!btn || !tabs) return;

  btn.addEventListener('click', function () {
    var open = tabs.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
