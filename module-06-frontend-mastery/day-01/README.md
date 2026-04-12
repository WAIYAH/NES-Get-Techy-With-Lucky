# 📅 Day 01 of Module 06 — Introduction to React: Components & Props

⏱ **Estimated Time:** 3–4 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what React is, why it was created, and how component-based architecture works
- Set up a new React project using `create-react-app` or Vite
- Understand JSX — the syntax that blends HTML and JavaScript
- Create functional React components and render them to the screen
- Pass data between components using props

---

## 📖 Lesson Content

### What Is React?

**React** is a JavaScript library for building user interfaces. It was created by Facebook (now Meta) and is the most popular frontend framework in the world.

React lets you build UIs out of small, reusable pieces called **components**. Instead of writing one giant HTML file, you break your interface into independent building blocks.

```
Traditional HTML:
One big file → header + nav + content + footer

React:
<Header />
<Nav />
<Content />
<Footer />
← Each is a reusable component
```

### Why React?

| Problem with vanilla JS | How React solves it |
|------------------------|-------------------|
| Manually updating the DOM is slow and error-prone | React updates only what changed (Virtual DOM) |
| Code gets messy as apps grow | Components keep code organised and reusable |
| Hard to manage data flow in complex UIs | Props and state give you a clear data flow |
| Rebuilding the same UI patterns over and over | Components are reusable across your app |

### Setting Up a React Project

The fastest way to start a React project in 2026 is **Vite**:

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

This creates a project with this structure:

```
my-react-app/
├── public/
├── src/
│   ├── App.jsx       ← Your main component
│   ├── main.jsx      ← Entry point
│   └── App.css       ← Styles
├── index.html
├── package.json
└── vite.config.js
```

Open `http://localhost:5173` in your browser — you should see the Vite + React welcome page.

### JSX — HTML in JavaScript

JSX looks like HTML, but it's actually JavaScript. React uses JSX to describe what the UI should look like:

```jsx
function App() {
    return (
        <div>
            <h1>Hello, React!</h1>
            <p>This is JSX — it looks like HTML but it's JavaScript.</p>
        </div>
    );
}
```

**Key JSX rules:**

1. **Return one parent element** — wrap everything in a single `<div>` or `<>` (fragment)
2. **Use `className` instead of `class`** — `class` is a reserved word in JS
3. **Close all tags** — self-closing tags need a slash: `<img />`, `<br />`
4. **Use `{}` for JavaScript expressions** — `{2 + 2}`, `{name}`, `{items.length}`

```jsx
function Greeting() {
    const name = "Lucky";
    const year = new Date().getFullYear();

    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>The year is {year}.</p>
        </div>
    );
}
```

### Components

A **component** is a JavaScript function that returns JSX. Components are the building blocks of React.

```jsx
// A simple component
function Welcome() {
    return <h1>Welcome to Get Techy with Lucky!</h1>;
}

// Using the component
function App() {
    return (
        <div>
            <Welcome />
            <Welcome />
            <Welcome />
        </div>
    );
}
```

> 💡 Component names **must start with a capital letter**. `<welcome />` won't work — React treats lowercase tags as HTML elements.

### Props — Passing Data to Components

**Props** (short for properties) let you pass data from a parent component to a child component. Think of them as function arguments:

```jsx
// Child component — receives props
function ProfileCard({ name, role, age }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Role: {role}</p>
            <p>Age: {age}</p>
        </div>
    );
}

// Parent component — passes props
function App() {
    return (
        <div>
            <ProfileCard name="Lucky" role="Web Developer" age={28} />
            <ProfileCard name="Grace" role="Designer" age={24} />
            <ProfileCard name="Kevin" role="Data Analyst" age={30} />
        </div>
    );
}
```

**Props rules:**
- Props are **read-only** — a component cannot modify its own props
- Strings use quotes: `name="Lucky"`
- Numbers, booleans, and expressions use curly braces: `age={28}`, `isActive={true}`
- Props flow **one direction** — parent → child (this is called "one-way data flow")

### Rendering Lists

When you have an array of data, use `.map()` to render a list of components:

```jsx
function App() {
    const skills = ["HTML", "CSS", "JavaScript", "React"];

    return (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    );
}
```

> ⚠️ Always add a unique `key` prop when rendering lists. React uses it to efficiently update the DOM.

---

## ✅ Step-by-Step Tasks

1. **Create a React project** — Run `npm create vite@latest profile-app -- --template react`, then `cd profile-app && npm install && npm run dev`.

2. **Clean up** — Delete the default content in `App.jsx`. Replace it with a simple `<h1>My Profile App</h1>`.

3. **Create a component** — Create a new file `src/ProfileCard.jsx`:
   ```jsx
   function ProfileCard({ name, title, bio }) {
       return (
           <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", margin: "10px" }}>
               <h2>{name}</h2>
               <h3>{title}</h3>
               <p>{bio}</p>
           </div>
       );
   }

   export default ProfileCard;
   ```

4. **Use the component** — In `App.jsx`, import and use `ProfileCard` three times with different props.

5. **Render a list** — Create an array of hobbies and render them as an `<ul>` list using `.map()`.

6. **Add conditional rendering** — Pass an `isAvailable` prop to `ProfileCard`. Show "✅ Available for hire" or "❌ Currently unavailable" based on the value.

---

## 🧠 Knowledge Check

1. What is JSX and how is it different from HTML?
2. Why must React component names start with a capital letter?
3. What are props and in which direction do they flow?

---

## 💪 Challenge

Build a **Team Page** with React:

- Create a `TeamMember` component that accepts `name`, `role`, `experience` (years), and `skills` (array) as props
- Create an array of 4 team members in `App.jsx`
- Use `.map()` to render a `TeamMember` card for each person
- Inside each card, render the skills as a list
- Style the cards so they look like a professional team grid

---

## 📚 Resources

- 📖 [React Official Docs — Quick Start](https://react.dev/learn) — The new official React docs (excellent)
- 🎥 [React Tutorial for Beginners — freeCodeCamp](https://www.youtube.com/watch?v=bMknfKXIFA8) — Complete free video course
- 📖 [Vite — Getting Started](https://vitejs.dev/guide/) — Vite documentation
- 📖 [MDN — JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) — Understanding import/export
- 🎥 [React Crash Course — Traversy Media](https://www.youtube.com/watch?v=LDB4uaJ87e0) — Quick practical overview

---

## 🐛 Common Mistakes to Avoid

1. **Returning multiple elements without a wrapper** — JSX must return one parent element. Wrap siblings in a `<div>` or a fragment `<>...</>`. Forgetting this gives you a cryptic syntax error.
2. **Using `class` instead of `className`** — In JSX, the HTML `class` attribute must be written as `className`. Writing `class="card"` will show a warning in the console.
3. **Forgetting `key` when rendering lists** — Without a `key` prop on list items, React can't efficiently track changes. Always add `key={uniqueValue}` to the outermost element in `.map()`.

---

## 🧭 Navigation

← Previous: [Module Overview](../) | [Next Day: State, Hooks & Interactivity →](../day-02/)
