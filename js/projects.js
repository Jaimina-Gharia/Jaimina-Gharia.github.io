/* ========================================
   PROJECTS — Card expansion & details
   ======================================== */

class Projects {
  constructor() {
    this.cards = document.querySelectorAll('.project-card');
    this.init();
  }

  init() {
    this.cards.forEach(card => {
      const trigger = card.querySelector('.expand-trigger');
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          this.toggleProject(card, trigger);
        });

        trigger.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleProject(card, trigger);
          }
        });
      }
    });
  }

  toggleProject(card, trigger) {
    const details = card.querySelector('.expandable');
    if (!details) return;

    const isOpen = details.classList.contains('is-open');

    // Toggle
    details.classList.toggle('is-open', !isOpen);
    trigger.classList.toggle('is-open', !isOpen);
    trigger.setAttribute('aria-expanded', String(!isOpen));

    // Scroll into view if opening
    if (!isOpen) {
      setTimeout(() => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }
}
