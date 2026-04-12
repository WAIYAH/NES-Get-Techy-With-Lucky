# 📅 Day 02 of Module 07 — Node.js & Express — Setting Up a Backend

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what Node.js is and why it's used for backend development
- Initialise a Node.js project with `npm init`
- Install and use packages from npm
- Create a basic Express server that responds to HTTP requests
- Define routes for different URL paths
- Understand the request-response cycle in Express

---

## 📖 Lesson Content

### What Is Node.js?

**Node.js** is a JavaScript runtime that lets you run JavaScript **outside the browser** — on a server. Before Node.js, JavaScript could only run in the browser. Now you can use one language (JavaScript) for both frontend AND backend.

```
Browser JavaScript → DOM, window, document
Node.js JavaScript → file system, servers, databases
```

### Checking Your Installation

```bash
node --version    # Should show v18+ or v20+
npm --version     # Should show 9+ or 10+
```

### Initialising a Project

```bash
mkdir my-api
cd my-api
npm init -y
```

This creates a `package.json` file — the "identity card" of your project:

```json
{
  "name": "my-api",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js"
  }
}
```

> 💡 `node --watch` (Node 18+) auto-restarts the server when files change — like hot reload for the backend.

### Installing Express

**Express** is a lightweight web framework for Node.js that makes it easy to build APIs.

```bash
npm install express
```

This adds Express to your `node_modules/` folder and records it in `package.json` under `dependencies`.

### Your First Express Server

```javascript
// index.js
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

Run it:

```bash
node index.js
```

Open `http://localhost:3000` in your browser — you should see the JSON response!

### Understanding req and res

Every route handler receives two objects:

| Object | Full Name | Purpose |
|--------|-----------|---------|
| `req` | Request | Information about the incoming request (URL, headers, body, parameters) |
| `res` | Response | Methods to send a response back to the client |

### Defining Routes

```javascript
// GET — retrieve data
app.get("/api/users", (req, res) => {
  res.json({ users: ["Alice", "Brian", "Catherine"] });
});

// GET with URL parameter
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} requested` });
});

// POST — create data
app.post("/api/users", (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: "User created", user: newUser });
});

// PUT — update data
app.put("/api/users/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} updated` });
});

// DELETE — remove data
app.delete("/api/users/:id", (req, res) => {
  res.json({ message: `User ${req.params.id} deleted` });
});
```

### Parsing JSON Request Bodies

Express doesn't parse JSON bodies by default. Add this middleware:

```javascript
app.use(express.json());
```

Now `req.body` will contain the parsed JSON from POST/PUT requests.

### Status Codes in Express

```javascript
res.status(200).json({ data: "OK" });           // Success
res.status(201).json({ data: "Created" });       // Resource created
res.status(400).json({ error: "Bad request" });  // Client error
res.status(404).json({ error: "Not found" });    // Resource not found
res.status(500).json({ error: "Server error" }); // Server error
```

### Serving Static Files (optional)

```javascript
app.use(express.static("public"));
// Now files in the public/ folder are accessible directly
// e.g., public/style.css → http://localhost:3000/style.css
```

### Project Structure So Far

```
my-api/
├── node_modules/     # Installed packages (don't edit)
├── index.js          # Your server code
├── package.json      # Project info & dependencies
├── package-lock.json # Exact dependency versions
└── .gitignore        # Should include node_modules/
```

### .gitignore for Node.js

```gitignore
node_modules/
.env
```

> ⚠️ **Never commit `node_modules/`** — it can contain thousands of files. Anyone cloning your repo can run `npm install` to restore them.

---

## ✅ Step-by-Step Tasks

1. **Set up a project** — Create a new folder, run `npm init -y`, install Express, and create an `index.js` file. Add a `"dev": "node --watch index.js"` script.

2. **Hello World API** — Create a server that responds to `GET /` with `{ message: "Welcome to my API!" }`. Test it in the browser.

3. **Multiple routes** — Add these routes:
   - `GET /api/hello` → responds with a greeting
   - `GET /api/time` → responds with the current date/time
   - `GET /api/random` → responds with a random number between 1-100

4. **URL parameters** — Add a route `GET /api/greet/:name` that responds with `{ message: "Hello, [name]!" }`.

5. **POST route** — Add `express.json()` middleware and create a `POST /api/echo` route that receives JSON and sends it back with a timestamp.

---

## 🧠 Knowledge Check

1. What is the difference between Node.js and Express?
2. What do `req` and `res` represent in a route handler?
3. Why do you need `app.use(express.json())` and what happens without it?

---

## 💪 Challenge

Build a **"Quotes API"**:

- Store 10 inspirational quotes in an array (in-memory, no database)
- `GET /api/quotes` → returns all quotes
- `GET /api/quotes/random` → returns a random quote
- `GET /api/quotes/:id` → returns a specific quote by ID
- `POST /api/quotes` → adds a new quote (accepts `{ text, author }` in the body)
- `DELETE /api/quotes/:id` → removes a quote by ID
- Add proper status codes: 200 for success, 201 for created, 404 for not found

---

## 📚 Resources

- 📖 [Express.js — Getting Started](https://expressjs.com/en/starter/hello-world.html) — Official guide
- 📖 [MDN — Express/Node Introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) — Comprehensive guide
- 📖 [Node.js Docs](https://nodejs.org/en/docs/) — Official reference
- 🎥 [Express.js Crash Course — Traversy Media](https://www.youtube.com/watch?v=CnH3kAXSrmU) — Video tutorial
- 📖 [npm — Getting Started](https://docs.npmjs.com/getting-started) — Package management

---

## 🐛 Common Mistakes to Avoid

1. **Forgetting `express.json()` middleware** — Without it, `req.body` is `undefined` for POST/PUT requests. Always add `app.use(express.json())` before your routes.
2. **Port conflicts** — If port 3000 is already in use, you'll get an error. Change the port number or close the other process using it.
3. **Committing `node_modules/`** — This folder can be hundreds of MB. Always add `node_modules/` to `.gitignore` before your first commit.

---

## 🧭 Navigation

← [Previous Day: How the Web Works — Servers, HTTP & REST](../day-01/) | [Next Day: Routes, Middleware & Handling Requests →](../day-03/)
