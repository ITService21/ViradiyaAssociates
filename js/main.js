/* ============================================
   Main initialization script
   Bootstraps navbar, footer, and page modules
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();

  // Remove page loader after content loads
  window.addEventListener('load', () => {
    const loader = document.getElementById('pageLoader');
    if (loader) {
      setTimeout(() => {
        loader.classList.add('loaded');
        setTimeout(() => loader.remove(), 500);
      }, 300);
    }
  });

  // Smooth scroll for anchor links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        const navHeight = 80;
        const targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    }
  });
});
