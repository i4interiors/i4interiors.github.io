// Gallery category filter + lightbox.
(function () {
  var filters = document.getElementById('filters');
  var gallery = document.getElementById('gallery');
  var box = document.getElementById('lightbox');
  var boxImg = document.getElementById('lightboxImg');
  var boxClose = document.getElementById('lightboxClose');
  if (!filters || !gallery) return;

  var figures = Array.prototype.slice.call(gallery.querySelectorAll('figure'));

  // ---- filtering ----
  filters.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-filter]');
    if (!btn) return;

    var cat = btn.getAttribute('data-filter');

    filters.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });

    figures.forEach(function (fig) {
      fig.hidden = !(cat === 'all' || fig.getAttribute('data-cat') === cat);
    });
  });

  // ---- lightbox ----
  var lastFocus = null;

  function open(src, alt) {
    lastFocus = document.activeElement;
    boxImg.src = src;
    boxImg.alt = alt || '';
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    boxClose.focus();
  }

  function close() {
    box.hidden = true;
    boxImg.src = '';
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
  }

  gallery.addEventListener('click', function (e) {
    var shot = e.target.closest('button.shot');
    if (!shot) return;
    var img = shot.querySelector('img');
    open(shot.getAttribute('data-full'), img ? img.alt : '');
  });

  boxClose.addEventListener('click', close);

  // Click the backdrop (but not the image itself) to dismiss.
  box.addEventListener('click', function (e) {
    if (e.target === box) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !box.hidden) close();
  });
})();
