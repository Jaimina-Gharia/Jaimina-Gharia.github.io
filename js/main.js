/* ========================================
   MAIN — Application initialization
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize theme before anything renders
  const nav = new Navigation();
  nav.initTheme();

  // 2. Initialize page-load animation class
  document.body.classList.add('page-load');

  // 3. Initialize hero canvas
  const heroCanvasEl = document.getElementById('hero-canvas');
  if (heroCanvasEl) {
    const heroCanvas = new HeroCanvas(heroCanvasEl);
    heroCanvasEl._heroCanvas = heroCanvas;
  }

  // 4. Initialize neuroscience background canvas
  const neuroCanvasEl = document.getElementById('neuro-canvas');
  if (neuroCanvasEl) {
    const neuroBg = new NeuroBackground(neuroCanvasEl);
    neuroCanvasEl._neuroBackground = neuroBg;
  }

  // 5. Initialize project card visuals
  document.querySelectorAll('.project-card__visual canvas').forEach(canvas => {
    const type = canvas.getAttribute('data-visual');
    if (type) {
      const visual = new ProjectVisual(canvas, type);
      canvas._visual = visual;
    }
  });

  // 6. Initialize interactive components
  const timeline = new Timeline();
  const projects = new Projects();

  // 7. Initialize scroll animations (after all canvas setup)
  const scrollAnimations = new ScrollAnimations();

  // 8. Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 9. Listen for theme changes to redraw all canvases
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.project-card__visual canvas').forEach(canvas => {
      if (canvas._visual) canvas._visual.draw();
    });
    // Redraw hero
    if (heroCanvasEl && heroCanvasEl._heroCanvas) {
      // Hero redraws automatically in its animation loop
    }
  });
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  });
});
