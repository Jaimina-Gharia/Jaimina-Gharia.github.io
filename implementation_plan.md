# J.V. Gharia — Research Portfolio Website

Build a distinctive, editorial-style personal research portfolio website that functions as a **digital scientific journal**.

## Verified Information from CV

All content will be sourced from the provided CV images:

| Field | Detail |
|-------|--------|
| **Name** | Jaimina Gharia (J.V. Gharia) |
| **Phone** | (+91) 7861963370 |
| **Email** | jvgharia@gmail.com |
| **Location** | Vadodara |
| **LinkedIn** | Jaimina Gharia |
| **Education** | B.Sc. (Hons.) in Biotechnology, GSFC University, Vadodara — CGPA: 7.94/10 |
| **Publication** | "Revolutionizing Cancer Care: Bioprinting Prostate Cancer Stem Cells for Targeted Treatments" — *World Journal of Clinical Oncology* (DOI + PubMed links) |
| **Achievement** | Student of the Year, GSFC University, 2025–2026 |

---

## Proposed Changes

### Architecture

Single-page application with smooth scroll sections, built with **vanilla HTML + CSS + JavaScript** — no frameworks, no build tools. Fast, lightweight, and easy to deploy.

#### File Structure

```
Prof-Website/
├── index.html              # Main HTML document
├── css/
│   ├── variables.css       # Design tokens (colors, fonts, spacing)
│   ├── base.css            # Reset, typography, global styles
│   ├── layout.css          # Grid systems, containers, responsive
│   ├── components.css      # Buttons, cards, tags, timeline
│   ├── sections.css        # Section-specific styles (hero, research, etc.)
│   └── animations.css      # Scroll animations, transitions, motifs
├── js/
│   ├── main.js             # App initialization, scroll handling
│   ├── navigation.js       # Sticky nav, mobile menu, scroll progress
│   ├── timeline.js         # Research journey timeline interactions
│   ├── projects.js         # Project card expansion/details
│   ├── animations.js       # Intersection Observer animations
│   └── canvas.js           # Hero canvas — cell-to-neuron illustration
├── assets/
│   └── icons/              # SVG icons for contacts, skills
└── favicon.svg             # Scientific favicon
```

---

### Visual Identity

| Element | Choice | Rationale |
|---------|--------|-----------|
| **Heading font** | *Playfair Display* (serif) | Editorial, expressive, academic gravitas |
| **Body font** | *Inter* (sans-serif) | Highly readable, modern, clean |
| **Mono font** | *JetBrains Mono* (monospace) | Scientific annotations, metadata |
| **Background** | `#FAF8F5` warm ivory | Archival paper feel |
| **Primary accent** | `#2D5F3A` deep forest green | Organic, scientific |
| **Secondary** | `#8BA888` muted sage | Subtle complement |
| **Text** | `#1A1A1A` ink black | High contrast |
| **Highlight** | `#B8764E` muted copper | Warm accent sparingly |
| **Neuro accent** | `#2A3A5C` midnight blue | Neuroscience section |

### Hero Canvas Visualization

An HTML5 Canvas illustration showing:
- Floating organic cell-like structures on the left
- Transitioning into branching neural dendrite patterns on the right
- Subtle parallax movement on scroll
- Gentle ambient animation (slight drift, pulse)
- Color palette matches the site's forest green / sage / midnight blue

### Sections (in order)

1. **Hero** — Name, tagline, intro paragraph, CTA buttons, canvas visualization
2. **Signature Statement** — Large editorial quote as visual pause
3. **Research Journey** — Vertical interactive timeline with 5 research experiences
4. **Projects** — Asymmetrical editorial grid with 4 research projects (expandable)
5. **Publications** — Featured publication as editorial cover
6. **Conferences** — Archive layout with 3 presentations
7. **Neuroscience Interest** — "The Next Question" immersive section with neural visual
8. **Technical Skills** — Category-based tags (no progress bars)
9. **Education & Achievements** — Compact editorial layout
10. **Beyond the Bench** — Personal section with placeholder content
11. **Contact** — Invitation to collaborate with verified links

### Navigation

- Sticky top nav with: Home, Research, Projects, Publications, About, CV
- Scroll progress indicator (thin line at top)
- Smooth scrolling between sections
- Mobile hamburger menu
- Active section highlighting

### Interactions & Animations

- Intersection Observer for fade-in/slide-up on scroll
- Timeline nodes that expand on click
- Project cards that expand into detailed case studies
- Canvas hero with subtle scroll-driven parallax
- Hover states on all interactive elements
- `prefers-reduced-motion` respected throughout
- Light/dark mode toggle (ivory ↔ deep charcoal)

---

## Open Questions

> [!IMPORTANT]
> **LinkedIn URL**: The CV shows "Jaimina Gharia | LinkedIn" but the exact URL is not legible. I'll use `https://www.linkedin.com/in/jaimina-gharia` as a placeholder — please confirm the correct URL.

> [!IMPORTANT]
> **Publication DOI/PubMed links**: The CV mentions DOI and PubMed links but the exact URLs are not fully visible. I'll add placeholder links — please provide the exact DOI and PubMed URLs.

> [!IMPORTANT]
> **ORCID / Google Scholar / ResearchGate**: Do you have profiles on these platforms? I'll add placeholders that you can fill in.

> [!NOTE]
> **Contact form**: Per your instructions, I will not add a contact form. The contact section will feature direct email and social links.

> [!NOTE]
> **CV download**: I'll add a "Download CV" button that links to a placeholder path. You'll need to provide the actual PDF file.

---

## Verification Plan

### Manual Verification
- Launch with a local dev server and verify all sections render correctly
- Test responsive layouts at mobile, tablet, and desktop breakpoints
- Verify all navigation links and scroll behavior
- Test light/dark mode toggle
- Confirm all animations respect `prefers-reduced-motion`
- Check that all content matches verified CV information
