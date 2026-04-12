// ============================================
// ✅ Module 08 · Day 03 — MongoDB Solutions
// MongoDB Basics & Data Modelling
// ============================================


// ============================================
// TASK 1: CRUD Operations
// ============================================

// 1a. Insert 5 books
db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genres: ["fiction", "philosophy"],
    available: true,
  },
  {
    title: "Born a Crime",
    author: "Trevor Noah",
    year: 2016,
    genres: ["autobiography", "comedy"],
    available: true,
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    genres: ["fiction", "historical"],
    available: true,
  },
  {
    title: "Half of a Yellow Sun",
    author: "Chimamanda Ngozi Adichie",
    year: 2006,
    genres: ["fiction", "historical"],
    available: false,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    year: 2011,
    genres: ["non-fiction", "history"],
    available: true,
  },
]);

// 1b. Books published after 2000
db.books.find({ year: { $gt: 2000 } });

// 1c. Books with "fiction" genre
db.books.find({ genres: "fiction" });

// 1d. Update a book
db.books.updateOne(
  { title: "The Alchemist" },
  {
    $set: { available: false },
    $push: { genres: "adventure" },
  }
);

// 1e. Delete unavailable books
db.books.deleteMany({ available: false });


// ============================================
// TASK 2: Advanced Queries
// ============================================

// 2a. Sorted by year, showing only title and year
db.books.find({}, { title: 1, year: 1, _id: 0 }).sort({ year: -1 });

// 2b. Count books per author
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
]);

// 2c. Title contains "the" (case-insensitive)
db.books.find({ title: { $regex: /the/i } });


// ============================================
// TASK 3: Schema Design with Mongoose
// ============================================

const mongoose = require("mongoose");

// 3a. User schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String, maxlength: 300 },
  joinedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// 3b. Post schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tags: [String],
  comments: [
    {
      user: { type: String, required: true },
      text: { type: String, required: true },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model("Post", postSchema);


// ============================================
// TASK 4: Populate
// ============================================

// 4a. Fetch post with populated author
async function getPostWithAuthor(postId) {
  const post = await Post.findById(postId).populate("author", "name email");
  return post;
}


// ============================================
// TASK 5: Pagination
// ============================================

// 5a. Paginated posts
async function getPaginatedPosts(page = 1, limit = 10) {
  const skip = (page - 1) * limit;
  const total = await Post.countDocuments();
  const totalPages = Math.ceil(total / limit);

  const posts = await Post.find()
    .populate("author", "name")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return { posts, page, limit, total, totalPages };
}
