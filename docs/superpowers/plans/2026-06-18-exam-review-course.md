# Exam Review Course Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a new exam-review course page from the two PDF review files and connect it to the existing academic writing tutorial.

**Architecture:** Keep the project as a static HTML/CSS/JS site. Add one self-contained `exam-review.html` page, reuse the existing interactive answer toggles and quiz widgets, and add a visible "复习" navigation entry across the site.

**Tech Stack:** Static HTML, existing `style.css`, existing `app.js`, local PDF text extraction for content review.

---

### Task 1: Add Exam Review Course Page

**Files:**
- Create: `exam-review.html`

- [ ] **Step 1: Create a new static course page**

Create `exam-review.html` with the same `<head>`, favicon, stylesheet, `.topbar`, `.wrap`, `.page-head`, `.objectives`, `.flow`, `.block`, `.kp`, `.zh`, `.ex`, `.answer-toggle`, `.answer`, `.quiz`, and `.pager` patterns used by `unit1.html` through `unit8.html`.

- [ ] **Step 2: Organize the two PDFs into course sections**

Use these sections:

1. `I. 考试结构与复习路径`
2. `II. 客观题速训`
3. `III. 改写与翻译`
4. `IV. 论文模块模板`
5. `V. 写作高分模块`
6. `VI. 最后一轮复习清单`

- [ ] **Step 3: Include interactive practice**

Use the existing quiz and answer-toggle patterns:

```html
<span class="answer-toggle">显示参考答案</span>
<div class="answer">...</div>
```

and:

```html
<div class="quiz" data-quiz="mc">
  <p class="stem">...</p>
  <div class="opts row">
    <button class="opt" data-correct>...</button>
    <button class="opt">...</button>
  </div>
  <div class="explain">...</div>
</div>
```

### Task 2: Update Navigation and Homepage Entry

**Files:**
- Modify: `index.html`
- Modify: `unit1.html` through `unit8.html`

- [ ] **Step 1: Add a navigation link**

Add this link after `U8` in every `<nav>` block:

```html
<a href="exam-review.html">复习</a>
```

On `exam-review.html`, mark it active:

```html
<a href="exam-review.html" class="active">复习</a>
```

- [ ] **Step 2: Add a homepage card**

Add a visible card on `index.html` linking to `exam-review.html`, with the title `考前复习课程` and subtitle explaining that it organizes the two review PDFs into exam strategy, objective-question drills, rewriting, translation, and writing templates.

### Task 3: Add Minimal Styles

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Add compact review-page helpers**

Add classes for exam overview bands and template grids:

```css
.review-band { ... }
.review-grid { ... }
.formula { ... }
.pill-list { ... }
```

These must be lightweight and consistent with the existing visual system.

### Task 4: Verify, Commit, and Deploy

**Files:**
- Test: local HTML files

- [ ] **Step 1: Run HTML and content checks**

Run:

```powershell
python work\scripts\verify_content_integration.py
python work\scripts\verify_teaching_flow.py
```

Run a Python HTML parser over `exam-review.html`, `index.html`, and `unit1.html` through `unit8.html`.

- [ ] **Step 2: Check required review-course snippets**

Confirm `exam-review.html` contains:

```text
考前复习课程
客观题 50 分
主观题 50 分
Nominalization
Introduction
Methodology
Results & Discussion
Abstract
图表作文
```

- [ ] **Step 3: Commit and push**

Run:

```powershell
git add exam-review.html index.html unit1.html unit2.html unit3.html unit4.html unit5.html unit6.html unit7.html unit8.html style.css docs/superpowers/plans/2026-06-18-exam-review-course.md
git commit -m "Add exam review course"
git push
```

- [ ] **Step 4: Deploy changed static files**

Upload `exam-review.html`, `index.html`, `unit1.html` through `unit8.html`, and `style.css` to `/var/www/academic-write`.

- [ ] **Step 5: Verify public URL**

Fetch:

```text
https://www.reasonuplink.com/document/academic-write/exam-review.html
```

Confirm status `200` and the review-course snippets are present.
