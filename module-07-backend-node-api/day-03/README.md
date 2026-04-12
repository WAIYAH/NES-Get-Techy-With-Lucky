# 📅 Day 03 of Module 07 — Routes, Middleware & Handling Requests

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Organise routes using Express Router for cleaner code
- Understand and create custom middleware functions
- Handle route parameters, query strings, and request bodies
- Implement error handling middleware
- Build a complete CRUD API for a resource

---

## 📖 Lesson Content

### Express Router — Organising Routes

As your API grows, putting all routes in one file gets messy. Express Router lets you group related routes in separate files.

```javascript
// routes/books.js
const express = require("express");
const router = express.Router();

let books = [
  { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
  { id: 2, title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie" },
  { id: 3, title: "Born a Crime", author: "Trevor Noah" },
];

// GET all books
router.get("/", (req, res) => {
  res.json(books);
});

// GET a single book
router.get("/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  res.json(book);
});

// POST a new book
router.post("/", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required" });
  }
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT — update a book
router.put("/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }
  book.title = req.body.title || book.title;
  book.author = req.body.author || book.author;
  res.json(book);
});

// DELETE a book
router.delete("/:id", (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }
  books.splice(index, 1);
  res.json({ message: "Book deleted" });
});

module.exports = router;
```

```javascript
// index.js
const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
app.use(express.json());

app.use("/api/books", booksRouter);

app.listen(3000, () => console.log("Server running on port 3000"));
```

### What Is Middleware?

Middleware is a function that runs **between** receiving a request and sending a response. It has access to `req`, `res`, and a `next` function.

```
Client Request → Middleware 1 → Middleware 2 → Route Handler → Response
```

#### Built-in Middleware

```javascript
app.use(express.json());               // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static("public"));     // Serve static files
```

#### Custom Middleware — Request Logger

```javascript
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();  // Pass control to the next middleware/route
};

app.use(logger);
```

> 💡 **Always call `next()`** in middleware — otherwise the request hangs and never reaches the route handler.

### Query Strings

Query strings are parameters in the URL after `?`:

```
GET /api/books?author=Trevor&sort=title
```

```javascript
router.get("/", (req, res) => {
  let result = books;

  // Filter by author
  if (req.query.author) {
    result = result.filter(b =>
      b.author.toLowerCase().includes(req.query.author.toLowerCase())
    );
  }

  // Sort by field
  if (req.query.sort) {
    result.sort((a, b) => a[req.query.sort].localeCompare(b[req.query.sort]));
  }

  res.json(result);
});
```

### Input Validation

Always validate incoming data before processing:

```javascript
router.post("/", (req, res) => {
  const { title, author } = req.body;

  // Check required fields
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({ error: "A valid title is required" });
  }

  if (!author || typeof author !== "string" || author.trim() === "") {
    return res.status(400).json({ error: "A valid author is required" });
  }

  const newBook = {
    id: books.length + 1,
    title: title.trim(),
    author: author.trim()
  };

  books.push(newBook);
  res.status(201).json(newBook);
});
```

### Error Handling Middleware

Error handling middleware has **four parameters** (err, req, res, next):

```javascript
// Place at the END of all routes
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Something went wrong!",
    message: err.message
  });
});
```

Trigger it by passing errors to `next()`:

```javascript
router.get("/:id", (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) throw new Error("Invalid ID format");

    const book = books.find(b => b.id === id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    res.json(book);
  } catch (error) {
    next(error);  // Passes to error handling middleware
  }
});
```

### 404 Handler

```javascript
// After all routes, before error handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
```

### Updated Project Structure

```
my-api/
├── routes/
│   └── books.js
├── middleware/
│   └── logger.js
├── index.js
├── package.json
└── .gitignore
```

---

## ✅ Step-by-Step Tasks

1. **Organise routes** — Move your routes from `index.js` into a separate `routes/books.js` file using Express Router.

2. **Create a logger middleware** — Write middleware that logs the HTTP method, URL, and timestamp for every request. Save it in `middleware/logger.js`.

3. **Full CRUD API** — Implement all five operations for a "books" resource: GET all, GET one, POST, PUT, DELETE. Test each with Thunder Client or Postman.

4. **Add query filtering** — Allow `GET /api/books?author=Paulo` to filter books by author name.

5. **Error handling** — Add a 404 handler for undefined routes and an error handling middleware for unexpected errors. Test by visiting a non-existent route.

---

## 🧠 Knowledge Check

1. What is Express Router and why should you use it?
2. What happens if you forget to call `next()` in middleware?
3. How does error handling middleware differ from regular middleware?

---

## 💪 Challenge

Build a **"Student Records API"** with full CRUD:

- `GET /api/students` — list all students (support `?grade=A` filtering)
- `GET /api/students/:id` — get one student
- `POST /api/students` — add a student (validate: name, email, grade required)
- `PUT /api/students/:id` — update a student
- `DELETE /api/students/:id` — remove a student
- Add logger middleware, input validation, 404 handler, and error handling middleware
- Organise with separate route and middleware files

---

## 📚 Resources

- 📖 [Express — Routing Guide](https://expressjs.com/en/guide/routing.html) — Official guide
- 📖 [Express — Using Middleware](https://expressjs.com/en/guide/using-middleware.html) — Middleware guide
- 📖 [Express — Error Handling](https://expressjs.com/en/guide/error-handling.html) — Error handling patterns
- 🎥 [Express Router — Net Ninja](https://www.youtube.com/watch?v=zW_tZR0Ir3Q) — Video tutorial
- 📖 [Thunder Client — VS Code Extension](https://www.thunderclient.com/) — API testing tool

---

## 🐛 Common Mistakes to Avoid

1. **Not calling `next()` in middleware** — The request will hang indefinitely. Always call `next()` unless you're sending a response with `res.send()` or `res.json()`.
2. **Route order matters** — Express matches routes top to bottom. Put specific routes (like `/api/books/random`) BEFORE parameterised routes (`/api/books/:id`), otherwise `:id` will catch "random" as an ID.
3. **Not validating `req.params.id`** — User input can be anything. Always validate that IDs are valid numbers before using them to look up data.

---

## 🧭 Navigation

← [Previous Day: Node.js & Express — Setting Up a Backend](../day-02/) | [Next Day: Connecting to a Database →](../day-04/)
