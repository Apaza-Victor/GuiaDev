const GuiaDevAnimations = {
  init() {
    if (typeof anime === 'undefined') return;
    this.initScrollAnimations();
  },

  heroEntrance() {
    if (typeof anime === 'undefined') return;
    anime({
      targets: '.hero-title, .hero-subtitle, .hero-stats, .hero-buttons > *',
      opacity: [0, 1],
      translateY: [40, 0],
      scale: [0.95, 1],
      delay: anime.stagger(120),
      duration: 900,
      easing: 'easeOutExpo'
    });
  },

  categoryCards() {
    if (typeof anime === 'undefined') return;
    const cards = document.querySelectorAll('.category-card');
    if (!cards.length) return;
    anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [50, 0],
      scale: [0.92, 1],
      delay: anime.stagger(80),
      duration: 700,
      easing: 'easeOutBack'
    });
  },

  featureCards() {
    if (typeof anime === 'undefined') return;
    const cards = document.querySelectorAll('.feature-card');
    if (!cards.length) return;
    anime({
      targets: cards,
      opacity: [0, 1],
      translateY: [30, 0],
      rotateX: [15, 0],
      delay: anime.stagger(100),
      duration: 600,
      easing: 'easeOutQuad'
    });
  },

  accordionToggle(element, isExpanding) {
    if (typeof anime === 'undefined') return;
    if (isExpanding) {
      element.style.maxHeight = '0px';
      element.style.opacity = '0';
      anime({
        targets: element,
        maxHeight: ['0px', element.scrollHeight + 'px'],
        opacity: [0, 1],
        duration: 350,
        easing: 'easeOutQuad',
        complete: () => {
          element.style.maxHeight = 'none';
        }
      });
    } else {
      element.style.maxHeight = element.scrollHeight + 'px';
      anime({
        targets: element,
        maxHeight: ['0px'],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeInQuad'
      });
    }
  },

  searchModalOpen() {
    if (typeof anime === 'undefined') return;
    const overlay = document.querySelector('.search-modal-overlay');
    const modal = document.querySelector('.search-modal');
    if (!overlay || !modal) return;
    anime({
      targets: overlay,
      opacity: [0, 1],
      duration: 200,
      easing: 'easeOutQuad'
    });
    anime({
      targets: modal,
      scale: [0.85, 1],
      opacity: [0, 1],
      translateY: [-20, 0],
      duration: 300,
      easing: 'easeOutBack'
    });
  },

  searchModalClose() {
    if (typeof anime === 'undefined') return;
    const overlay = document.querySelector('.search-modal-overlay');
    const modal = document.querySelector('.search-modal');
    if (!overlay || !modal) return;
    anime({
      targets: modal,
      scale: [1, 0.85],
      opacity: [1, 0],
      translateY: [0, -20],
      duration: 200,
      easing: 'easeInQuad'
    });
    anime({
      targets: overlay,
      opacity: [1, 0],
      duration: 200,
      easing: 'easeOutQuad'
    });
  },

  searchResults(results) {
    if (typeof anime === 'undefined' || !results.length) return;
    anime({
      targets: results,
      opacity: [0, 1],
      translateX: [-15, 0],
      delay: anime.stagger(40),
      duration: 300,
      easing: 'easeOutQuad'
    });
  },

  themeToggle(iconElement) {
    if (typeof anime === 'undefined' || !iconElement) return;
    anime({
      targets: iconElement,
      rotate: [0, 360],
      scale: [1, 1.3, 1],
      duration: 500,
      easing: 'easeOutElastic(1, .6)'
    });
  },

  codeCopied(button) {
    if (typeof anime === 'undefined' || !button) return;
    anime({
      targets: button,
      scale: [1, 1.4, 1],
      duration: 400,
      easing: 'easeOutElastic(1, .5)'
    });
  },

  lessonNavigation(direction) {
    if (typeof anime === 'undefined') return;
    const docBody = document.querySelector('.doc-body');
    if (!docBody) return;
    const xOffset = direction === 'next' ? 60 : -60;
    anime({
      targets: docBody,
      opacity: [0, 1],
      translateX: [xOffset, 0],
      duration: 400,
      easing: 'easeOutCubic'
    });
  },

  tocHighlight(element) {
    if (typeof anime === 'undefined' || !element) return;
    anime({
      targets: element,
      backgroundColor: ['rgba(245, 158, 11, 0.15)', 'rgba(245, 158, 11, 0)'],
      duration: 800,
      easing: 'easeOutQuad'
    });
  },

  breadcrumbEntrance() {
    if (typeof anime === 'undefined') return;
    const items = document.querySelectorAll('.breadcrumb-item');
    if (!items.length) return;
    anime({
      targets: items,
      opacity: [0, 1],
      translateY: [-10, 0],
      delay: anime.stagger(50),
      duration: 300,
      easing: 'easeOutQuad'
    });
  },

  lessonListEntrance() {
    if (typeof anime === 'undefined') return;
    const items = document.querySelectorAll('.lesson-card');
    if (!items.length) return;
    anime({
      targets: items,
      opacity: [0, 1],
      translateX: [-20, 0],
      delay: anime.stagger(60),
      duration: 400,
      easing: 'easeOutQuad'
    });
  },

  staggerEntrance(selector, options = {}) {
    if (typeof anime === 'undefined') return;
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    const defaults = {
      targets: elements,
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(80),
      duration: 600,
      easing: 'easeOutQuad'
    };
    anime({ ...defaults, ...options });
  },

  pulseElement(element) {
    if (typeof anime === 'undefined' || !element) return;
    anime({
      targets: element,
      scale: [1, 1.05, 1],
      boxShadow: ['0 0 0 0 rgba(245, 158, 11, 0)', '0 0 0 10px rgba(245, 158, 11, 0.3)', '0 0 0 0 rgba(245, 158, 11, 0)'],
      duration: 600,
      easing: 'easeOutQuad'
    });
  },

  initScrollAnimations() {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.classList.contains('category-card')) {
            anime({
              targets: el,
              opacity: [0, 1],
              translateY: [40, 0],
              scale: [0.95, 1],
              duration: 600,
              easing: 'easeOutBack'
            });
          } else if (el.classList.contains('feature-card')) {
            anime({
              targets: el,
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 500,
              easing: 'easeOutQuad'
            });
          } else {
            anime({
              targets: el,
              opacity: [0, 1],
              translateY: [25, 0],
              duration: 500,
              easing: 'easeOutQuad'
            });
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.category-card, .feature-card, .lesson-card, .doc-section, [data-animate]').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  GuiaDevAnimations.init();
});
