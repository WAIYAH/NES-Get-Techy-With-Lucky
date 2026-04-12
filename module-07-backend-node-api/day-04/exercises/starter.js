// ============================================
// 🚀 Day 04 Exercise — Connecting to MongoDB
// Module 07: Backend Basics
// Get Techy with Lucky
// ============================================

// INSTRUCTIONS:
// 1. Set up a free MongoDB Atlas account and create a cluster
// 2. Install dependencies: npm install express mongoose dotenv
// 3. Create a .env file with your MONGODB_URI
// 4. Complete the tasks below
// 5. Test with Thunder Client or Postman

// ============================================
// TASK 1: Create the .env file
// ============================================
// Create a .env file in your project root with:
//
// MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/bookstore
// PORT=3000
//
// Replace <username> and <password> with your Atlas credentials.
// Add .env to your .gitignore file!


// ============================================
// TASK 2: Define the Book Model
// ============================================
// File: models/Book.js
//
// Create a Mongoose schema with:
//   - title: String, required, trimmed
//   - author: String, required, trimmed
//   - year: Number (optional)
//   - genres: Array of Strings, default []
//   - available: Boolean, default true
//   - Use timestamps: true for createdAt/updatedAt
//
// Starter:
//
// const mongoose = require("mongoose");
//
// const bookSchema = new mongoose.Schema({
//   // Define your schema here
// }, {
//   // Schema options here
// });
//
// module.exports = mongoose.model("Book", bookSchema);


// ============================================
// TASK 3: Connect to MongoDB in index.js
// ============================================
// File: index.js
//
// - Require dotenv and call config()
// - Connect to MongoDB using mongoose.connect()
// - Log "Connected to MongoDB" on success
// - Log the error on failure
//
// Starter:
//
// const express = require("express");
// const mongoose = require("mongoose");
// require("dotenv").config();
//
// const app = express();
// app.use(express.json());
//
// // Connect to MongoDB here
//
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// ============================================
// TASK 4: Build CRUD Routes with Mongoose
// ============================================
// File: routes/books.js
//
// Replace the in-memory array with Mongoose operations:
//
// GET /api/books       → Book.find()
// GET /api/books/:id   → Book.findById()
// POST /api/books      → new Book(req.body).save()
// PUT /api/books/:id   → Book.findByIdAndUpdate()
// DELETE /api/books/:id → Book.findByIdAndDelete()
//
// Remember:
// - All Mongoose operations are async — use async/await
// - Wrap everything in try/catch
// - Return proper status codes (200, 201, 400, 404, 500)
//
// Starter:
//
// const express = require("express");
// const router = express.Router();
// const Book = require("../models/Book");
//
// router.get("/", async (req, res) => {
//   try {
//     // Your code here
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
//
// // Add more routes...
//
// module.exports = router;


// ============================================
// TASK 5: Test Your API
// ============================================
// Use Thunder Client (VS Code extension) or Postman to:
//
// 1. POST /api/books — Create 3 books:
//    Body: { "title": "The Alchemist", "author": "Paulo Coelho", "year": 1988 }
//    Expected: 201 status, book with _id
//
// 2. GET /api/books — Verify all 3 books are returned
//    Expected: Array of 3 books with MongoDB _id fields
//
// 3. GET /api/books/:id — Get one book using its _id
//    Expected: Single book object
//
// 4. PUT /api/books/:id — Update a book's title
//    Body: { "title": "Updated Title" }
//    Expected: Updated book returned
//
// 5. DELETE /api/books/:id — Delete a book
//    Expected: Success message
//
// 6. GET /api/books — Verify the deleted book is gone
//
// Write your test results below:
// POST result: _______________
// GET all result: _______________
// GET one result: _______________
// PUT result: _______________
// DELETE result: _______________
