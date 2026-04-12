// ============================================
// 🚀 Day 03 Exercise — Routes, Middleware & CRUD
// Module 07: Backend Basics
// Get Techy with Lucky
// ============================================

// INSTRUCTIONS:
// Build a Books API with Express Router, custom middleware,
// and full CRUD operations.
//
// Create the following file structure:
//   my-api/
//   ├── routes/
//   │   └── books.js       ← Book routes (this starter)
//   ├── middleware/
//   │   └── logger.js       ← Custom logger middleware
//   ├── index.js            ← Main server file
//   └── package.json

// ============================================
// FILE: middleware/logger.js
// ============================================
// Create a middleware function that logs:
// [timestamp] METHOD /url
// Example: [2025-01-15T10:30:00.000Z] GET /api/books
//
// Don't forget to call next()!

// Your code here


// ============================================
// FILE: routes/books.js
// ============================================

// const express = require("express");
// const router = express.Router();

// Sample data — start with these books
// let books = [
//   { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
//   { id: 2, title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", year: 2006 },
//   { id: 3, title: "Born a Crime", author: "Trevor Noah", year: 2016 },
//   { id: 4, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
//   { id: 5, title: "Long Walk to Freedom", author: "Nelson Mandela", year: 1994 },
// ];

// TASK 1: GET /api/books
// Return all books
// Support ?author= query parameter to filter by author
// Your code here


// TASK 2: GET /api/books/:id
// Return a single book by ID
// Return 404 if not found
// Your code here


// TASK 3: POST /api/books
// Create a new book
// Validate: title and author are required
// Return 400 if validation fails, 201 on success
// Your code here


// TASK 4: PUT /api/books/:id
// Update a book by ID
// Return 404 if not found
// Your code here


// TASK 5: DELETE /api/books/:id
// Delete a book by ID
// Return 404 if not found
// Your code here


// module.exports = router;


// ============================================
// FILE: index.js
// ============================================
// Set up the Express server:
// - Use express.json() middleware
// - Use your custom logger middleware
// - Mount the books router at /api/books
// - Add a 404 handler for undefined routes
// - Add error handling middleware
// - Listen on port 3000

// Your code here
