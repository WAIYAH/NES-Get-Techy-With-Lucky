# Contributing to Get Techy with Lucky

First off — thank you for considering contributing! 🎉

This project exists because of people like you who want to make tech education accessible and world-class. Every contribution, no matter how small, makes a difference.

---

## 📋 Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Contribution Workflow](#contribution-workflow)
- [Content Guidelines](#content-guidelines)
- [Style Guide](#style-guide)
- [Reporting Issues](#reporting-issues)
- [Code of Conduct](#code-of-conduct)

---

## Ways to Contribute

There are many ways to contribute, and not all of them require writing code:

| Contribution | Description |
|-------------|-------------|
| 🐛 **Fix typos & errors** | Spot a mistake? Fix it and submit a PR |
| 📝 **Improve explanations** | Make a concept clearer or add a better example |
| 🆕 **Add new exercises** | Create practice problems with starter and solution files |
| 📚 **Add resources** | Suggest helpful links, videos, or tools for a lesson |
| 🌍 **Translate content** | Help make lessons accessible in other languages |
| 💡 **Suggest improvements** | Open an issue with your idea |
| ⭐ **Star the repo** | It helps others discover this platform |

---

## Getting Started

1. **Fork this repository** — Click the "Fork" button at the top right of the repo page
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/get-techy-with-lucky.git
   cd get-techy-with-lucky
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b fix/typo-in-module-03
   ```
4. **Make your changes** — follow the style guide below
5. **Commit with a clear message**:
   ```bash
   git commit -m "fix: correct HTML tag example in module-03 day-02"
   ```
6. **Push to your fork**:
   ```bash
   git push origin fix/typo-in-module-03
   ```
7. **Open a Pull Request** — describe what you changed and why

---

## Contribution Workflow

```
Fork → Clone → Branch → Edit → Commit → Push → Pull Request
```

### Branch Naming Convention

| Type | Format | Example |
|------|--------|---------|
| Bug fix | `fix/description` | `fix/broken-link-module-05` |
| New content | `content/description` | `content/module-03-day-03-exercises` |
| Improvement | `improve/description` | `improve/css-flexbox-explanation` |
| Translation | `translate/language` | `translate/swahili-module-01` |

### Commit Message Format

Use clear, descriptive commit messages:

```
type: short description

- fix: correct something broken
- content: add new lesson material
- improve: enhance existing content
- docs: update documentation
- style: formatting changes (no content change)
```

---

## Content Guidelines

When adding or editing lesson content, follow these rules:

1. **Audience is absolute beginners** — never assume prior knowledge unless the module prerequisites say otherwise
2. **Explain jargon** — every technical term must be explained the first time it appears
3. **Use real examples** — abstract explanations don't stick. Show, don't just tell
4. **Include code blocks** — always specify the language: ` ```html `, ` ```css `, ` ```js `, ` ```bash `
5. **Test your code** — every code example must work. Copy-paste it and verify
6. **Add exercises** — every day folder should have a `exercises/` directory with:
   - `starter.html` (or `.css`, `.js`) — the starting point for learners
   - `solution.html` (or `.css`, `.js`) — the completed version

---

## Style Guide

| Element | Rule |
|---------|------|
| **Tone** | Encouraging, direct, human — like a knowledgeable friend |
| **Language** | Simple English. Short sentences. No unnecessary jargon |
| **Emoji** | Use sparingly — only where they guide the eye (✅ ⚠️ 📚 💪) |
| **Headings** | Use `##` for main sections, `###` for subsections |
| **Code blocks** | Always specify language. Use fenced blocks (triple backticks) |
| **Links** | Use relative paths for internal links. Full URLs for external |
| **Images** | Place in the nearest `assets/` or `img/` folder. Use descriptive alt text |
| **File names** | Lowercase, hyphens instead of spaces: `my-file-name.md` |

---

## Reporting Issues

Found a bug, broken link, or unclear explanation? Open an issue:

1. Go to the [Issues tab](../../issues)
2. Click "New Issue"
3. Use a clear title: e.g., "Module 03, Day 02: broken code example in forms section"
4. Describe the problem and, if possible, suggest a fix
5. Add relevant labels if you can (bug, enhancement, content, etc.)

---

## Code of Conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md). We are building an inclusive, respectful community. Harassment, discrimination, and disrespect will not be tolerated.

---

## 🙏 Thank You

Every contribution — from fixing a single typo to writing an entire lesson — makes this platform better for thousands of learners. You're helping someone change their life through tech education.

**Let's build something incredible together.**
