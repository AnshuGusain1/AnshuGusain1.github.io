// Light / dark mode toggle. Loaded in <head> so the saved theme applies before first paint.
(function() {
  var STORAGE_KEY = 'theme';
  var root = document.documentElement;

  function getSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function apply(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    var toggles = document.querySelectorAll('.theme-toggle');
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
    }
  }

  apply(getSaved() === 'dark' ? 'dark' : 'light');

  document.addEventListener('DOMContentLoaded', function() {
    apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

    document.addEventListener('click', function(e) {
      var toggle = e.target.closest('.theme-toggle');
      if (!toggle) return;
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch (err) {}
    });
  });
})();
