// ============================================
// ✅ Day 02 Solution — State, Hooks & Interactivity
// Module 06: Frontend Mastery
// Get Techy with Lucky
// ============================================

// Each task below is a complete component.
// Import them into App.jsx to use:
//
// import Counter from "./components/Counter";
// import LivePreview from "./components/LivePreview";
// import ToggleSwitch from "./components/ToggleSwitch";
// import TodoList from "./components/TodoList";
// import UserList from "./components/UserList";


// ============================================
// TASK 1: Counter Component
// ============================================
// File: src/components/Counter.jsx

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}


// ============================================
// TASK 2: Live Preview Input
// ============================================
// File: src/components/LivePreview.jsx

function LivePreview() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Live Preview</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing..."
        style={{ padding: "0.5rem", width: "100%", fontSize: "1rem" }}
      />
      <p style={{ marginTop: "1rem", fontSize: "1.2rem", color: "#333" }}>
        {text || "Your text will appear here..."}
      </p>
    </div>
  );
}


// ============================================
// TASK 3: Toggle Switch
// ============================================
// File: src/components/ToggleSwitch.jsx

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Toggle Switch</h2>
      <button
        onClick={() => setIsOn(!isOn)}
        style={{
          padding: "1rem 2rem",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: isOn ? "#27ae60" : "#e74c3c",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}


// ============================================
// TASK 4: Simple Todo List
// ============================================
// File: src/components/TodoList.jsx

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          style={{ padding: "0.5rem", fontSize: "1rem" }}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button onClick={addTodo} style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              padding: "0.5rem",
              cursor: "pointer",
              textDecoration: todo.done ? "line-through" : "none",
              color: todo.done ? "#999" : "#333",
              borderBottom: "1px solid #eee",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}


// ============================================
// TASK 5: Fetch Users with useEffect
// ============================================
// File: src/components/UserList.jsx

import { useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
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

  if (loading) return <p>Loading users...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Users from API</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              padding: "0.75rem",
              marginBottom: "0.5rem",
              background: "#f9f9f9",
              borderRadius: "8px",
            }}
          >
            <strong>{user.name}</strong>
            <br />
            <span style={{ color: "#555" }}>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
