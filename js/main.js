/**
 * CHOCO. — CORE CLIENT SCRIPT
 * Responsive navigation, scroll-triggered reveals, video playback optimization,
 * and luxury interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initStickyHeader();
  initScrollReveals();
  initVideoOptimization();
  initFilmCardsHover();
});

/**
 * 1. Responsive Navigation & Mobile Drawer
 */
function initNavigation() {
  const hamburgerBtn = document.querySelector('.hamburger-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const header = document.querySelector('.site-header');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburgerBtn || !mobileDrawer) return;

  function toggleMenu(open) {
    const isCurrentlyOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    const shouldOpen = open !== undefined ? open : !isCurrentlyOpen;

    hamburgerBtn.setAttribute('aria-expanded', String(shouldOpen));
    mobileDrawer.classList.toggle('is-open', shouldOpen);
    if (header) {
      header.classList.toggle('nav-open', shouldOpen);
    }
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
    document.documentElement.style.overflow = shouldOpen ? 'hidden' : '';
  }

  hamburgerBtn.addEventListener('click', () => toggleMenu());

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('is-open')) {
      toggleMenu(false);
      hamburgerBtn.focus();
    }
  });

  mobileDrawer.addEventListener('click', (e) => {
    if (e.target === mobileDrawer) {
      toggleMenu(false);
    }
  });
}

/**
 * 2. Sticky Header with Scroll Detection
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * 3. Scroll-Triggered Text & Section Reveals
 * Applies smooth, slow, expensive fade-up motion as elements enter viewport.
 */
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
}

/**
 * 4. Video Playback & Performance Optimization
 */
function initVideoOptimization() {
  const videos = document.querySelectorAll('video');
  if (!videos.length) return;

  if ('IntersectionObserver' in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          const promise = video.play();
          if (promise !== undefined) {
            promise.catch(() => {});
          }
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.15 });

    videos.forEach(v => videoObserver.observe(v));
  }
}

/**
 * 5. Film Cards Hover Effect
 */
function initFilmCardsHover() {
  const filmCards = document.querySelectorAll('.film-card');
  filmCards.forEach(card => {
    const video = card.querySelector('video');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      video.playbackRate = 1.0;
    });
  });
}
