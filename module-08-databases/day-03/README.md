# 📅 Day 03 of Module 08 — MongoDB Basics & Data Modelling

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Perform CRUD operations in MongoDB using the shell and Mongoose
- Understand documents, collections, and MongoDB's flexible schema
- Design data models using embedding and referencing strategies
- Write MongoDB queries with filters, projections, and sorting
- Model a real application's data (blog, e-commerce, social media)

---

## 📖 Lesson Content

### MongoDB Refresher

MongoDB stores data as **documents** (JSON-like objects) inside **collections** (like tables). Unlike SQL, documents in the same collection can have different structures.

```
SQL:        Database → Tables → Rows → Columns
MongoDB:    Database → Collections → Documents → Fields
```

### MongoDB CRUD Operations

#### Create

```javascript
// Insert one document
db.books.insertOne({
  title: "The Alchemist",
  author: "Paulo Coelho",
  year: 1988,
  genres: ["fiction", "philosophy"]
});

// Insert many documents
db.books.insertMany([
  { title: "Born a Crime", author: "Trevor Noah", year: 2016 },
  { title: "Things Fall Apart", author: "Chinua Achebe", year: 1958 }
]);
```

#### Read

```javascript
// Find all
db.books.find();

// Find with filter
db.books.find({ author: "Paulo Coelho" });

// Find one
db.books.findOne({ title: "The Alchemist" });

// Comparison operators
db.books.find({ year: { $gt: 2000 } });     // Greater than
db.books.find({ year: { $gte: 1990 } });    // Greater than or equal
db.books.find({ year: { $lt: 2000 } });     // Less than
db.books.find({ year: { $in: [1958, 1988] } }); // In array

// Projection — select specific fields
db.books.find({}, { title: 1, author: 1, _id: 0 });

// Sorting
db.books.find().sort({ year: -1 });  // Newest first
db.books.find().sort({ title: 1 });  // Alphabetical

// Limit and skip (pagination)
db.books.find().skip(0).limit(10);   // Page 1
db.books.find().skip(10).limit(10);  // Page 2

// Count
db.books.countDocuments({ author: "Paulo Coelho" });
```

#### Update

```javascript
// Update one
db.books.updateOne(
  { title: "The Alchemist" },
  { $set: { year: 1989, available: true } }
);

// Update many
db.books.updateMany(
  { year: { $lt: 2000 } },
  { $set: { classic: true } }
);

// Add to an array
db.books.updateOne(
  { title: "The Alchemist" },
  { $push: { genres: "adventure" } }
);
```

#### Delete

```javascript
db.books.deleteOne({ title: "Old Book" });
db.books.deleteMany({ available: false });
```

### With Mongoose (in Node.js)

```javascript
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: Number,
  genres: [String],
});

const Book = mongoose.model("Book", bookSchema);

// Create
const newBook = await Book.create({ title: "...", author: "..." });

// Read
const allBooks = await Book.find();
const oneBook = await Book.findById(id);
const filtered = await Book.find({ author: "Paulo Coelho" }).sort({ year: -1 });

// Update
const updated = await Book.findByIdAndUpdate(id, { year: 2000 }, { new: true });

// Delete
await Book.findByIdAndDelete(id);
```

### Data Modelling — Embedding vs Referencing

The biggest design decision in MongoDB: do you **embed** related data inside a document, or **reference** it with an ID?

#### Embedding (Denormalised)

Store related data inside the same document:

```javascript
// Blog post with comments EMBEDDED
{
  title: "Learning MongoDB",
  author: "Lucky",
  comments: [
    { user: "Alice", text: "Great article!", date: "2025-01-15" },
    { user: "Brian", text: "Thanks for sharing", date: "2025-01-16" }
  ]
}
```

**Use embedding when:**
- Data is always accessed together
- The embedded data is small and bounded
- You want fast reads (one query gets everything)

#### Referencing (Normalised)

Store an ID that links to another collection:

```javascript
// Blog post with REFERENCED author
// posts collection
{
  title: "Learning MongoDB",
  author_id: ObjectId("64a1b2c3..."),
  content: "..."
}

// authors collection
{
  _id: ObjectId("64a1b2c3..."),
  name: "Lucky Ochieng",
  email: "lucky@example.com"
}
```

**Use referencing when:**
- Data is shared across many documents
- Related data is large or unbounded
- You need to update the related data independently

#### Decision Guide

| Scenario | Strategy |
|----------|----------|
| Blog post with comments (few, always loaded) | Embed |
| User with address (one-to-one) | Embed |
| Product with categories (shared across products) | Reference |
| Order with customer info (customer is independent) | Reference |
| Course with enrolled students (many-to-many) | Reference |
| Tweet with likes (could be thousands) | Reference |

### Modelling a Blog Application

```javascript
// Users collection
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  bio: String,
  avatar: String,
});

// Posts collection — references author, embeds comments
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tags: [String],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

// Populate — fetch referenced data
const post = await Post.findById(id)
  .populate("author", "name email")
  .populate("comments.user", "name");
```

### Indexes

Indexes speed up queries on frequently searched fields:

```javascript
// In your schema
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, index: true },
  name: String,
});

// Or manually
db.users.createIndex({ email: 1 });  // 1 = ascending
```

---

## ✅ Step-by-Step Tasks

1. **CRUD practice** — Using MongoDB Atlas or Compass, create a `books` collection. Insert 5 books, query them with filters, update one, and delete one.

2. **Advanced queries** — Write queries to: find books published after 2000, find books sorted by year descending, count books per author, find books with "fiction" in their genres array.

3. **Design a schema** — Design MongoDB schemas for a blog application with users, posts, and comments. Decide what to embed vs reference and explain your reasoning.

4. **Mongoose populate** — Create User and Post models with a reference. Use `.populate()` to fetch posts with their author's name and email.

5. **Pagination** — Implement a `GET /api/posts?page=1&limit=10` route that returns paginated results using `.skip()` and `.limit()`.

---

## 🧠 Knowledge Check

1. When would you embed data vs reference it in MongoDB?
2. What does `$push` do in a MongoDB update operation?
3. What is `.populate()` in Mongoose and why is it useful?

---

## 💪 Challenge

Design and build the data model for an **"E-Commerce Store"**:

- Collections: `users`, `products`, `orders`, `reviews`
- Users can place many orders
- Orders contain multiple products (with quantity and price at time of purchase)
- Products can have many reviews (embedded)
- Design decisions: What to embed? What to reference?
- Implement full CRUD for products and orders
- Write queries for: best-selling products, user order history, average product rating

---

## 📚 Resources

- 📖 [MongoDB — CRUD Documentation](https://www.mongodb.com/docs/manual/crud/) — Official guide
- 📖 [Mongoose — Populate](https://mongoosejs.com/docs/populate.html) — Reference guide
- 📖 [MongoDB — Data Modelling](https://www.mongodb.com/docs/manual/data-modeling/) — Schema design patterns
- 🎥 [MongoDB Schema Design — Traversy Media](https://www.youtube.com/watch?v=QAqK-R9HUhc) — Video guide
- 📖 [MongoDB University](https://learn.mongodb.com/) — Free official courses

---

## 🐛 Common Mistakes to Avoid

1. **Embedding unbounded arrays** — If comments or likes can grow without limit, embedding them causes the document to exceed MongoDB's 16MB size limit. Reference large or unbounded arrays instead.
2. **Not using indexes** — Without indexes, MongoDB scans every document for every query. Add indexes on fields you frequently filter or sort by (e.g., email, createdAt).
3. **Over-referencing everything** — Coming from SQL, it's tempting to normalise everything. In MongoDB, embedding is often better for data that's read together. Over-referencing leads to many queries (the "N+1 problem").

---

## 🧭 Navigation

← [Previous Day: SQL Fundamentals](../day-02/) | [Next Module: Deployment, DevOps & Professional Workflow →](../../module-09-deployment-devops/)
