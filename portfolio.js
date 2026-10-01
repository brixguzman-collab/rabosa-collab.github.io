// Expandable project rows
document.querySelectorAll('#projects .row').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var panel = document.getElementById(btn.getAttribute('aria-controls'));
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    panel.classList.toggle('open', !open);
  });
});

// Theme toggle
var root = document.documentElement;
document.getElementById('theme').addEventListener('click', function () {
  var dark = root.getAttribute('data-theme') === 'dark' ||
    (!root.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  root.setAttribute('data-theme', dark ? 'light' : 'dark');
});

// Highlight current section in nav
var links = document.querySelectorAll('nav a');
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      links.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach(function (s) { io.observe(s); });

document.getElementById('year').textContent = new Date().getFullYear();