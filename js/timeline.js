/* ========================================
   TIMELINE — Interactive research timeline
   ======================================== */

class Timeline {
  constructor() {
    this.items = document.querySelectorAll('.timeline-item');
    this.expandTriggers = document.querySelectorAll('.timeline-item .expand-trigger');

    this.init();
  }

  init() {
    this.expandTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleExpand(trigger);
      });

      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleExpand(trigger);
        }
      });
    });
  }

  toggleExpand(trigger) {
    const details = trigger.closest('.timeline-item').querySelector('.expandable');
    const isOpen = details.classList.contains('is-open');

    // Close all others
    document.querySelectorAll('.timeline-item .expandable.is-open').forEach(el => {
      if (el !== details) {
        el.classList.remove('is-open');
        const otherTrigger = el.closest('.timeline-item').querySelector('.expand-trigger');
        if (otherTrigger) {
          otherTrigger.classList.remove('is-open');
          otherTrigger.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Toggle current
    details.classList.toggle('is-open', !isOpen);
    trigger.classList.toggle('is-open', !isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));
  }
}
