# 📅 Day 03 of Module 03 — Tables & Forms

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Create structured HTML tables with headers, rows, and data cells
- Build interactive forms with text inputs, dropdowns, checkboxes, and buttons
- Understand form attributes: action, method, name, required
- Use labels properly for accessibility
- Validate form input using built-in HTML validation

---

## 📖 Lesson Content

### HTML Tables

Tables organise data into rows and columns. They're perfect for schedules, comparison charts, pricing tables, and any structured data.

#### Basic Table Structure

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Language</th>
      <th>Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Lucky</td>
      <td>JavaScript</td>
      <td>Intermediate</td>
    </tr>
    <tr>
      <td>Alice</td>
      <td>Python</td>
      <td>Beginner</td>
    </tr>
  </tbody>
</table>
```

| Tag | Purpose |
|-----|---------|
| `<table>` | Creates the table container |
| `<thead>` | Groups the header row(s) |
| `<tbody>` | Groups the body rows (data) |
| `<tfoot>` | Groups the footer row(s) — totals, summaries |
| `<tr>` | A table row |
| `<th>` | A header cell (bold and centred by default) |
| `<td>` | A data cell |

#### Spanning Columns and Rows

```html
<!-- A cell that spans 2 columns -->
<td colspan="2">This spans two columns</td>

<!-- A cell that spans 3 rows -->
<td rowspan="3">This spans three rows</td>
```

#### Full Table Example

```html
<table>
  <thead>
    <tr>
      <th>Module</th>
      <th>Topic</th>
      <th>Days</th>
      <th>Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>Digital Foundations</td>
      <td>3</td>
      <td>Beginner</td>
    </tr>
    <tr>
      <td>02</td>
      <td>Tools of the Trade</td>
      <td>3</td>
      <td>Beginner</td>
    </tr>
    <tr>
      <td>03</td>
      <td>Web Fundamentals — HTML</td>
      <td>4</td>
      <td>Beginner</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2"><strong>Total</strong></td>
      <td><strong>10</strong></td>
      <td></td>
    </tr>
  </tfoot>
</table>
```

> ⚠️ **Tables are for data, not layout.** In the early days of the web, developers used tables to create page layouts. Don't do this — use CSS Flexbox and Grid instead (you'll learn these in Module 04).

### HTML Forms

Forms are how users **send information** to a website — login forms, search bars, registration pages, contact forms, surveys.

#### Basic Form Structure

```html
<form action="/submit" method="POST">
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Your Email:</label>
  <input type="email" id="email" name="email" required>

  <button type="submit">Send</button>
</form>
```

| Attribute | Purpose |
|-----------|---------|
| `action` | Where to send the form data (a URL) |
| `method` | How to send it: `GET` (in URL) or `POST` (in request body) |
| `name` | The key for this field's data |
| `id` | Unique identifier (links with `<label>`) |
| `required` | The field must be filled before submitting |

#### Input Types

HTML5 gives you many input types — the browser handles validation and mobile keyboards automatically:

```html
<input type="text" placeholder="Enter your name">
<input type="email" placeholder="you@example.com">
<input type="password" placeholder="Enter password">
<input type="number" min="1" max="100">
<input type="tel" placeholder="Phone number">
<input type="url" placeholder="https://...">
<input type="date">
<input type="colour">
<input type="range" min="0" max="100">
<input type="file">
```

#### Labels — Essential for Accessibility

```html
<!-- Method 1: for/id pairing (recommended) -->
<label for="username">Username:</label>
<input type="text" id="username" name="username">

<!-- Method 2: wrapping -->
<label>
  Username:
  <input type="text" name="username">
</label>
```

> ✅ **Always use labels.** They tell screen readers what each input is for. Clicking a label also focuses its linked input — better UX for everyone.

#### Textareas

For multi-line text input:

```html
<label for="message">Your Message:</label>
<textarea id="message" name="message" rows="5" cols="40"
  placeholder="Write your message here..."></textarea>
```

#### Select Dropdowns

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">-- Choose a country --</option>
  <option value="ke">Kenya</option>
  <option value="ug">Uganda</option>
  <option value="tz">Tanzania</option>
  <option value="ng">Nigeria</option>
</select>
```

#### Checkboxes and Radio Buttons

```html
<!-- Checkboxes (select multiple) -->
<fieldset>
  <legend>Skills:</legend>
  <label><input type="checkbox" name="skills" value="html"> HTML</label>
  <label><input type="checkbox" name="skills" value="css"> CSS</label>
  <label><input type="checkbox" name="skills" value="js"> JavaScript</label>
</fieldset>

<!-- Radio buttons (select one) -->
<fieldset>
  <legend>Experience Level:</legend>
  <label><input type="radio" name="level" value="beginner"> Beginner</label>
  <label><input type="radio" name="level" value="intermediate"> Intermediate</label>
  <label><input type="radio" name="level" value="advanced"> Advanced</label>
</fieldset>
```

- **Checkboxes** = multiple selections allowed (same `name` attribute)
- **Radio buttons** = only ONE can be selected (same `name` groups them)
- **`<fieldset>` and `<legend>`** = group related inputs with a visible label

#### Built-in HTML Validation

```html
<input type="text" required minlength="3" maxlength="50">
<input type="email" required>
<input type="number" min="18" max="99">
<input type="text" pattern="[A-Za-z]+" title="Letters only">
```

The browser handles the validation — no JavaScript needed for basic checks!

---

## ✅ Step-by-Step Tasks

1. **Build a data table** — Create `table-practice.html`. Build a table showing 5 countries with columns: Country, Capital, Population, Currency. Add a `<thead>`, `<tbody>`, and `<tfoot>` with a total row using `colspan`.

2. **Build a contact form** — Create `contact.html`. Add a form with: name (text), email (email), subject (select dropdown with 3 options), message (textarea), and a submit button. All fields should be `required`.

3. **Build a survey form** — Create `survey.html`. Add a form with: name, age (number), experience level (radio buttons), skills (checkboxes — at least 5 options), favourite editor (dropdown), additional comments (textarea), and a submit button.

4. **Add validation** — Go back to your contact form. Add `minlength`, `maxlength`, and `pattern` validation to the name field. Test that the browser shows error messages when you submit with invalid data.

5. **Style-prep** — Add `id` and `class` attributes to your form elements and table. You'll use these to style with CSS in Module 04.

---

## 🧠 Knowledge Check

1. What is the difference between `<th>` and `<td>` in HTML tables?
2. Why should you always use `<label>` with form inputs?
3. What's the difference between checkboxes and radio buttons?

---

## 💪 Challenge

Build a **"Course Registration Form"** page (`registration.html`):

- Student info: full name, email, phone, date of birth
- Course selection: a dropdown with at least 6 courses
- Schedule preference: radio buttons (Morning / Afternoon / Evening)
- Skills: checkboxes for at least 8 different tech skills
- A textarea for "Why do you want to learn to code?"
- Agreement checkbox: "I accept the terms and conditions"
- A submit and a reset button
- Use `<fieldset>` and `<legend>` to group related fields
- Add HTML validation to every field that needs it

---

## 📚 Resources

- 📖 [MDN — HTML Tables](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics) — Official guide
- 📖 [MDN — Web Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms) — Comprehensive form guide
- 📖 [W3Schools — HTML Forms](https://www.w3schools.com/html/html_forms.asp) — Quick reference
- 📖 [MDN — Client-side Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) — Validation without JavaScript
- 🎥 [HTML Forms Tutorial — Web Dev Simplified](https://www.youtube.com/watch?v=fNcJuPIZ2WE) — Beginner video

---

## 🐛 Common Mistakes to Avoid

1. **Using tables for page layout** — Tables are for tabular data only. Use CSS Flexbox and Grid for layout. Screen readers announce table data differently.
2. **Missing `name` attribute on form fields** — Without `name`, the field's data won't be included when the form is submitted. It's easy to forget.
3. **Not linking labels to inputs** — If the `for` attribute on `<label>` doesn't match the `id` on the input, clicking the label won't focus the input. This hurts usability and accessibility.

---

## 🧭 Navigation

← [Previous Day: Text, Links, Images & Lists](../day-02/) | [Next Day: Semantic HTML & Accessibility →](../day-04/)
