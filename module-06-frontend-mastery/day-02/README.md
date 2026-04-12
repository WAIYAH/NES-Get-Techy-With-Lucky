# 📅 Day 02 of Module 06 — State, Hooks & Interactivity in React

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Understand what "state" is and why React needs it
- Use the `useState` hook to add interactivity to components
- Handle events in React (click, input, form submit)
- Use the `useEffect` hook for side effects like fetching data
- Understand how React re-renders when state changes

---

## 📖 Lesson Content

### What Is State?

**State** is data that can change over time. When state changes, React **automatically re-renders** the component to reflect the new data.

Think of it this way:
- **Props** = data passed IN from a parent (read-only)
- **State** = data managed INSIDE the component (read-write)

### useState — Your First Hook

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

**How it works:**
- `useState(0)` — creates a state variable with initial value `0`
- `count` — the current value
- `setCount` — the function to update it
- When `setCount` is called, React re-renders the component

### Rules of Hooks

1. Only call hooks at the **top level** (not inside loops, conditions, or nested functions)
2. Only call hooks inside **React function components** or **custom hooks**

```jsx
// ✅ Correct
function MyComponent() {
  const [name, setName] = useState("");
  // ...
}

// ❌ Wrong — inside a condition
function MyComponent() {
  if (true) {
    const [name, setName] = useState("");  // NEVER do this
  }
}
```

### Handling Events in React

React events use **camelCase** and pass functions (not strings):

```jsx
function GreetButton() {
  const handleClick = () => {
    alert("Hello from React!");
  };

  return <button onClick={handleClick}>Greet</button>;
}
```

### Handling Form Input

```jsx
function NameForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

> 💡 In React, form inputs are **controlled components** — their value is driven by state, not by the DOM.

### Working with Multiple State Variables

```jsx
function UserProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <textarea value={bio} onChange={(e) => setBio(e.target.value)} placeholder="Bio" />
      <div>
        <h3>{name || "Your Name"}</h3>
        <p>Age: {age || "?"}</p>
        <p>{bio || "Write something about yourself..."}</p>
      </div>
    </div>
  );
}
```

### State with Objects and Arrays

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

> ⚠️ **Never mutate state directly.** Always create a new copy using spread (`...`) or methods like `map()` and `filter()`.

### useEffect — Side Effects

`useEffect` runs code **after** the component renders. It's used for:
- Fetching data from APIs
- Setting up timers
- Updating the document title

```jsx
import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup — runs when the component unmounts
    return () => clearInterval(interval);
  }, []);  // Empty array = run once on mount

  return <p>Timer: {seconds}s</p>;
}
```

#### useEffect Dependency Array

```jsx
// Runs on EVERY render
useEffect(() => { /* ... */ });

// Runs ONCE when component mounts
useEffect(() => { /* ... */ }, []);

// Runs when `count` changes
useEffect(() => { /* ... */ }, [count]);
```

### Fetching Data with useEffect

```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} — {user.email}</li>
      ))}
    </ul>
  );
}
```

---

## ✅ Step-by-Step Tasks

1. **Counter component** — Build a counter with increment, decrement, and reset buttons using `useState`.

2. **Controlled input** — Create a text input that displays what you type in real-time below it (live preview).

3. **Toggle component** — Build a button that toggles between "ON" and "OFF", changing its background colour accordingly.

4. **Simple to-do list** — Build a to-do list where you can add items from an input, display them as a list, and click to mark them as done.

5. **Fetch and display data** — Use `useEffect` to fetch users from JSONPlaceholder and display them as a list with a loading state.

---

## 🧠 Knowledge Check

1. What is the difference between `props` and `state` in React?
2. Why should you never mutate state directly (e.g., `todos.push(newTodo)`) in React?
3. What does the dependency array in `useEffect` control?

---

## 💪 Challenge

Build a **"Weather Dashboard"** component:

- Use `useState` for city input and weather data
- Use `useEffect` to fetch weather data when the city changes (use a free API like Open-Meteo or mock data)
- Display temperature, conditions, and an icon
- Show loading and error states
- Add a "favourites" feature that saves cities to state

---

## 📚 Resources

- 📖 [React Docs — useState](https://react.dev/reference/react/useState) — Official reference
- 📖 [React Docs — useEffect](https://react.dev/reference/react/useEffect) — Official reference
- 📖 [React Docs — Handling Events](https://react.dev/learn/responding-to-events) — Event guide
- 🎥 [React Hooks Explained — Fireship](https://www.youtube.com/watch?v=TNhaISOUy6Q) — Quick video
- 📖 [React Docs — Thinking in React](https://react.dev/learn/thinking-in-react) — Mental model

---

## 🐛 Common Mistakes to Avoid

1. **Mutating state directly** — `state.push(item)` doesn't trigger a re-render. Always use the setter function with a new value: `setState([...state, item])`.
2. **Missing dependency array in useEffect** — Without `[]`, your effect runs on every render, which can cause infinite loops especially with `fetch` + `setState`.
3. **Calling hooks conditionally** — React relies on hooks being called in the same order every render. Wrapping `useState` or `useEffect` inside an `if` block breaks this rule.

---

## 🧭 Navigation

← [Previous Day: Introduction to React — Components & Props](../day-01/) | [Next Day: Routing, Project Structure & Best Practices →](../day-03/)
