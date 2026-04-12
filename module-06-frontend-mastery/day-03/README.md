# 📅 Day 03 of Module 06 — Routing, Project Structure & Best Practices

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Install and configure React Router for multi-page navigation
- Create routes, links, and dynamic URL parameters
- Organise a React project with a scalable folder structure
- Follow naming conventions and code organisation best practices
- Build a multi-page React application

---

## 📖 Lesson Content

### Why Routing?

A regular HTML website loads a new page from the server for each URL. React apps are **single-page applications (SPAs)** — the browser loads one HTML file, and React swaps content based on the URL without a full page reload. **React Router** makes this possible.

### Installing React Router

```bash
npm install react-router-dom
```

### Setting Up Routes

```jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Navigation with Link

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
```

> ⚠️ Never use `<a href="/about">` in React Router — it causes a full page reload. Always use `<Link>`.

### Active Links with NavLink

```jsx
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        About
      </NavLink>
    </nav>
  );
}
```

### Dynamic Routes and URL Parameters

```jsx
// Route definition
<Route path="/users/:userId" element={<UserProfile />} />

// Accessing the parameter
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();

  return <h2>User Profile: {userId}</h2>;
}
```

### Programmatic Navigation

```jsx
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // After successful login...
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Log In</button>;
}
```

### Shared Layouts

```jsx
// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />  {/* Child routes render here */}
      </main>
      <Footer />
    </>
  );
}

// In App.jsx
<Route element={<MainLayout />}>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Route>
```

### Recommended Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   └── Button.jsx
├── pages/              # Page-level components (one per route)
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── layouts/            # Layout wrappers
│   └── MainLayout.jsx
├── hooks/              # Custom hooks
│   └── useFetch.js
├── utils/              # Helper functions
│   └── formatDate.js
├── styles/             # CSS files
│   ├── global.css
│   └── Navbar.css
├── App.jsx             # Root component with routes
└── main.jsx            # Entry point
```

### Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `UserCard.jsx` |
| Hooks | camelCase with "use" prefix | `useFetch.js` |
| Utility functions | camelCase | `formatDate.js` |
| CSS files | Match component name | `Navbar.css` |
| Folders | lowercase, kebab-case | `components/`, `user-profile/` |

### Best Practices

1. **One component per file** — Don't put multiple components in one file
2. **Keep components small** — If a component is over 100 lines, break it into smaller ones
3. **Lift state up** — If two sibling components need the same data, put the state in their parent
4. **Use descriptive names** — `UserCard` is better than `Card1`
5. **Separate concerns** — Logic in hooks, display in components, styling in CSS files

---

## ✅ Step-by-Step Tasks

1. **Install React Router** — Run `npm install react-router-dom` in your React project. Set up `BrowserRouter` in `App.jsx`.

2. **Create 3 pages** — Build `Home.jsx`, `About.jsx`, and `Contact.jsx` in a `pages/` folder. Add a route for each.

3. **Add navigation** — Create a `Navbar` component with `<Link>` elements. It should appear on every page (use a layout with `<Outlet>`).

4. **Dynamic route** — Add a route `/projects/:projectId`. Create a `ProjectDetail` component that reads the `projectId` from the URL and displays it.

5. **404 page** — Add a catch-all `*` route that shows a "Page Not Found" message with a link back to Home.

---

## 🧠 Knowledge Check

1. What is the difference between `<Link>` and `<a>` in a React application?
2. What does the `<Outlet />` component do in React Router?
3. Why is folder structure important as a React project grows?

---

## 💪 Challenge

Build a **"Mini Portfolio Site"** with React Router:

- Pages: Home, About, Projects, Contact, and a 404 page
- A shared layout with Navbar and Footer on all pages
- The Projects page shows a grid of project cards
- Clicking a card navigates to `/projects/:id` showing project details (use `useParams`)
- Use `NavLink` with active styling for the navigation
- Organise with the recommended folder structure

---

## 📚 Resources

- 📖 [React Router Docs](https://reactrouter.com/) — Official documentation
- 📖 [React Docs — Thinking in React](https://react.dev/learn/thinking-in-react) — Component design
- 📖 [React Project Structure Guide](https://blog.webdevsimplified.com/2022-07/react-folder-structure/) — Web Dev Simplified
- 🎥 [React Router in 10 Minutes — Fireship](https://www.youtube.com/watch?v=oTIJunBa6MA) — Quick overview
- 📖 [Bulletproof React — Project Structure](https://github.com/alan2207/bulletproof-react) — Production-level patterns

---

## 🐛 Common Mistakes to Avoid

1. **Using `<a>` instead of `<Link>`** — Regular anchor tags cause a full page reload, destroying your React state. Always use `<Link>` or `<NavLink>` from React Router.
2. **Missing the `*` catch-all route** — Without a 404 route, users who visit an invalid URL see a blank page. Always add `<Route path="*" element={<NotFound />} />`.
3. **Putting everything in one file** — As your app grows, a single file becomes unmanageable. Split into components, pages, and utilities from the start.

---

## 🧭 Navigation

← [Previous Day: State, Hooks & Interactivity](../day-02/) | [Next Day: Build & Deploy Your First React App →](../day-04/)
