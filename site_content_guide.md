# 🧬 Jaimina V. Gharia — Site Content Guide

> Your single reference for updating anything on your portfolio website.
> **File:** [`index.html`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html)
> All content lives in this one HTML file. No build tools, no config files — just edit and push.

---

## 📁 Project Files at a Glance

| File | Purpose | You Edit It? |
|------|---------|:---:|
| [`index.html`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html) | **All site content** (text, links, structure) | ✅ Yes |
| [`css/variables.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/variables.css) | Colors & theme tokens | ❌ Usually no |
| [`css/base.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/base.css) | Base/reset styles | ❌ No |
| [`css/layout.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/layout.css) | Grid & layout | ❌ No |
| [`css/components.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/components.css) | Cards, buttons, tags | ❌ No |
| [`css/sections.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/sections.css) | Section-specific styles | ❌ No |
| [`css/animations.css`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/css/animations.css) | Scroll & hover animations | ❌ No |
| [`js/*.js`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/js) | Canvas, navigation, animations | ❌ No |
| [`Jaimina Gharia_Updated.pdf`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/Jaimina%20Gharia_Updated.pdf) | Your downloadable CV | ✅ Replace file |
| [`favicon.svg`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/favicon.svg) | Browser tab icon | ❌ Usually no |

---

## 🗺️ Content Map — What Lives Where

Everything below refers to **line numbers in [`index.html`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html)**.

> [!TIP]
> Use `Ctrl+G` in VS Code to jump to a specific line number instantly.

---

### 1. 🏠 Hero Section (Lines 67–99)

The very first thing visitors see.

| Content | Line(s) | What to Edit |
|---------|---------|-------------|
| Top label ("Biotechnology & Molecular Biology") | [Line 72](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L72) | Text inside `<span>` |
| Your name | [Line 74](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L74) | Text inside `<h1>` |
| Tagline (role/title) | [Line 75](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L75) | Text inside `<p class="hero__tagline">` |
| Intro paragraph | [Lines 76–78](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L76-L78) | Text inside `<p class="hero__intro">` |
| "Currently exploring…" line | [Line 89](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L89) | Text inside `<p class="hero__current">` |

---

### 2. 💬 Signature Quote (Lines 104–115)

| Content | Line(s) | What to Edit |
|---------|---------|-------------|
| The quote | [Line 107](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L107) | Text inside `<blockquote>` |

---

### 3. 🔬 Research Timeline (Lines 120–279)

Each research experience is a **timeline item** block. They are ordered from **newest to oldest**.

| # | Research Experience | Lines | Key Editable Fields |
|---|-------------------|-------|-------------------|
| 1 | **CHARUSAT** — HPLC/LC-MS internship | [131–157](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L131-L157) | Date (L134), Role (L135), Org (L136), Summary (L138), Tags (L141–145), Details (L153) |
| 2 | **GSFC Animal Tissue Culture Lab** | [160–188](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L160-L188) | Date (L163), Role (L164), Org (L165), Summary (L167), Tags (L170–176), Details (L184) |
| 3 | **MSU Biochemistry** | [191–218](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L191-L218) | Date (L194), Role (L195), Org (L196), Summary (L198), Tags (L201–206), Details (L214) |
| 4 | **Chronobiology Lab** | [221–247](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L221-L247) | Date (L224), Role (L225), Org (L226), Summary (L228), Tags (L231–235), Details (L243) |
| 5 | **ETP Laboratory** | [250–275](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L250-L275) | Date (L253), Role (L254), Org (L255), Summary (L257), Tags (L260–263), Details (L271) |

#### ➕ To Add a New Research Experience

Copy the **template below** and paste it **before** the first `<div class="timeline-item">` (at line 131). Change the content to match your new experience.

```html
        <!-- Timeline Item: NEW ENTRY -->
        <div class="timeline-item">
          <div class="timeline-item__dot" aria-hidden="true"></div>
          <div class="timeline-item__card">
            <span class="timeline-item__date">MONTH YEAR</span>
            <h3 class="timeline-item__role">YOUR ROLE</h3>
            <p class="timeline-item__org">ORGANIZATION NAME, LOCATION</p>
            <p class="timeline-item__focus">
              Brief description of what you did.
            </p>
            <div class="timeline-item__techniques">
              <span class="tag">Technique 1</span>
              <span class="tag">Technique 2</span>
            </div>
            <button class="expand-trigger" aria-expanded="false" aria-controls="research-NEW-ID">
              Research details
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div class="expandable" id="research-NEW-ID">
              <p class="timeline-item__focus">
                Detailed description of your work.
              </p>
            </div>
          </div>
        </div>
```

> [!IMPORTANT]
> Make sure the `aria-controls` value on the button matches the `id` on the `<div class="expandable">`. Each must be unique (e.g., `research-iitb`, `research-ncbs`, etc.).

---

### 4. 📊 Projects (Lines 284–447)

| # | Project | Lines | Key Editable Fields |
|---|---------|-------|-------------------|
| 1 | **Scratch Assay Analysis** | [295–331](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L295-L331) | Category (L301), Title (L302), Description (L304), Status (L309), Details (L318–329) |
| 2 | **Metagenomics Analysis** | [334–370](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L334-L370) | Category (L340), Title (L341), Description (L343), Status (L348), Details (L357–368) |
| 3 | **Plant Growth Microbes** | [373–406](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L373-L406) | Category (L379), Title (L380), Description (L382), Status (L387), Details (L396–404) |
| 4 | **Eggplant Tissue Culture** | [409–443](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L409-L443) | Category (L415), Title (L416), Description (L418), Status (L423), Details (L432–441) |

**Project statuses** — Change the class to match the state:
- `project-card__status--ongoing` → green pulse
- `project-card__status--preparation` → amber
- `project-card__status--completed` → solid green

#### ➕ To Add a New Project

Copy an existing `<div class="project-card reveal">` block and update the number, category, title, description, and status. The canvas visual options are: `scratch`, `metagenomics`, `plant`, `eggplant` (defined in [`canvas.js`](file:///c:/_Drive/Notsouselessprojects/Prof-Website/js/canvas.js)).

---

### 5. 📄 Publication (Lines 452–499)

| Content | Line(s) | What to Edit |
|---------|---------|-------------|
| Journal name | [Line 461](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L461) | Text in `<span class="pub-feature__journal">` |
| Paper title | [Line 462](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L462) | Text in `<h3>` |
| Journal metadata | [Lines 467–477](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L467-L477) | Journal, Type, Status fields |
| Paper description | [Lines 479–481](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L479-L481) | Paragraph text |
| **🔗 PubMed link** | [Line 483](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L483) | Replace `href="#"` with actual URL |
| **🔗 DOI link** | [Line 487](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L487) | Replace `href="#"` with actual URL |
| Placeholder note | [Lines 492–495](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L492-L495) | **Delete these lines** once you add real links |

---

### 6. 🎤 Conferences (Lines 504–548)

| # | Conference | Lines |
|---|-----------|-------|
| 1 | CHARUSAT — AR Antagonists talk | [513–522](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L513-L522) |
| 2 | PDEU — CRISPR talk | [524–533](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L524-L533) |
| 3 | HPV Symposium — Personalized Medicine | [535–544](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L535-L544) |

#### ➕ To Add a New Conference

```html
        <article class="conf-item">
          <span class="conf-item__date">Month Day, Year</span>
          <div class="conf-item__content">
            <h3 class="conf-item__title">Your Talk Title</h3>
            <p class="conf-item__venue">Presented at Venue Name, City</p>
          </div>
          <span class="conf-item__icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          </span>
        </article>
```

---

### 7. 🧠 Neuroscience / Future Interests (Lines 553–598)

| Content | Line(s) |
|---------|---------|
| Section title | [Line 560](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L560) |
| Personal statement (blockquote) | [Line 564](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L564) |
| Research Interests | [Lines 569–572](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L569-L572) |
| Exploring | [Lines 574–578](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L574-L578) |
| Dissertation Interests | [Lines 580–584](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L580-L584) |
| Open Questions | [Lines 586–590](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L586-L590) |

---

### 8. 🛠️ Technical Skills (Lines 603–678)

| Skill Category | Lines | Tag Class |
|---------------|-------|-----------|
| Molecular & Cellular Biology | [618–628](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L618-L628) | `<span class="tag">` |
| Analytical Techniques | [636–645](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L636-L645) | `<span class="tag tag--accent">` |
| Computational & Analytical | [653–660](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L653-L660) | `<span class="tag tag--neuro">` |
| Other Laboratory | [668–673](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L668-L673) | `<span class="tag tag--outline">` |

To add a new skill: just add `<span class="tag">New Skill</span>` inside the right category's `<div class="skill-category__tags">`.

---

### 9. 🎓 Education & Achievements (Lines 683–720)

| Content | Line(s) |
|---------|---------|
| University name | [Line 696](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L696) |
| Degree | [Line 697](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L697) |
| CGPA | [Line 701](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L701) |
| Location | [Line 705](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L705) |
| Achievement title | [Line 714](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L714) |
| Achievement description | [Line 715](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L715) |

---

### 10. ✨ Beyond the Bench (Lines 725–753)

| Content | Line(s) |
|---------|---------|
| Intro text | [Lines 730–732](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L730-L732) |
| Writing & Reflections | [Lines 737–740](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L737-L740) |
| Reading | [Lines 742–745](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L742-L745) |
| Creative Projects | [Lines 747–750](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L747-L750) |

---

### 11. 📬 Contact & Links (Lines 758–793)

| Link | Line(s) | Current Value |
|------|---------|--------------|
| Email | [Line 768](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L768) | `jvgharia@gmail.com` ✅ |
| LinkedIn | [Line 772](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L772) | `https://www.linkedin.com/in/jaimina-gharia` ✅ |
| **🔗 ORCID** | [Line 776](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L776) | `#` ⚠️ **Needs URL** |
| **🔗 Google Scholar** | [Line 780](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L780) | `#` ⚠️ **Needs URL** |
| **📎 CV download** | [Line 787](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L787) | ✅ Fixed → `Jaimina Gharia_Updated.pdf` |

---

### 12. 🦶 Footer (Lines 798–804)

| Content | Line(s) |
|---------|---------|
| Copyright year & tagline | [Line 801](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L801) |

---

## 🔄 Common Update Workflows

### Update Your CV
1. Drop the new PDF into the project root: `c:\_Drive\Notsouselessprojects\Prof-Website\`
2. On [Line 787](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L787), change the `href` to match the new filename
3. Commit & push

### Update a Publication Link
1. Go to [Line 483](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L483) (PubMed) or [Line 487](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L487) (DOI)
2. Replace `href="#"` with the actual URL
3. Delete lines [492–495](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L492-L495) (the placeholder note)

### Update Profile Links (ORCID, Scholar)
1. Go to [Line 776](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L776) (ORCID) or [Line 780](file:///c:/_Drive/Notsouselessprojects/Prof-Website/index.html#L780) (Google Scholar)
2. Replace `href="#"` with your profile URL

### Add a New Research Experience
1. Copy the template from [Section 3 above](#3--research-timeline-lines-120279)
2. Paste before line 131 (to appear at the top / most recent)
3. Fill in date, role, org, description, techniques, and details
4. Give the expandable a unique `id`

### Add a New Skill Tag
1. Find the right category in [Section 8 above](#8-️-technical-skills-lines-603678)
2. Add `<span class="tag">New Skill Name</span>` inside the `skill-category__tags` div
3. Use the correct tag class for the category

> [!TIP]
> **Future CV updates**: Keep a consistent naming convention like `Jaimina_Gharia_CV.pdf` so you can just replace the file without editing HTML each time.
