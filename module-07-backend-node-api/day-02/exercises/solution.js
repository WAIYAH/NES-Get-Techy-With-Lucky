// ============================================
// ✅ Day 02 Solution — Node.js & Express
// Module 07: Backend Basics
// Get Techy with Lucky
// ============================================

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


// ============================================
// TASK 1: Welcome Route
// ============================================

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});


// ============================================
// TASK 2: Multiple Routes
// ============================================

// 2a. Hello
app.get("/api/hello", (req, res) => {
  res.json({ greeting: "Hello, World!" });
});

// 2b. Time
app.get("/api/time", (req, res) => {
  res.json({ currentTime: new Date().toISOString() });
});

// 2c. Random number
app.get("/api/random", (req, res) => {
  const number = Math.floor(Math.random() * 100) + 1;
  res.json({ number });
});


// ============================================
// TASK 3: URL Parameters
// ============================================

app.get("/api/greet/:name", (req, res) => {
  const { name } = req.params;
  res.json({ message: `Hello, ${name}!` });
});


// ============================================
// TASK 4: POST Route — Echo
// ============================================

app.post("/api/echo", (req, res) => {
  const data = req.body;
  res.json({
    ...data,
    receivedAt: new Date().toISOString(),
  });
});


// ============================================
// TASK 5: Quotes API
// ============================================

let quotes = [
  { id: 1, text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { id: 2, text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { id: 3, text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { id: 4, text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { id: 5, text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
];

// GET all quotes
app.get("/api/quotes", (req, res) => {
  res.json(quotes);
});

// GET random quote (must be BEFORE /:id)
app.get("/api/quotes/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

// GET one quote by ID
app.get("/api/quotes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const quote = quotes.find(q => q.id === id);

  if (!quote) {
    return res.status(404).json({ error: "Quote not found" });
  }

  res.json(quote);
});

// POST a new quote
app.post("/api/quotes", (req, res) => {
  const { text, author } = req.body;

  if (!text || !author) {
    return res.status(400).json({ error: "Both 'text' and 'author' are required" });
  }

  const newQuote = {
    id: quotes.length > 0 ? Math.max(...quotes.map(q => q.id)) + 1 : 1,
    text,
    author,
  };

  quotes.push(newQuote);
  res.status(201).json(newQuote);
});


// ============================================
// Start the server
// ============================================

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
