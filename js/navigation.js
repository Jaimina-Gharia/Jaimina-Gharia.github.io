/* ========================================
   NAVIGATION — Sticky nav, mobile menu,
   scroll progress, active sections
   ======================================== */

class Navigation {
  constructor() {
    this.nav = document.querySelector('.nav');
    this.links = document.querySelectorAll('.nav__link');
    this.mobileToggle = document.querySelector('.nav__mobile-toggle');
    this.navLinks = document.querySelector('.nav__links');
    this.themeToggle = document.querySelector('.nav__theme-toggle');
    this.scrollProgress = document.querySelector('.scroll-progress');
    this.sections = [];
    this.isScrolled = false;

    this.init();
  }

  init() {
    // Collect sections for active tracking
    this.links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          this.sections.push({ el: section, link });
        }
      }
    });

    this.bindEvents();
    this.updateScrollState();
  }

  bindEvents() {
    // Scroll events
    window.addEventListener('scroll', () => {
      this.updateScrollState();
      this.updateActiveSection();
      this.updateScrollProgress();
    }, { passive: true });

    // Mobile toggle
    if (this.mobileToggle) {
      this.mobileToggle.addEventListener('click', () => this.toggleMobile());
    }

    // Nav link clicks — close mobile menu
    this.links.forEach(link => {
      link.addEventListener('click', () => {
        if (this.navLinks.classList.contains('is-open')) {
          this.closeMobile();
        }
      });
    });

    // Theme toggle
    if (this.themeToggle) {
      this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    // Close mobile menu on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && this.navLinks.classList.contains('is-open')) {
        this.closeMobile();
      }
    });

    // Close mobile menu on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.navLinks.classList.contains('is-open')) {
        this.closeMobile();
      }
    });
  }

  updateScrollState() {
    const scrolled = window.scrollY > 20;
    if (scrolled !== this.isScrolled) {
      this.isScrolled = scrolled;
      this.nav.classList.toggle('is-scrolled', scrolled);
    }
  }

  updateActiveSection() {
    const scrollPos = window.scrollY + window.innerHeight * 0.35;

    let activeIndex = 0;
    for (let i = this.sections.length - 1; i >= 0; i--) {
      if (this.sections[i].el.offsetTop <= scrollPos) {
        activeIndex = i;
        break;
      }
    }

    this.sections.forEach((s, i) => {
      s.link.classList.toggle('is-active', i === activeIndex);
    });
  }

  updateScrollProgress() {
    if (!this.scrollProgress) return;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    this.scrollProgress.style.width = progress + '%';
  }

  toggleMobile() {
    const isOpen = this.navLinks.classList.contains('is-open');
    if (isOpen) {
      this.closeMobile();
    } else {
      this.openMobile();
    }
  }

  openMobile() {
    this.navLinks.classList.add('is-open');
    this.mobileToggle.classList.add('is-open');
    this.mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  closeMobile() {
    this.navLinks.classList.remove('is-open');
    this.mobileToggle.classList.remove('is-open');
    this.mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update icon
    this.updateThemeIcon(newTheme);

    // Redraw canvases
    document.querySelectorAll('canvas').forEach(c => {
      if (c._visual) c._visual.draw();
    });
  }

  updateThemeIcon(theme) {
    if (!this.themeToggle) return;
    const sunIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
    const moonIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    this.themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
  }

  initTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    this.updateThemeIcon(theme);
  }
}
