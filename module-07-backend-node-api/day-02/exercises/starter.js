// ============================================
// 🚀 Day 02 Exercise — Node.js & Express Starter
// Module 07: Backend Basics
// Get Techy with Lucky
// ============================================

// INSTRUCTIONS:
// 1. Create a new folder and run: npm init -y
// 2. Install Express: npm install express
// 3. Copy this file as index.js in your project
// 4. Complete each task below
// 5. Run with: node --watch index.js
// 6. Test with your browser or Thunder Client

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());


// ============================================
// TASK 1: Welcome Route
// ============================================
// Create a GET route at "/" that responds with:
// { message: "Welcome to my API!" }

// Your code here


// ============================================
// TASK 2: Multiple Routes
// ============================================

// 2a. GET /api/hello — responds with { greeting: "Hello, World!" }
// Your code here


// 2b. GET /api/time — responds with { currentTime: "<current date/time>" }
// Your code here


// 2c. GET /api/random — responds with { number: <random 1-100> }
// Your code here


// ============================================
// TASK 3: URL Parameters
// ============================================
// Create GET /api/greet/:name
// It should respond with: { message: "Hello, <name>!" }
// Example: GET /api/greet/Lucky → { message: "Hello, Lucky!" }

// Your code here


// ============================================
// TASK 4: POST Route — Echo
// ============================================
// Create POST /api/echo
// It should receive JSON in the body and send it back
// with a timestamp added.
// Example request body: { "text": "hello" }
// Response: { "text": "hello", "receivedAt": "2025-01-15T10:30:00.000Z" }

// Your code here


// ============================================
// TASK 5: Quotes API (Mini CRUD)
// ============================================
// Create an array of at least 5 quotes:
// { id: 1, text: "...", author: "..." }
//
// Implement:
// GET /api/quotes — returns all quotes
// GET /api/quotes/random — returns a random quote
// GET /api/quotes/:id — returns one quote by id (404 if not found)
// POST /api/quotes — adds a new quote (expects { text, author })

// Your code here


// ============================================
// Start the server
// ============================================
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
