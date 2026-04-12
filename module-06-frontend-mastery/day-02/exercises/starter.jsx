// ============================================
// 🚀 Day 02 Exercise — State, Hooks & Interactivity
// Module 06: Frontend Mastery
// Get Techy with Lucky
// ============================================

// INSTRUCTIONS:
// This exercise is meant to be completed inside a React project.
//
// Setup (if you haven't already):
//   npm create vite@latest my-react-app -- --template react
//   cd my-react-app
//   npm install
//   npm run dev
//
// Create each task as a separate component, then import
// and render them in App.jsx.

// ============================================
// TASK 1: Counter Component
// ============================================
// File: src/components/Counter.jsx
//
// Build a counter with:
// - A display showing the current count
// - An "Increment" button (+1)
// - A "Decrement" button (-1)
// - A "Reset" button (back to 0)
// - Use useState to manage the count
//
// Starter:
//
// import { useState } from "react";
//
// function Counter() {
//   // Create state for count here
//
//   return (
//     <div>
//       <h2>Counter</h2>
//       {/* Display count here */}
//       {/* Add buttons here */}
//     </div>
//   );
// }
//
// export default Counter;


// ============================================
// TASK 2: Live Preview Input
// ============================================
// File: src/components/LivePreview.jsx
//
// Build a component with:
// - A text input field
// - A paragraph below that shows what you type in real-time
// - Use useState to store the input value
//
// Starter:
//
// import { useState } from "react";
//
// function LivePreview() {
//   // Create state for text here
//
//   return (
//     <div>
//       <h2>Live Preview</h2>
//       {/* Add input with onChange here */}
//       {/* Display the text below */}
//     </div>
//   );
// }
//
// export default LivePreview;


// ============================================
// TASK 3: Toggle Switch
// ============================================
// File: src/components/ToggleSwitch.jsx
//
// Build a component with:
// - A button that says "ON" or "OFF"
// - Green background when ON, red when OFF
// - Clicking toggles between ON and OFF
//
// Starter:
//
// import { useState } from "react";
//
// function ToggleSwitch() {
//   // Create state for isOn here
//
//   return (
//     <div>
//       <h2>Toggle Switch</h2>
//       {/* Add button that toggles and changes style */}
//     </div>
//   );
// }
//
// export default ToggleSwitch;


// ============================================
// TASK 4: Simple Todo List
// ============================================
// File: src/components/TodoList.jsx
//
// Build a component with:
// - An input field and "Add" button
// - A list of todos below
// - Clicking a todo toggles line-through styling
// - Use useState for both the input and the todo array
//
// Starter:
//
// import { useState } from "react";
//
// function TodoList() {
//   // Create state for todos (array) and input (string) here
//
//   // Add function here
//
//   // Toggle function here
//
//   return (
//     <div>
//       <h2>Todo List</h2>
//       {/* Input + button */}
//       {/* List of todos */}
//     </div>
//   );
// }
//
// export default TodoList;


// ============================================
// TASK 5: Fetch Users with useEffect
// ============================================
// File: src/components/UserList.jsx
//
// Build a component that:
// - Fetches users from https://jsonplaceholder.typicode.com/users
// - Shows "Loading..." while fetching
// - Displays each user's name and email
// - Use useState for users and loading state
// - Use useEffect to fetch on mount
//
// Starter:
//
// import { useState, useEffect } from "react";
//
// function UserList() {
//   // Create state for users and loading here
//
//   // useEffect to fetch data here
//
//   // Show loading state
//
//   return (
//     <div>
//       <h2>Users</h2>
//       {/* Display users here */}
//     </div>
//   );
// }
//
// export default UserList;
