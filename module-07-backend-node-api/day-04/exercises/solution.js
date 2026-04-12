// ============================================
// ✅ Day 04 Solution — Connecting to MongoDB
// Module 07: Backend Basics
// Get Techy with Lucky
// ============================================

// This solution contains all files needed.
// In practice, split them into separate files.


// ============================================
// FILE: .env
// ============================================
// MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/bookstore
// PORT=3000


// ============================================
// FILE: .gitignore
// ============================================
// node_modules/
// .env


// ============================================
// FILE: models/Book.js
// ============================================

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
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);


// ============================================
// FILE: routes/books.js
// ============================================

const express = require("express");
const router = express.Router();

// CREATE — add a new book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: error.message });
  }
});

// READ — get all books (with optional filtering)
router.get("/", async (req, res) => {
  try {
    let filter = {};

    if (req.query.author) {
      filter.author = { $regex: req.query.author, $options: "i" };
    }

    if (req.query.available) {
      filter.available = req.query.available === "true";
    }

    const books = await Book.find(filter).sort({ createdAt: -1 });
    res.json({ count: books.length, books });
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
    // Handle invalid ObjectId format
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid book ID format" });
    }
    res.status(500).json({ error: error.message });
  }
});

// UPDATE — edit a book
router.put("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json(book);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).json({ error: error.message });
    }
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid book ID format" });
    }
    res.status(500).json({ error: error.message });
  }
});

// DELETE — remove a book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    res.json({ message: "Book deleted successfully", book });
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(400).json({ error: "Invalid book ID format" });
    }
    res.status(500).json({ error: error.message });
  }
});


// ============================================
// FILE: index.js
// ============================================

require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());

// Logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Books API with MongoDB",
    endpoints: {
      "GET /api/books": "Get all books (?author=name)",
      "GET /api/books/:id": "Get a book by ID",
      "POST /api/books": "Add a new book",
      "PUT /api/books/:id": "Update a book",
      "DELETE /api/books/:id": "Delete a book",
    },
  });
});

// Routes
app.use("/api/books", router);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
