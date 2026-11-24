# Walkthrough — J.V. Gharia Research Portfolio Website

## What Was Built

A complete, fully responsive portfolio website designed as a **digital scientific journal** — built with vanilla HTML, CSS, and JavaScript (no frameworks, no build tools).

### Architecture

| File | Purpose |
|------|---------|
| [`index.html`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html) | Complete single-page document with all 11 sections |
| [`css/variables.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/variables.css) | Design tokens — colors, typography, spacing, shadows, transitions |
| [`css/base.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/base.css) | CSS reset, typography system, utility classes |
| [`css/layout.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/layout.css) | Container system, responsive grid, flex utilities |
| [`css/components.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/components.css) | Buttons, tags, cards, timeline, publication feature, skill categories |
| [`css/sections.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/sections.css) | Section-specific styles — nav, hero, projects, neuroscience, contact |
| [`css/animations.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/animations.css) | Scroll reveal system, scientific motifs, page-load animations |
| [`js/canvas.js`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/js/canvas.js) | Hero cell-to-neuron visualization + neuroscience background + project visuals |
| [`js/navigation.js`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/js/navigation.js) | Sticky nav, scroll progress, active section, mobile menu, theme toggle |
| [`js/timeline.js`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/js/timeline.js) | Research timeline expand/collapse interactions |
| [`js/projects.js`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/js/projects.js) | Project card expansion with smooth scroll |
| [`js/animations.js`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/js/animations.js) | IntersectionObserver scroll-reveal system |
| [`js/main.js`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/js/main.js) | App initialization orchestrator |
| [`favicon.svg`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/favicon.svg) | Scientific "J" favicon |

---

## Visual Identity

- **Heading font**: Playfair Display (editorial serif)
- **Body font**: Inter (clean sans-serif)  
- **Mono font**: JetBrains Mono (scientific annotations)
- **Primary palette**: Warm ivory `#FAF8F5` → Deep forest green `#2D5F3A` → Muted sage `#8BA888`
- **Accent**: Copper `#B8764E` (highlights), Midnight blue `#2A3A5C` (neuroscience)
- **Light/dark mode**: Full theme toggle with localStorage persistence

## Content Sections (11 total)

1. **Hero** — Name, tagline, intro, interactive cell-to-neuron canvas
2. **Signature Statement** — Editorial quote as visual pause
3. **Research Journey** — 5-entry interactive timeline (CHARUSAT, GSFC, MSU Biochem, Chronobiology, ETP)
4. **Projects** — 4 editorial research cards with canvas visualizations and expandable details
5. **Publications** — Featured publication (World Journal of Clinical Oncology) as editorial card
6. **Conferences** — 3 presentation entries in archive layout
7. **Neuroscience Interest** — Immersive dark section with animated neural background
8. **Technical Skills** — 4 categorized tag groups (no progress bars)
9. **Education & Achievements** — GSFC University + Student of the Year
10. **Beyond the Bench** — Personal section with placeholder spaces
11. **Contact** — Email, LinkedIn, ORCID, Scholar + CV download

## Interactions

- ✅ Smooth scroll navigation with active section highlighting
- ✅ Scroll progress bar (thin line under nav)
- ✅ Mobile hamburger menu
- ✅ Light/dark mode toggle
- ✅ Expandable timeline and project details
- ✅ Canvas hero visualization (cells → neurons)
- ✅ Animated neuroscience section background
- ✅ Project card mini-visualizations (unique per project)
- ✅ Scroll-reveal animations with stagger
- ✅ `prefers-reduced-motion` respected throughout

## Content Corrections

- **CHARUSAT entry**: Corrected to match CV — shows HPLC, LC-MS/MS, and bioinformatics (not cell culture, which belongs to GSFC)
- **CV download**: Linked to actual `CV_Jaimina Gharia.pdf` in the project directory

---

## Placeholders to Update

> [!IMPORTANT]
> The following links need real URLs:

| Item | Current | Needs |
|------|---------|-------|
| **PubMed link** | `#` | Actual PubMed URL for the WJCO article |
| **DOI link** | `#` | Actual DOI URL |
| **LinkedIn** | `linkedin.com/in/jaimina-gharia` | Confirm correct URL |
| **ORCID** | `#` | ORCID profile URL (or remove if not available) |
| **Google Scholar** | `#` | Scholar URL (or remove if not available) |

---

## How to View

The website is currently running at **http://localhost:3000**. Open it in your browser to see the full site.

To serve it again later:
```bash
npx -y serve@latest -l 3000
```
