# 📅 Day 02 of Module 03 — Text, Links, Images & Lists

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Format text using HTML elements — paragraphs, bold, italic, line breaks
- Create hyperlinks to other pages, websites, and sections within a page
- Add images to a web page with proper alt text for accessibility
- Build ordered and unordered lists, including nested lists
- Understand the difference between block-level and inline elements

---

## 📖 Lesson Content

### Text Elements

Yesterday you built your first HTML page with headings. Today we go deeper into text:

#### Paragraphs

The `<p>` tag creates a paragraph. Browsers automatically add space above and below paragraphs.

```html
<p>This is a paragraph. It can contain as much text as you want.</p>
<p>This is another paragraph. The browser puts a gap between them automatically.</p>
```

> 💡 **Important:** HTML ignores extra spaces and line breaks inside elements. Pressing Enter in your code won't create a new line on the page — you need to use tags.

#### Bold and Italic

```html
<strong>This text is bold</strong> — use for important information
<em>This text is italic</em> — use for emphasis

<p>You <strong>must</strong> save your work <em>before</em> closing VS Code.</p>
```

- `<strong>` = semantically important (screen readers will emphasise it)
- `<b>` = visually bold but no extra meaning
- `<em>` = semantically emphasised
- `<i>` = visually italic but no extra meaning

> ✅ **Best practice:** Use `<strong>` and `<em>` over `<b>` and `<i>`. They're better for accessibility.

#### Line Breaks and Horizontal Rules

```html
<p>Line one<br>Line two<br>Line three</p>

<hr>
<!-- Draws a horizontal line across the page -->
```

`<br>` is a **self-closing tag** — it doesn't need a closing tag because it doesn't wrap any content.

#### Other Useful Text Elements

```html
<mark>Highlighted text</mark>
<small>Smaller text — fine print</small>
<del>Deleted text (strikethrough)</del>
<ins>Inserted text (underlined)</ins>
<sub>Subscript — H<sub>2</sub>O</sub>
<sup>Superscript — E = mc<sup>2</sup></sup>
```

### Block vs Inline Elements

This is a fundamental concept in HTML:

| Type | Behaviour | Examples |
|------|-----------|---------|
| **Block** | Takes up the full width, starts on a new line | `<p>`, `<h1>`–`<h6>`, `<div>`, `<ul>`, `<ol>` |
| **Inline** | Only takes up as much width as needed, stays on the same line | `<strong>`, `<em>`, `<a>`, `<img>`, `<span>` |

```html
<!-- Block elements stack vertically -->
<p>Paragraph one (full width)</p>
<p>Paragraph two (new line)</p>

<!-- Inline elements sit side by side -->
<p>This has a <strong>bold word</strong> and a <a href="#">link</a> inline.</p>
```

### Links (Hyperlinks)

Links are what make the web a web — they connect pages together.

#### Basic Link

```html
<a href="https://www.google.com">Go to Google</a>
```

- `<a>` = anchor tag
- `href` = the destination URL (hypertext reference)
- The text between the tags is what the user clicks

#### Link to Another Page in Your Project

```html
<a href="about.html">About Me</a>
<a href="pages/contact.html">Contact Page</a>
```

#### Open Link in a New Tab

```html
<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
```

- `target="_blank"` — opens in a new tab
- `rel="noopener noreferrer"` — security best practice when using `_blank`

#### Link to a Section on the Same Page

```html
<!-- Create an anchor point -->
<h2 id="skills">My Skills</h2>

<!-- Link to that anchor -->
<a href="#skills">Jump to Skills section</a>
```

#### Email and Phone Links

```html
<a href="mailto:lucky@example.com">Email Me</a>
<a href="tel:+254700000000">Call Me</a>
```

### Images

The `<img>` tag adds images to your page. It's a **self-closing tag**.

```html
<img src="photo.jpg" alt="A description of the image" width="400">
```

| Attribute | Purpose |
|-----------|---------|
| `src` | Path to the image file |
| `alt` | Describes the image (for screen readers and when the image can't load) |
| `width` | Width in pixels (optional) |
| `height` | Height in pixels (optional) |

#### Image Sources

```html
<!-- From your project folder -->
<img src="images/profile.jpg" alt="My profile photo">

<!-- From the internet -->
<img src="https://via.placeholder.com/300x200" alt="Placeholder image">
```

#### Image as a Link

```html
<a href="https://github.com">
  <img src="github-logo.png" alt="Visit my GitHub">
</a>
```

> ⚠️ **Always include `alt` text.** It's essential for accessibility — screen readers read it aloud for visually impaired users. It also displays when the image fails to load.

### Lists

#### Unordered List (Bullet Points)

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

#### Ordered List (Numbered)

```html
<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>
```

#### Nested Lists

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
  </li>
  <li>Backend
    <ul>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  </li>
</ul>
```

#### Description List

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — the structure of a web page</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — controls the visual appearance</dd>

  <dt>JavaScript</dt>
  <dd>A programming language that makes web pages interactive</dd>
</dl>
```

---

## ✅ Step-by-Step Tasks

1. **Create a new file** — Create `text-and-links.html` with the full HTML boilerplate. Add a heading, 3 paragraphs with bold and italic text, and a horizontal rule.

2. **Add links** — Add 3 links: one to an external website (new tab), one to a different HTML file in your project, and one that jumps to a section on the same page using an `id`.

3. **Add images** — Add 2 images: one from your computer (create an `images/` folder), and one using a placeholder URL like `https://via.placeholder.com/400x300`.

4. **Build a list** — Create an unordered list of 5 programming languages. Then create an ordered list of the steps to make a cup of tea. Then nest at least one list inside another.

5. **Combine everything** — Build a single page called `all-about-me.html` that includes: your name as `<h1>`, a photo, a paragraph about yourself with bold and italic, a list of your hobbies, and links to 3 favourite websites.

---

## 🧠 Knowledge Check

1. What is the difference between `<strong>` and `<b>`?
2. Why is the `alt` attribute on images important?
3. What attributes do you need to safely open a link in a new tab?

---

## 💪 Challenge

Build a **"Resource Library"** page (`resources.html`) containing:

- A heading and introductory paragraph
- At least 3 sections, each with:
  - A subheading (H2)
  - A description paragraph
  - A list of 3-5 related links
  - An icon or image for each section
- A table of contents at the top that links to each section using `id` anchors
- A "Back to top" link at the bottom

---

## 📚 Resources

- 📖 [MDN — HTML Text Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals) — Official guide
- 📖 [MDN — Creating Hyperlinks](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) — Deep dive on links
- 📖 [MDN — Images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) — Image best practices
- 📖 [W3Schools — HTML Lists](https://www.w3schools.com/html/html_lists.asp) — Quick reference with examples
- 📖 [Web Accessibility — Alt Text](https://www.w3.org/WAI/tutorials/images/) — Writing good alt text

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting alt text on images** — Every `<img>` needs an `alt` attribute. Even if it's decorative, use `alt=""` (empty alt) to tell screen readers to skip it.
2. **Using `<br>` for spacing** — `<br>` is for line breaks in content (like addresses or poems), NOT for adding space between elements. Use CSS margins and padding for spacing.
3. **Not closing list items** — Every `<li>` needs a closing `</li>`. Forgetting it can cause unpredictable layout issues.

---

## 🧭 Navigation

← [Previous Day: HTML Basics — Boilerplate & First Page](../day-01/) | [Next Day: Tables & Forms →](../day-03/)
