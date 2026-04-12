# CSS — Comprehensive Notes
## What is CSS?

CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML or XML documents. It controls the layout, colors, fonts, and overall visual appearance of web pages.

---

## Why Use CSS?

- **Separation of content and design**: Keeps HTML structure clean and focused on content.
- **Reusability**: Styles can be reused across multiple pages.
- **Maintainability**: Easier to update and manage styles in one place.
- **Accessibility**: Enhances user experience and accessibility.

---

## CSS Syntax

```css
selector {
    property: value;
}

head{
    background-colour: red;
}
```

**Example:**
```css
p {
    color: blue;
    font-size: 16px;
}
```

---

## Ways to Add CSS

1. **Inline CSS**
     - Directly in the HTML element using the `style` attribute.
     - Example: `<p style="color: red;">Hello</p>`

2. **Internal CSS**
     - Inside a `<style>` tag within the `<head>` of an HTML document.
     - Example:
         ```html
         <style>
             h1 { color: green; }
         </style>
         ```

3. **External CSS**
     - In a separate `.css` file linked to the HTML.
     - Example:
         ```html
         <link rel="stylesheet" href="styles.css">
         ```

---

## Selectors

- **Element Selector**: `p { }`
- **Class Selector**: `.classname { }`
- **ID Selector**: `#idname { }`
- **Attribute Selector**: `[type="text"] { }`
- **Descendant Selector**: `div p { }`
- **Pseudo-class**: `a:hover { }`
- **Pseudo-element**: `p::first-line { }`

---

## Common Properties

- **Color & Background**
    - `color`, `background-color`, `background-image`
- **Text**
    - `font-size`, `font-family`, `font-weight`, `text-align`, `text-decoration`
- **Box Model**
    - `width`, `height`, `margin`, `padding`, `border`
- **Layout**
    - `display`, `position`, `float`, `flex`, `grid`
- **Others**
    - `opacity`, `z-index`, `overflow`, `cursor`

---

## The Box Model
Every HTML element is a box, consisting of:
- **Content**: The actual content (text, image, etc.)
- **Padding**: Space around the content
- **Border**: Surrounds the padding
- **Margin**: Space outside the border

---

## Responsive Design

- **Media Queries**: Apply styles based on device characteristics.
    ```css
    @media (max-width: 600px) {
        body { font-size: 14px; }
    }
    ```
- **Flexible Units**: Use `%`, `em`, `rem`, `vw`, `vh` for scalable layouts.

---

## Best Practices

- Use external CSS for maintainability.
- Organize styles with comments and logical structure.
- Use semantic class and ID names.
- Minimize use of `!important`.
- Test across browsers and devices.

---

## Useful Resources

- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [W3Schools CSS Tutorial](https://www.w3schools.com/css/)