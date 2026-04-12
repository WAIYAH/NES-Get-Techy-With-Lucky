# 📅 Day 03 of Module 02 — Markdown & Documentation

⏱ **Estimated Time:** 2 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what Markdown is and why developers use it everywhere
- Write formatted content using Markdown syntax — headings, lists, links, images, code blocks, tables
- Create a professional README.md file for a project
- Preview Markdown in VS Code and on GitHub
- Understand when and where Markdown is used in the real world

---

## 📖 Lesson Content

### What Is Markdown?

Markdown is a **lightweight way to format text** using simple symbols. No clicking buttons, no menus — just type special characters and your text becomes formatted.

It was created in 2004 by John Gruber (with help from Aaron Swartz) to make writing for the web easier.

**Where is Markdown used?**
- GitHub READMEs and documentation (like this file you're reading!)
- Stack Overflow answers
- Slack and Discord messages
- Notion, Obsidian, and other note-taking apps
- Technical blogs and wikis
- Jupyter Notebooks

> 💡 Every single file in this course is written in Markdown. You've been reading it the whole time!

### Markdown Syntax — The Essentials

#### Headings

```markdown
# Heading 1 (biggest)
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6 (smallest)
```

#### Text Formatting

```markdown
**bold text**
*italic text*
***bold and italic***
~~strikethrough~~
`inline code`
```

Renders as: **bold text**, *italic text*, ***bold and italic***, ~~strikethrough~~, `inline code`

#### Lists

**Unordered (bullet) list:**
```markdown
- Item one
- Item two
  - Nested item
  - Another nested item
- Item three
```

**Ordered (numbered) list:**
```markdown
1. First step
2. Second step
3. Third step
```

#### Links and Images

```markdown
[Link text](https://www.example.com)
[Link with title](https://www.example.com "Hover text")

![Alt text for image](image-url.jpg)
![Logo](https://via.placeholder.com/150 "Company Logo")
```

#### Code

**Inline code** — wrap with single backticks:
```markdown
Use the `git commit` command to save changes.
```

**Code block** — wrap with triple backticks and specify the language:

````markdown
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```
````

This gives you **syntax highlighting** — the code is coloured based on the language.

Supported languages: `javascript`, `python`, `html`, `css`, `bash`, `json`, `sql`, and many more.

#### Tables

```markdown
| Name | Role | Experience |
|------|------|-----------|
| Lucky | Instructor | 5+ years |
| You | Student | Getting started |
```

Renders as:

| Name | Role | Experience |
|------|------|-----------|
| Lucky | Instructor | 5+ years |
| You | Student | Getting started |

**Alignment:**
```markdown
| Left-aligned | Centre-aligned | Right-aligned |
|:------------|:--------------:|--------------:|
| Text        | Text           | Text          |
```

#### Blockquotes

```markdown
> This is a blockquote.
> Great for highlighting important information.

> 💡 **Tip:** Use emoji + bold for callout boxes.
```

#### Horizontal Rule

```markdown
---
```

Draws a line across the page, useful for separating sections.

#### Task Lists (GitHub-flavoured)

```markdown
- [x] Completed task
- [ ] Incomplete task
- [ ] Another task to do
```

- [x] Completed task
- [ ] Incomplete task
- [ ] Another task to do

### Writing a Professional README

Every GitHub project should have a `README.md`. It's the first thing people see when they visit your repository. Think of it as the **front page** of your project.

**A great README template:**

```markdown
# Project Name

Short description of what the project does.

## Features

- Feature one
- Feature two
- Feature three

## Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

1. Clone the repo: `git clone https://github.com/user/project.git`
2. Install dependencies: `npm install`
3. Start the app: `npm start`

## Usage

Explain how to use the project with examples.

## Contributing

Pull requests are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

This project is licensed under the MIT License.
```

### Previewing Markdown in VS Code

VS Code has a **built-in Markdown previewer**:

1. Open any `.md` file
2. Press `Ctrl + Shift + V` — opens a preview tab
3. Or press `Ctrl + K V` — opens a side-by-side preview (write on left, see result on right)

**Useful VS Code extensions for Markdown:**
- **Markdown All in One** — shortcuts, table formatting, auto-preview
- **markdownlint** — catches formatting mistakes
- **Markdown Preview Enhanced** — more powerful preview with diagrams

---

## ✅ Step-by-Step Tasks

1. **Create a Markdown file** — In VS Code, create a new file called `practice.md`. Add examples of every Markdown element: headings (all 6 levels), bold, italic, a link, an image, a code block, a table, and a task list.

2. **Preview your Markdown** — Use `Ctrl + K V` in VS Code to see a live side-by-side preview. Make edits and watch the preview update in real-time.

3. **Write a project README** — Create a `README.md` for an imaginary project called "Task Tracker". Include: project name, description, features list, installation steps, usage instructions, and license.

4. **Push to GitHub** — Create a new GitHub repository. Push your `practice.md` and project `README.md`. View them rendered on GitHub — notice how GitHub automatically displays the README on the repository page.

5. **Explore real READMEs** — Visit 3 popular GitHub repositories (try [facebook/react](https://github.com/facebook/react), [microsoft/vscode](https://github.com/microsoft/vscode), [ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)). Study what makes their READMEs effective.

---

## 🧠 Knowledge Check

1. What is Markdown and why do developers use it instead of Word or Google Docs?
2. How do you create a code block with syntax highlighting in Markdown?
3. What keyboard shortcut opens the Markdown side-by-side preview in VS Code?

---

## 💪 Challenge

Create a **personal developer profile** in Markdown called `ABOUT-ME.md`:

- Your name as a Heading 1
- A short bio paragraph (2-3 sentences)
- A "Skills" section with a table: Skill | Level (Beginner/Intermediate/Advanced) | Learning Since
- A "Goals" section with a task list of 5 things you want to achieve
- A "Favourite Resources" section with at least 3 links
- A "Connect with Me" section with placeholder social media links
- At least one code block showing a snippet in any language you like
- A horizontal rule between each section

Push it to GitHub and share the link!

---

## 📚 Resources

- 📖 [Markdown Guide — markdownguide.org](https://www.markdownguide.org/) — Comprehensive Markdown reference
- 📖 [GitHub Flavoured Markdown Spec](https://github.github.com/gfm/) — GitHub's extended Markdown features
- 📖 [Mastering Markdown — GitHub Guides](https://guides.github.com/features/mastering-markdown/) — Quick visual guide
- 🎥 [Markdown Crash Course — Traversy Media](https://www.youtube.com/watch?v=HUBNt18RFbo) — Video tutorial
- 📖 [Dillinger.io](https://dillinger.io/) — Online Markdown editor with live preview

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting blank lines before lists and code blocks** — Markdown needs an empty line before a list or code block to render correctly. Without it, the formatting breaks.
2. **Using wrong heading levels** — Don't skip from `#` to `###`. Use heading levels in order for accessibility and proper document structure.
3. **Not previewing before pushing** — Always preview your Markdown locally before pushing to GitHub. What looks right in your editor might render differently on GitHub.

---

## 🧭 Navigation

← [Previous Day: Git & GitHub — Version Control](../day-02/) | [Next Module: Web Fundamentals — HTML →](../../module-03-web-fundamentals-html/)
