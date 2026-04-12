# 📅 Day 01 of Module 07 — How the Web Works: Servers, HTTP & REST APIs

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain the client-server model and how the web actually works
- Understand HTTP methods (GET, POST, PUT, DELETE) and when to use each
- Read and interpret HTTP status codes (200, 404, 500, etc.)
- Define what a REST API is and why it matters
- Use Postman or Thunder Client to send requests to a real API

---

## 📖 Lesson Content

### The Client-Server Model

Every time you visit a website or use an app, this is what happens:

```
        REQUEST
You  ──────────────►  Server
(Client)               (Has the data)
     ◄──────────────
        RESPONSE
```

- **Client** — your browser, phone, or app. It requests information.
- **Server** — a computer somewhere in the world that stores data and sends it back.
- **Request** — "Hey server, give me the homepage"
- **Response** — "Here it is — HTML + CSS + JS files"

### What Is HTTP?

**HTTP (HyperText Transfer Protocol)** is the set of rules that clients and servers use to communicate. Every time you visit a URL, an HTTP request is sent.

### HTTP Methods

HTTP methods tell the server **what you want to do**:

| Method | Purpose | Example |
|--------|---------|---------|
| `GET` | **Read** / retrieve data | Fetch a list of users |
| `POST` | **Create** new data | Submit a registration form |
| `PUT` | **Update** existing data (replace all) | Update a user's profile |
| `PATCH` | **Update** part of existing data | Change just the email |
| `DELETE` | **Remove** data | Delete a user account |

Think of it like a library:
- `GET` = "Can I see that book?"
- `POST` = "I'd like to add a new book"
- `PUT` = "Replace this entire book with a new edition"
- `DELETE` = "Remove this book from the shelf"

### HTTP Status Codes

Every response from a server includes a **status code** — a number that tells you what happened:

| Code | Meaning | You should know |
|------|---------|----------------|
| `200` | ✅ OK | Everything worked |
| `201` | ✅ Created | New resource was created successfully |
| `301` | 🔄 Moved Permanently | The page has moved to a new URL |
| `400` | ❌ Bad Request | You sent something wrong |
| `401` | 🔒 Unauthorised | You need to log in |
| `403` | 🚫 Forbidden | You're logged in but don't have permission |
| `404` | ❓ Not Found | The page/resource doesn't exist |
| `500` | 💥 Internal Server Error | Something broke on the server |

> 💡 **Memory trick:** 2xx = success, 3xx = redirect, 4xx = client error (your fault), 5xx = server error (their fault).

### What Is an API?

**API (Application Programming Interface)** is a way for two pieces of software to talk to each other. A web API is a set of URLs (endpoints) that accept requests and return data.

```
Your App  ──► https://api.weather.com/today?city=Nairobi  ──► Weather Server
          ◄── { "temp": 22, "condition": "sunny" }        ◄──
```

### What Is REST?

**REST (Representational State Transfer)** is a set of rules for designing APIs. A RESTful API:

1. Uses standard HTTP methods (GET, POST, PUT, DELETE)
2. Has clear, predictable URLs (endpoints)
3. Returns data in JSON format
4. Is **stateless** — each request is independent

**Example REST API endpoints:**

```
GET    /api/users         ← Get all users
GET    /api/users/42      ← Get user with ID 42
POST   /api/users         ← Create a new user
PUT    /api/users/42      ← Update user 42
DELETE /api/users/42      ← Delete user 42
```

### JSON — The Language of APIs

**JSON (JavaScript Object Notation)** is the standard format for sending data between client and server:

```json
{
    "id": 1,
    "name": "Lucky",
    "role": "Developer",
    "skills": ["HTML", "CSS", "JavaScript"],
    "isAvailable": true
}
```

JSON looks like a JavaScript object, but it's actually **text**. That's why it can be sent over the internet.

### Using Postman / Thunder Client

Instead of writing code to test APIs, you can use a tool:

- **Postman** — standalone app, industry standard ([Download](https://www.postman.com/downloads/))
- **Thunder Client** — VS Code extension, lightweight and fast

**Try this:**

1. Open Postman or Thunder Client
2. Set method to `GET`
3. Enter URL: `https://jsonplaceholder.typicode.com/users`
4. Click Send
5. You'll see a JSON array of 10 fake users!

---

## ✅ Step-by-Step Tasks

1. **Install a testing tool** — Install either Postman or the Thunder Client VS Code extension.

2. **Make your first GET request** — Send a GET request to `https://jsonplaceholder.typicode.com/posts`. How many posts are returned?

3. **Get a single resource** — Send GET to `https://jsonplaceholder.typicode.com/posts/1`. Read the response and identify the `title`, `body`, and `userId`.

4. **Try a POST request** — Send a POST to `https://jsonplaceholder.typicode.com/posts` with this JSON body:
   ```json
   {
       "title": "My First API Post",
       "body": "Learning how REST APIs work!",
       "userId": 1
   }
   ```
   Set the `Content-Type` header to `application/json`. What status code do you get back?

5. **Explore status codes** — Send a GET request to `https://jsonplaceholder.typicode.com/posts/999`. What status code do you get? Why?

6. **Explore another API** — Try the Dog API: `https://dog.ceo/api/breeds/image/random`. What does it return?

---

## 🧠 Knowledge Check

1. What is the difference between a client and a server?
2. Which HTTP method would you use to create a new user account?
3. What does a 404 status code mean, and whose "fault" is it — the client or the server?

---

## 💪 Challenge

Using Postman or Thunder Client, complete a full CRUD cycle on JSONPlaceholder:

1. **CREATE** — POST a new post to `/posts`
2. **READ** — GET the post (use the ID returned)
3. **UPDATE** — PUT an updated version with a new title
4. **DELETE** — DELETE the post

Document each step: the method, URL, body (if any), and the response status code.

---

## 📚 Resources

- 📖 [MDN — HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) — Deep dive into how HTTP works
- 🎥 [REST API Explained — freeCodeCamp](https://www.youtube.com/watch?v=lsMQRaeKNDk) — Clear video explanation
- 📖 [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — Free fake API for testing
- 📖 [HTTP Status Codes — httpstatuses.com](https://httpstatuses.com/) — Full status code reference
- 🎥 [How the Internet Works — Fireship](https://www.youtube.com/watch?v=7_LPdttKXPc) — Fast, visual explanation

---

## 🐛 Common Mistakes to Avoid

1. **Confusing GET and POST** — GET retrieves data and should never change anything on the server. POST creates new data. Using GET to create or delete data is a design mistake and a security risk.
2. **Forgetting the Content-Type header for POST requests** — When sending JSON data, you must set the `Content-Type` header to `application/json`. Without it, the server might not understand your data.

---

## 🧭 Navigation

← Previous: [Module Overview](../) | [Next Day: Node.js & Express →](../day-02/)
