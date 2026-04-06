# Build Canvas Courses Faster with GenAI
### Symposium on AI in Higher Education · 30-Minute Workshop

> From course design to AI-assisted Canvas site build.

---

## 🚀 Live Site

**[ericlacy.github.io/ai-canvas-dev-workshop](https://ericlacy.github.io/ai-canvas-dev-workshop/)**

---

## 📦 File Inventory

| File | Version | What it is |
|---|---|---|
| `index.html` | v1.0 | Workshop site — problem framing, CRISP framework, 8-step CDD build sequence, research citations, resource kit |
| `canvas-welcome-page.html` | v1.0 | BUS 3410 demo — Course Welcome page, paste-ready Canvas HTML |
| `canvas-demo-page.html` | v1.0 | BUS 3410 demo — Course Home page, paste-ready Canvas HTML |
| `course-design-doc.pdf` | v1.0 | BUS 3410 Course Design Document — the source artifact for the demo |
| `speaker-script.pdf` | v1.0 | Facilitator script — pre-session checklist, ACTION/SAY/TRANSITION/RISK cues |
| `DesignPLUS-Canvas-Prompt.rtf` | v1.3 | DesignPLUS UX Page Builder system prompt |
| `README.md` | v1.0 | This file |

---

## 🎯 The Workflow

1. Finish your Course Design Document (outcomes · assessments · module sequence)
2. Attach the CDD to any AI tool (Claude, ChatGPT, Gemini)
3. Copy each step from the build sequence — eight steps, one Canvas course
4. Read, correct, paste into Canvas RCE, publish

Steps 1–5 build course pages. Steps 6–8 build assignment pages.

---

## 🏗 Deploy on GitHub Pages

1. Fork or clone this repo
2. **Settings → Pages → Deploy from branch → main → / (root)**
3. Save — live at `https://YOUR-USERNAME.github.io/REPO-NAME/`

---

## 🎓 Demo Course

[BUS 3410 — Data Storytelling for Business](https://usfca.instructure.com/courses/1610180)

---

## 📋 Changelog

### v1.0 — April 7, 2026 (Release)

**Workshop Site (index.html)**
- Hero banner: presenter strip (Eric Lacy · Term Professor · BAIS · April 7, 2026), QR code inline beside title, scroll-lock on page load
- Problem framing section: rewritten around CDD-to-Canvas translation gap ("The Time Tax," "The Translation Gap," "The Missed Opportunity")
- Tagline: "From course design to AI-assisted Canvas site build"
- CRISP Framework: Context row revised to "course code, title, credits, delivery modality, term length"; Specs row notes DesignPLUS; research citations block added (Mueen et al. 2016; Bonafini et al. 2017; Johnson et al. 2024; Osman et al. 2024)
- Workflow section: renamed "The Rules for Every Build"; numbered circles replaced with ✦ symbols to avoid conflict with 8-step sequence count
- 8-step CDD → Canvas build sequence: replaces individual CRISP-based prompts; Steps 1–5 produce course pages (green), Steps 6–8 produce assignment pages (gold); QA check appended to all 8 steps
- Agenda: updated to reflect CDD attachment workflow; rubric references removed; CRISP repositioned as "why the sequence works"
- GenAI agnostic: all Claude-specific references replaced with "your AI tool" / "any AI tool"
- Font: Arial throughout; DM Mono retained for code/monospace elements
- QR code: embedded as base64 PNG for `https://ericlacy.github.io/ai-canvas-dev-workshop/`
- Version number: v1.0 in footer and meta tag

**Canvas Demo Pages**
- `canvas-welcome-page.html`: Week 1 checklist corrected to match CDD Stage 3 exactly (Ch. 1–2 reading, Chart Matching Quiz, CLEAR rubric discussion); v1.0 in footer
- `canvas-demo-page.html`: Start Here checklist corrected to match CDD; v1.0 in footer
- Both pages: placeholder `#` links, DesignPLUS CSS class references retained

**Course Design Document (course-design-doc.docx)**
- BUS 3410 backward design artifact: Stage 1 outcomes, Stage 2 assessment map, Stage 3 three-module sequence
- CLO mapping row added to each module table; MO numbering removed (bullets)
- v1.0 added to designed date field

**Speaker Script (speaker-script.docx)**
- Full rewrite aligned to CDD attachment workflow (replaces legacy CRISP-prompt demo)
- Pre-session checklist added as page 1 (pre-load CDD, verify Canvas link, prepare fallback)
- New `⚠ RISK` cue type for failure-mode handling (slow AI response, fallback procedure)
- File attachment instruction added: how to attach a CDD in Claude, ChatGPT, and Gemini
- Fidelity instruction: "Read before you paste — edit before you publish"
- Q&A expanded: six questions with answers including institutional policy and DesignPLUS
- GenAI agnostic: Claude named only in demo disclosure, file attachment mechanics, and Q&A
- v1.0 on cover

**Added to repo**
- `DesignPLUS-Canvas-Prompt.rtf` — v1.3 system prompt for DesignPLUS-formatted Canvas pages

---

Presented by **Eric Lacy** · Term Professor, School of Management, Business Analytics & Information Systems
Symposium on AI in Higher Education · University of San Francisco · April 7, 2026
