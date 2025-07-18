document.addEventListener('DOMContentLoaded', function() {
  var iframe = document.getElementById('nowplaying-spotify');
  var overlay = document.getElementById('snoozing-overlay');
  if (iframe && overlay) {
    iframe.addEventListener('load', function() {
      // Try to detect if the iframe is showing content
      // We cannot access iframe content due to CORS, so we just hide overlay on load
      overlay.style.display = 'none';
    });
    // Optionally, set a timeout in case the iframe never loads
    setTimeout(function() {
      if (overlay.style.display !== 'none') {
        overlay.textContent = 'Snoozing';
      }
    }, 4000);
  }
});

// Logo hide/show on scroll
(function() {
  let lastScrollY = window.scrollY;
  let ticking = false;
  const logo = document.querySelector('.ag-logo');
  let logoVisible = true;

  if (!logo) return;

  // Ensure transition is set
  logo.style.transition = 'opacity 0.4s cubic-bezier(0.4,0.2,0.2,1), transform 0.4s cubic-bezier(0.4,0.2,0.2,1)';
  logo.style.willChange = 'opacity, transform';

  function onScroll() {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY + 5 && logoVisible) {
      // Scrolling down
      logo.style.opacity = '0';
      logo.style.pointerEvents = 'none';
      logo.style.transform = 'translateY(-40px)';
      logoVisible = false;
    } else if (currentScrollY < lastScrollY - 5 && !logoVisible) {
      // Scrolling up
      logo.style.opacity = '1';
      logo.style.pointerEvents = '';
      logo.style.transform = 'translateY(0)';
      logoVisible = true;
    }
    lastScrollY = currentScrollY;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
})();
