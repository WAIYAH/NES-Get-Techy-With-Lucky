# 📅 Day 04 of Module 07 — Connecting to a Database (MongoDB)

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain why APIs need databases instead of in-memory arrays
- Set up a free MongoDB Atlas cloud database
- Connect a Node.js/Express app to MongoDB using Mongoose
- Define data schemas and models
- Perform CRUD operations on a real database

---

## 📖 Lesson Content

### Why Use a Database?

So far, our API stores data in JavaScript arrays. When the server restarts, **all data is lost**. A database provides:

- **Persistence** — data survives server restarts
- **Scalability** — handles millions of records efficiently
- **Querying** — find, filter, and sort data easily
- **Concurrent access** — multiple users can read/write simultaneously

### MongoDB — A Document Database

MongoDB stores data as **JSON-like documents** (BSON) instead of rows and columns:

```json
{
  "_id": "64a1b2c3d4e5f6789",
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988,
  "genres": ["fiction", "philosophy"]
}
```

### Setting Up MongoDB Atlas (Free)

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and create an account
2. Create a free shared cluster (M0 — free forever)
3. Set up a database user (username + password)
4. Add your IP address to the whitelist (or use `0.0.0.0/0` for development)
5. Click "Connect" → "Connect your application" → Copy the connection string

Your connection string looks like:
```
mongodb+srv://username:password@cluster0.abc123.mongodb.net/myDatabase
```

### Installing Mongoose

**Mongoose** is an ODM (Object Document Mapper) that provides a structured way to interact with MongoDB.

```bash
npm install mongoose dotenv
```

### Environment Variables

Store sensitive data (like database passwords) in a `.env` file:

```bash
# .env
MONGODB_URI=mongodb+srv://username:password@cluster0.abc123.mongodb.net/myDatabase
PORT=3000
```

> ⚠️ **Never commit `.env` to GitHub.** Add it to `.gitignore`.

### Connecting to MongoDB

```javascript
// index.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### Defining a Schema and Model

A **schema** defines the structure of your documents. A **model** provides methods to interact with the collection.

```javascript
// models/Book.js
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    year: {
      type: Number,
      min: [1000, "Year must be after 1000"],
    },
    genres: {
      type: [String],
      default: [],
    },
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

module.exports = mongoose.model("Book", bookSchema);
```

### CRUD Operations with Mongoose

```javascript
// routes/books.js
const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// CREATE — add a new book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ — get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// READ — get one book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE — edit a book
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,           // Return the updated document
      runValidators: true,  // Run schema validation on update
    });
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE — remove a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

### Useful Mongoose Query Methods

| Method | Purpose | Example |
|--------|---------|---------|
| `Model.find()` | Get all documents | `Book.find()` |
| `Model.find({ author: "Paulo" })` | Filter | Books by author |
| `Model.findById(id)` | Get one by ID | `Book.findById("abc123")` |
| `Model.findByIdAndUpdate()` | Update by ID | With `{ new: true }` |
| `Model.findByIdAndDelete()` | Delete by ID | Removes the document |
| `Model.countDocuments()` | Count results | `Book.countDocuments()` |

### Updated Project Structure

```
my-api/
├── models/
│   └── Book.js
├── routes/
│   └── books.js
├── middleware/
│   └── logger.js
├── .env                # Connection string (gitignored)
├── .gitignore
├── index.js
└── package.json
```

---

## ✅ Step-by-Step Tasks

1. **Set up MongoDB Atlas** — Create a free cluster, set up a database user, and get your connection string.

2. **Connect your app** — Install `mongoose` and `dotenv`. Create a `.env` file with your connection string. Connect in `index.js` and verify "Connected to MongoDB" appears in the console.

3. **Create a Book model** — Define a schema with title (required), author (required), year, and genres. Save it in `models/Book.js`.

4. **Build CRUD routes** — Create routes for all five operations (GET all, GET one, POST, PUT, DELETE) in `routes/books.js`. Connect them in `index.js`.

5. **Test with Thunder Client** — Use Thunder Client or Postman to: create 3 books (POST), get all books (GET), get one book by ID, update a book (PUT), and delete a book (DELETE).

---

## 🧠 Knowledge Check

1. Why do APIs need a database instead of storing data in arrays?
2. What is Mongoose and what role does a "schema" play?
3. Why should you never commit `.env` files to GitHub?

---

## 💪 Challenge

Build a **"Student Management API"** with MongoDB:

- Schema: name (required), email (required, unique), course, grade, enrollmentDate
- Full CRUD endpoints
- Add query filtering: `GET /api/students?course=CS101` and `?grade=A`
- Add a `GET /api/students/stats` route that returns: total count, average grade, students per course
- Input validation with meaningful error messages
- Proper error handling for invalid IDs and duplicate emails

---

## 📚 Resources

- 📖 [Mongoose — Getting Started](https://mongoosejs.com/docs/index.html) — Official guide
- 📖 [MongoDB Atlas — Getting Started](https://www.mongodb.com/docs/atlas/getting-started/) — Setup guide
- 📖 [MDN — Express Tutorial: Database](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose) — Tutorial
- 🎥 [MongoDB Crash Course — Traversy Media](https://www.youtube.com/watch?v=-56x56UppqQ) — Video tutorial
- 📖 [dotenv Documentation](https://www.npmjs.com/package/dotenv) — Environment variables

---

## 🐛 Common Mistakes to Avoid

1. **Hardcoding the connection string** — Never put your MongoDB password directly in your code. Use environment variables with `dotenv` and add `.env` to `.gitignore`.
2. **Forgetting `async/await`** — All Mongoose operations return Promises. Without `await`, you get Promise objects instead of data. Wrap in `try/catch` for error handling.
3. **Not handling invalid ObjectIds** — If someone sends `GET /api/books/not-a-valid-id`, Mongoose throws a `CastError`. Catch this in your error handling middleware or validate the ID format first.

---

## 🧭 Navigation

← [Previous Day: Routes, Middleware & Handling Requests](../day-03/) | [Next Module: Databases & Data Thinking →](../../module-08-databases/)
