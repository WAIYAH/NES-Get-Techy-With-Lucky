# 📋 PLAN.md — Get Techy with Lucky

## Project Vision

Get Techy with Lucky is a free-to-start, structured learning platform that takes everyday people from zero digital knowledge to job-ready software developers — one module at a time. Built by a developer, for the people. The platform is designed to be professional, scalable, and monetisable — serving thousands of learners across Africa and globally through a 10-module progressive curriculum hosted on GitHub.

---

## Phased Execution Plan

### Phase 1 — Root Foundation Files
**Goal:** Establish the repository's identity, governance, and entry point.

**Files to create:**
1. `README.md` — Platform homepage with branding, curriculum table, monetisation section, instructor bio
2. `.gitignore` — Standard ignores for web dev projects
3. `CONTRIBUTING.md` — Community contribution guidelines
4. `CODE_OF_CONDUCT.md` — Contributor Covenant-based community standards
5. `LICENSE` — Creative Commons Attribution 4.0 International

**Files to move:**
- `Tech Pulse Insider.png` → `assets/Tech-Pulse-Insider.png`

**Files to create (placeholder):**
- `assets/banner.png` — (placeholder noted, not generated as binary)

**Order:** README.md → .gitignore → CONTRIBUTING.md → CODE_OF_CONDUCT.md → LICENSE

---

### Phase 2 — Course Outline
**Goal:** Create the central curriculum roadmap document.

**Files to create:**
1. `course-outline/README.md` — Full visual curriculum map, learning paths, prerequisites, estimated hours

**Order:** Single file.

---

### Phase 3 — Module Directory Structure & READMEs
**Goal:** Create all 10 module folders with their overview READMEs and day subfolders with exercises directories.

**Folders & files to create (in order, Module 01 → 10):**

1. `module-01-digital-foundations/README.md` + `day-01/`, `day-02/`, `day-03/` (each with `exercises/`)
2. `module-02-tools-of-the-trade/README.md` + `day-01/`, `day-02/`, `day-03/` (each with `exercises/`)
3. `module-03-web-fundamentals-html/README.md` + `day-01/` through `day-04/` (each with `exercises/`)
4. `module-04-web-styling-css/README.md` + `day-01/` through `day-05/` (each with `exercises/`)
5. `module-05-frontend-js/README.md` + `day-01/` through `day-05/` (each with `exercises/`)
6. `module-06-frontend-mastery/README.md` + `day-01/` through `day-04/` (each with `exercises/`)
7. `module-07-backend-node-api/README.md` + `day-01/` through `day-04/` (each with `exercises/`)
8. `module-08-databases/README.md` + `day-01/` through `day-03/` (each with `exercises/`)
9. `module-09-deployment-devops/README.md` + `day-01/` through `day-04/` (each with `exercises/`)
10. `module-10-career-launch/README.md` + `day-01/` through `day-04/` (each with `exercises/`)

**Order:** Module 01 through Module 10, sequentially.

---

### Phase 4 — Day 01 README for Every Module
**Goal:** Create the full lesson content for Day 01 of each module as the template/standard for all future day content.

**Files to create:**
1. `module-01-digital-foundations/day-01/README.md`
2. `module-02-tools-of-the-trade/day-01/README.md`
3. `module-03-web-fundamentals-html/day-01/README.md`
4. `module-04-web-styling-css/day-01/README.md`
5. `module-05-frontend-js/day-01/README.md`
6. `module-06-frontend-mastery/day-01/README.md`
7. `module-07-backend-node-api/day-01/README.md`
8. `module-08-databases/day-01/README.md`
9. `module-09-deployment-devops/day-01/README.md`
10. `module-10-career-launch/day-01/README.md`

**Exercise starter & solution files** will also be created in each `day-01/exercises/` folder.

**Order:** Module 01 → Module 10, sequentially.

---

### Phase 5 — Remaining Day READMEs (All Modules)
**Goal:** Fill in all remaining day content across all modules.

**Files to create:**
- Module 01: day-02, day-03
- Module 02: day-02, day-03
- Module 03: day-02, day-03, day-04
- Module 04: day-02, day-03, day-04, day-05
- Module 05: day-02, day-03, day-04, day-05
- Module 06: day-02, day-03, day-04
- Module 07: day-02, day-03, day-04
- Module 08: day-02, day-03
- Module 09: day-02, day-03, day-04
- Module 10: day-02, day-03, day-04

**Total remaining day files:** 29 READMEs + associated exercise files.

**Order:** Module 01 remaining days → Module 10 remaining days.

---

### Phase 6 — Integration of Existing Content
**Goal:** Move and integrate existing files into the new module structure without deleting anything.

**Mapping (see Existing Files Audit below for details):**
- Existing HTML/CSS/JS tutorial notes → Integrate into relevant module day content
- Sample Portfolio project → Reference/link from Module 06 and Module 10
- Portfolio templates → Reference from Module 10

**Order:** After all new structure is in place.

---

### Phase 7 — Polish & Quality Assurance
**Goal:** Ensure all navigation links work, cross-references are correct, and all files follow the style guide.

**Tasks:**
1. Verify all ← Previous / Next → navigation links in every README
2. Verify curriculum table links in root README
3. Verify module prerequisite references
4. Ensure consistent emoji usage, formatting, and tone
5. Final tree structure confirmation

---

## Existing Files Audit

### Files Inventory & Destination Mapping

| # | Current Location | Content Summary | Destination Module/Day | Action |
|---|-----------------|-----------------|----------------------|--------|
| 1 | `Tech Pulse Insider.png` | Brand image | `assets/Tech-Pulse-Insider.png` | Move (rename, no spaces) |
| 2 | `~$rriculum.docx` | Temp Word file | N/A | Ignore (temp file) |
| 3 | `~$ml Mastery.docx` | Temp Word file | N/A | Ignore (temp file) |
| 4 | `COURSE OUTLINE/Course Outline.docx` | Course structure doc | `course-outline/legacy/` | Preserve as reference |
| 5 | `COURSE OUTLINE/Comprehensive Curriculum.docx` | Full curriculum doc | `course-outline/legacy/` | Preserve as reference |
| 6 | `DAY 1/1. Setting the Developer Mindset.docx` | Developer mindset training | Module 02, Day 01 reference | Preserve in `module-02/legacy/` |
| 7 | `DAY 1/The-Modern-Developer-Foundation.pptx` | Foundation presentation | Module 02, Day 01 reference | Preserve in `module-02/legacy/` |
| 8 | `DAY 1/VERSION CONTROL/Version Control.pdf` | Version control guide | Module 02, Day 02 reference | Preserve in `module-02/day-02/resources/` |
| 9 | `DAY 1/VERSION CONTROL/Version Control.docx` | Version control doc | Module 02, Day 02 reference | Preserve in `module-02/day-02/resources/` |
| 10 | `DAY 1/VERSION CONTROL/Git-cheat-sheet.pdf` | Git cheat sheet | Module 02, Day 02 reference | Preserve in `module-02/day-02/resources/` |
| 11 | `DAY 1/VERSION CONTROL/Git and Vs code.pdf` | Git + VS Code guide | Module 02, Day 02 reference | Preserve in `module-02/day-02/resources/` |
| 12 | `DAY 1/VERSION CONTROL/Git and Vs code.docx` | Git + VS Code doc | Module 02, Day 02 reference | Preserve in `module-02/day-02/resources/` |
| 13 | `DAY 1/Github Essentials/Friday-demos2026/README.md` | Demo repo description | Module 02, Day 02 example | Preserve in `module-02/day-02/resources/` |
| 14 | `DAY 2/Software Engineering Concepts.pdf` | SE concepts | Module 02, Day 01 reference | Preserve in `module-02/legacy/` |
| 15 | `DAY 2/Software Engineering Concepts.docx` | SE concepts | Module 02, Day 01 reference | Preserve in `module-02/legacy/` |
| 16 | `DAY 2/Git Init/index.html` | Basic landing page HTML | Module 03, Day 01 example | Integrate as exercise starter |
| 17 | `DAY 2/Git Init/index.css` | Empty CSS file | Module 04, Day 01 exercise | Integrate as exercise starter |
| 18 | `DAY 2/Git Init/main.py` | Empty Python file | N/A (out of scope) | Preserve in legacy |
| 19 | `DAY 3/Get-Techy-with-Lucky/README.md` | Project intro | Root README reference | Content integrated into new root README |
| 20 | `DAY 3/Get-Techy-with-Lucky/Assignment1.md` | Git + HTML assignment | Module 03, Day 04 exercise | Integrate as assignment |
| 21 | `DAY 3/Get-Techy-with-Lucky/html.md` | HTML guide | Module 03, Day 01 supplementary | Integrate/reference in Module 03 |
| 22 | `DAY 3/Get-Techy-with-Lucky/css.md` | CSS notes | Module 04, Day 01 supplementary | Integrate/reference in Module 04 |
| 23 | `DAY 3/Get-Techy-with-Lucky/javascript.md` | JS notes | Module 05, Day 01 supplementary | Integrate/reference in Module 05 |
| 24 | `DAY 3/Get-Techy-with-Lucky/portfolio-guide.md` | Portfolio building guide | Module 10, Day 01 reference | Integrate/reference in Module 10 |
| 25 | `DAY 3/Get-Techy-with-Lucky/index.html` | HTML Mastery reference | Module 03, Day 04 example | Integrate as advanced example |
| 26 | `DAY 3/Get-Techy-with-Lucky/test.html` | Empty HTML template | N/A | Ignore (empty test file) |
| 27 | `DAY 3/Get-Techy-with-Lucky/Sample Portfolio/Kcau-Ajira-Portfolio/*` | Complete multi-page portfolio site (15 pages, CSS, JS, images) | Module 06 & Module 10 reference project | Preserve as `samples/kcau-ajira-portfolio/` |
| 28 | `DAY 3/Portfolio One/index.html` | Modern portfolio template | Module 10, Day 01 example | Preserve as `samples/portfolio-one/` |
| 29 | `DAY 3/Portfolio Two/` | Empty folder | N/A | Ignore (empty) |
| 30 | `Day 4/Html Mastery.docx` | Advanced HTML doc | Module 03 reference | Preserve in `module-03/legacy/` |

**Key Principle:** No existing file will be deleted. Files will be moved to their appropriate new location or preserved in `legacy/` folders within the relevant module.

---

## Risk & Dependency Map

| Phase | Depends On | Risk | Mitigation |
|-------|-----------|------|------------|
| Phase 1 | None | Root README links to modules that don't exist yet | Use relative links; they'll resolve once Phase 3 completes |
| Phase 2 | Phase 1 | Course outline references module folders | Same as above — links resolve after Phase 3 |
| Phase 3 | Phase 1 | Module README navigation links need all modules to exist | Create all module folders in sequence within single phase |
| Phase 4 | Phase 3 | Day content needs module folder structure | Phase 3 must fully complete first |
| Phase 5 | Phase 4 | Remaining days follow the template set in Phase 4 | Phase 4 establishes the pattern |
| Phase 6 | Phase 3+ | Moving files could break existing references | Copy rather than move; keep originals until verified |
| Phase 7 | All prior | Broken links, format inconsistencies | Systematic review of every file |

---

## Completion Checklist

- [x] **Phase 1** — Root Foundation Files (README.md, .gitignore, CONTRIBUTING.md, CODE_OF_CONDUCT.md, LICENSE)
- [x] **Phase 2** — Course Outline (course-outline/README.md)
- [x] **Phase 3** — All 10 Module READMEs + folder structures with day subfolders and exercises directories
- [x] **Phase 4** — Day 01 README for all 10 modules + exercise starter/solution files
- [x] **Phase 5** — All remaining day READMEs (29 files) + exercise files
- [x] **Phase 6** — Existing content migrated and integrated into new structure
- [x] **Phase 7** — QA pass — navigation links, formatting, consistency verified

---

*Last updated: April 12, 2026*
*Status: All 7 phases complete ✅*
