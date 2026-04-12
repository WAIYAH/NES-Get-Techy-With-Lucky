// ============================================
// ✅ Day 03 Solution — Routes, Middleware & CRUD
// Module 07: Backend Basics
// Get Techy with Lucky
// ============================================

// This solution contains all files. In practice,
// split them into separate files as shown below.


// ============================================
// FILE: middleware/logger.js
// ============================================

// const logger = (req, res, next) => {
//   const timestamp = new Date().toISOString();
//   console.log(`[${timestamp}] ${req.method} ${req.url}`);
//   next();
// };
// module.exports = logger;


// ============================================
// FILE: routes/books.js
// ============================================

const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
  { id: 2, title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", year: 2006 },
  { id: 3, title: "Born a Crime", author: "Trevor Noah", year: 2016 },
  { id: 4, title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 },
  { id: 5, title: "Long Walk to Freedom", author: "Nelson Mandela", year: 1994 },
];

// GET all books (with optional author filter)
router.get("/", (req, res) => {
  let result = [...books];

  if (req.query.author) {
    result = result.filter((b) =>
      b.author.toLowerCase().includes(req.query.author.toLowerCase())
    );
  }

  if (req.query.sort === "title") {
    result.sort((a, b) => a.title.localeCompare(b.title));
  } else if (req.query.sort === "year") {
    result.sort((a, b) => a.year - b.year);
  }

  res.json({ count: result.length, books: result });
});

// GET one book by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "ID must be a number" });
  }

  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ error: `Book with ID ${id} not found` });
  }

  res.json(book);
});

// POST — create a new book
router.post("/", (req, res) => {
  const { title, author, year } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "A valid title is required" });
  }

  if (!author || typeof author !== "string" || author.trim() === "") {
    return res.status(400).json({ error: "A valid author is required" });
  }

  const newBook = {
    id: books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1,
    title: title.trim(),
    author: author.trim(),
    year: year || null,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT — update a book
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return res.status(404).json({ error: `Book with ID ${id} not found` });
  }

  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  book.year = req.body.year || book.year;

  res.json(book);
});

// DELETE — remove a book
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `Book with ID ${id} not found` });
  }

  const deleted = books.splice(index, 1)[0];
  res.json({ message: "Book deleted", book: deleted });
});

// module.exports = router;


// ============================================
// FILE: index.js
// ============================================

const app = express();

// Middleware
app.use(express.json());

// Custom logger middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Books API",
    endpoints: {
      "GET /api/books": "Get all books (?author=name, ?sort=title|year)",
      "GET /api/books/:id": "Get a book by ID",
      "POST /api/books": "Add a new book",
      "PUT /api/books/:id": "Update a book",
      "DELETE /api/books/:id": "Delete a book",
    },
  });
});

app.use("/api/books", router);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message,
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
