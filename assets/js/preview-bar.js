/* ---------------------------------------------------------------
   Preview-only navigation.

   Injects a small fixed "All layouts" button so the layouts can be
   browsed and compared without using the browser's back button.
   Each page passes its own caption via data-label.

   This is a review aid, NOT part of either website design. When a
   layout is chosen and the site goes live, delete this file and the
   single <script> tag that loads it — nothing else references it.
   --------------------------------------------------------------- */
(function () {
  var script = document.currentScript;
  var label = (script && script.getAttribute('data-label')) || '';
  var home = (script && script.getAttribute('data-home')) || '../../';

  var css = document.createElement('style');
  css.textContent = [
    '.pvw{position:fixed;left:16px;bottom:16px;z-index:9999;display:inline-flex;',
    'align-items:center;gap:12px;padding:11px 20px;border-radius:999px;',
    'background:rgba(18,16,14,.92);color:#f4f1ec;text-decoration:none;',
    '-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);',
    "font-family:'Jost',system-ui,-apple-system,'Segoe UI',sans-serif;",
    'font-size:11px;letter-spacing:.18em;text-transform:uppercase;line-height:1;',
    'box-shadow:0 6px 24px rgba(0,0,0,.28);transition:background .25s,transform .25s;}',
    '.pvw:hover{background:#000;transform:translateY(-2px);}',
    '.pvw:focus-visible{outline:2px solid #fff;outline-offset:3px;}',
    '.pvw__arrow{font-size:14px;line-height:1;}',
    '.pvw__label{color:rgba(244,241,236,.55);padding-left:12px;',
    'border-left:1px solid rgba(244,241,236,.25);}',
    '@media (max-width:560px){.pvw{left:12px;bottom:12px;padding:10px 16px;font-size:10px;}',
    '.pvw__label{display:none;}}',
    '@media (prefers-reduced-motion:reduce){.pvw{transition:none;}}'
  ].join('');
  document.head.appendChild(css);

  var a = document.createElement('a');
  a.className = 'pvw';
  a.href = home;
  a.innerHTML = '<span class="pvw__arrow" aria-hidden="true">&#8592;</span>' +
                '<span>All layouts</span>' +
                (label ? '<span class="pvw__label"></span>' : '');
  if (label) a.querySelector('.pvw__label').textContent = label;

  (document.body || document.documentElement).appendChild(a);
})();
