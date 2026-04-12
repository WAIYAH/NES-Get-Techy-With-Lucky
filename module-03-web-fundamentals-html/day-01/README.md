# 📅 Day 01 of Module 03 — What Is HTML? Structure, Tags & Your First Webpage

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what HTML is and its role in building web pages
- Understand how browsers read and render HTML code
- Write a complete HTML document using the standard boilerplate
- Use essential HTML elements: headings, paragraphs, and basic structure tags
- Create and view your first webpage in a browser

---

## 📖 Lesson Content

### What Is HTML?

**HTML** stands for **HyperText Markup Language**. It's the standard language used to create the **structure and content** of every web page on the internet.

Think of HTML as the **skeleton** of a web page. It defines what's on the page — headings, paragraphs, images, links, buttons — but not how it looks (that's CSS) or how it behaves (that's JavaScript).

```
HTML = Structure (what's on the page)
CSS  = Style (how it looks)
JS   = Behaviour (what it does)
```

### How Browsers Render HTML

When you open a web page:

1. Your browser sends a request to a server
2. The server sends back an HTML file
3. The browser reads the HTML **top to bottom**
4. It builds a visual page from the HTML instructions
5. You see the rendered result on your screen

### HTML Elements, Tags & Attributes

HTML is made up of **elements**. Each element is written using **tags**:

```html
<tagname>Content goes here</tagname>
```

- **Opening tag:** `<p>` — starts the element
- **Content:** The text or other elements inside
- **Closing tag:** `</p>` — ends the element

Some elements are **self-closing** (they don't need a closing tag):

```html
<br>    ← line break
<hr>    ← horizontal rule
<img>   ← image
```

**Attributes** add extra information to an element:

```html
<a href="https://google.com">Visit Google</a>
```

Here, `href` is an **attribute** and `"https://google.com"` is its **value**.

### The HTML Boilerplate

Every HTML page starts with the same basic structure. This is called the **boilerplate**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my very first webpage.</p>
</body>
</html>
```

Let's break it down:

| Line | What it does |
|------|-------------|
| `<!DOCTYPE html>` | Tells the browser this is an HTML5 document |
| `<html lang="en">` | The root element — everything goes inside this. `lang="en"` sets the language to English |
| `<head>` | Contains **metadata** — information about the page (not visible on the page itself) |
| `<meta charset="UTF-8">` | Sets the character encoding so special characters display correctly |
| `<meta name="viewport" ...>` | Makes the page responsive on mobile devices |
| `<title>` | The text that appears in the browser tab |
| `<body>` | Contains everything **visible** on the page |
| `<h1>` | A top-level heading |
| `<p>` | A paragraph of text |

### Headings

HTML has 6 heading levels. `<h1>` is the largest and most important; `<h6>` is the smallest:

```html
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<h4>Sub-subsection</h4>
<h5>Minor heading</h5>
<h6>Smallest heading</h6>
```

> ⚠️ **Rule:** Only use **one `<h1>` per page**. It's like the title of a book — there should only be one.

### Paragraphs and Text

```html
<p>This is a paragraph. It contains a block of text.</p>
<p>This is another paragraph. Browsers add space between paragraphs automatically.</p>
```

Other useful text elements:

```html
<strong>Bold text</strong>
<em>Italic text</em>
<br> <!-- Line break -->
<hr> <!-- Horizontal line -->
```

### Comments

Comments are notes for developers — the browser ignores them:

```html
<!-- This is a comment. Users won't see this. -->
```

Use comments to explain your code or temporarily hide elements.

---

## ✅ Step-by-Step Tasks

1. **Create your project folder** — Open VS Code. Create a new folder called `html-day-01`. Open it in VS Code.

2. **Create your first HTML file** — Create a new file called `index.html`. Type `!` and press `Tab` to generate the boilerplate (Emmet shortcut).

3. **Add a title** — Change the `<title>` to "My First Webpage".

4. **Add content** — Inside the `<body>`, add:
   - An `<h1>` with your name
   - A `<p>` introducing yourself (2–3 sentences)
   - An `<h2>` with "Things I Want to Learn"
   - Another `<p>` listing 3 things you want to learn about tech

5. **View in browser** — Right-click the file and select "Open with Live Server". See your page!

6. **Experiment** — Try adding `<strong>`, `<em>`, `<br>`, `<hr>`, and all heading levels. Save and watch the browser update automatically.

---

## 🧠 Knowledge Check

1. What does HTML stand for and what is its purpose?
2. What is the difference between the `<head>` and the `<body>` in an HTML document?
3. Why should you only use one `<h1>` tag per page?

---

## 💪 Challenge

Create a complete "About Me" webpage with the following:

- A proper HTML5 boilerplate
- Your name as the `<h1>`
- A short bio paragraph
- An `<h2>` section called "My Skills" with a paragraph listing 5 skills
- An `<h2>` section called "My Goals" with a paragraph about your goals
- A horizontal rule (`<hr>`) between each section
- At least one `<strong>` and one `<em>` tag
- An HTML comment explaining what each section does

Save it as `about-me.html` in your exercises folder.

---

## 📚 Resources

- 📖 [MDN — Getting Started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started) — The gold standard reference
- 🎥 [HTML Crash Course — Traversy Media](https://www.youtube.com/watch?v=UB1O30fR-EE) — Quick video overview
- 📖 [W3Schools — HTML Tutorial](https://www.w3schools.com/html/) — Interactive examples and try-it-yourself
- 📖 [freeCodeCamp — Basic HTML](https://www.freecodecamp.org/learn/2022/responsive-web-design/) — Free interactive course
- 🎥 [HTML Full Course — freeCodeCamp YouTube](https://www.youtube.com/watch?v=kUMe1FH4CHE) — Comprehensive free video

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting to close tags** — Every opening tag like `<p>` needs a closing `</p>`. Forgetting this can break your entire page layout.
2. **Nesting tags incorrectly** — Tags must close in the reverse order they opened. `<strong><em>text</em></strong>` is correct. `<strong><em>text</strong></em>` is wrong.
3. **Putting visible content in the `<head>`** — The `<head>` section is for metadata only. If you put text there, it won't show up on the page. All visible content goes in `<body>`.

---

## 🧭 Navigation

← Previous: [Module Overview](../) | [Next Day: Text, Links, Images & Lists →](../day-02/)
