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
