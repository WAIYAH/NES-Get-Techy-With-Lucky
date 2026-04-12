// ============================================
// 📝 Module 08 · Day 03 — MongoDB Exercises
// MongoDB Basics & Data Modelling
// ============================================
// Practice MongoDB CRUD and schema design.
// Use MongoDB Atlas, Compass, or mongosh to test.
// ============================================


// ============================================
// TASK 1: CRUD Operations
// ============================================

// 1a. Insert 5 books into a "books" collection
// Each book should have: title, author, year, genres (array), available (boolean)

// TODO: Write insertMany here


// 1b. Find all books published after the year 2000

// TODO


// 1c. Find books that have "fiction" in their genres array

// TODO


// 1d. Update a book — set available to false and add a new genre

// TODO


// 1e. Delete all books where available is false

// TODO


// ============================================
// TASK 2: Advanced Queries
// ============================================

// 2a. Find all books, sorted by year (newest first), showing only title and year

// TODO


// 2b. Count the number of books per author

// TODO (hint: use aggregate)


// 2c. Find books where the title contains the word "the" (case-insensitive)

// TODO


// ============================================
// TASK 3: Schema Design with Mongoose
// ============================================

const mongoose = require("mongoose");

// 3a. Create a User schema with:
//     name (String, required)
//     email (String, required, unique)
//     bio (String, max 300 chars)
//     joinedAt (Date, defaults to now)

// TODO: const userSchema = ...


// 3b. Create a Post schema with:
//     title (String, required)
//     content (String, required)
//     author (ObjectId, references "User")
//     tags (array of Strings)
//     comments (embedded array with: user name, text, createdAt)
//     createdAt (Date, defaults to now)

// TODO: const postSchema = ...


// ============================================
// TASK 4: Populate
// ============================================

// 4a. Write a function that fetches a post by ID
//     and populates the author field with name and email only

// TODO: async function getPostWithAuthor(postId) { ... }


// ============================================
// TASK 5: Pagination
// ============================================

// 5a. Write a function that accepts page and limit,
//     and returns paginated posts sorted by createdAt (newest first)
//     Also return the total count and total number of pages

// TODO: async function getPaginatedPosts(page = 1, limit = 10) { ... }
