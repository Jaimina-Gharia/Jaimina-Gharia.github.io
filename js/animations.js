/* ========================================
   ANIMATIONS — IntersectionObserver reveals
   ======================================== */

class ScrollAnimations {
  constructor() {
    this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.isReducedMotion) {
      // Make everything visible immediately
      document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
        el.classList.add('is-visible');
      });
      return;
    }
    this.init();
  }

  init() {
    // Standard reveals
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
      revealObserver.observe(el);
    });

    // Neuroscience section canvas animation
    const neuroCanvas = document.querySelector('.neuro-section__bg canvas');
    if (neuroCanvas && neuroCanvas._neuroBackground) {
      const neuroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              neuroCanvas._neuroBackground.startAnimation();
            } else {
              neuroCanvas._neuroBackground.stopAnimation();
            }
          });
        },
        { threshold: 0.1 }
      );
      neuroObserver.observe(neuroCanvas.closest('.section'));
    }
  }
}
