/* ============================================
   Scroll Animations using IntersectionObserver
   Lightweight, GPU-accelerated animations
   ============================================ */

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .fade-left, .fade-right, .scale-up');

  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

/* Animated counter that counts up from 0 to target value */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-count'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.textContent = current.toLocaleString() + suffix;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target.toLocaleString() + suffix;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  counters.forEach(el => observer.observe(el));
}

/* Text typing effect for hero headings */
function initTypingEffect() {
  const typingElements = document.querySelectorAll('[data-typing]');
  
  typingElements.forEach(el => {
    const text = el.getAttribute('data-typing');
    el.textContent = '';
    let i = 0;

    function type() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50);
      }
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(type, 500);
        observer.unobserve(el);
      }
    }, { threshold: 0.5 });

    observer.observe(el);
  });
}

/* Parallax effect on scroll for background elements */
function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  if (!parallaxElements.length) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        parallaxElements.forEach(el => {
          const speed = parseFloat(el.getAttribute('data-parallax')) || 0.5;
          el.style.transform = `translateY(${scrollY * speed}px)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* Initialize all animation modules */
function initAllAnimations() {
  initScrollAnimations();
  initCounters();
  initParallax();
}

document.addEventListener('DOMContentLoaded', initAllAnimations);
