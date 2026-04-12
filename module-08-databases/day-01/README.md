# 📅 Day 01 of Module 08 — Database Concepts: SQL vs NoSQL

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Explain what a database is and why applications need them
- Understand the difference between SQL (relational) and NoSQL (document) databases
- Identify core database terminology: tables, rows, columns, documents, collections
- Decide when to use SQL vs NoSQL for a given application
- Describe the role of a database in a full-stack application

---

## 📖 Lesson Content

### What Is a Database?

A **database** is an organised collection of data that can be easily accessed, managed, and updated.

Think of it like this:
- A **spreadsheet** is a database for one person
- A **database** is a spreadsheet that works for millions of users at the same time, with rules to keep data safe and consistent

Every app you use has a database behind it:

| App | What the database stores |
|-----|------------------------|
| Instagram | Photos, comments, likes, user profiles |
| Gmail | Emails, contacts, labels |
| Spotify | Songs, playlists, listening history |
| A bank | Accounts, transactions, balances |

### SQL vs NoSQL — The Two Worlds

There are two main types of databases, and understanding the difference is essential.

#### SQL (Structured Query Language) — Relational Databases

SQL databases store data in **tables** with fixed rows and columns — like spreadsheets with strict rules.

```
┌─ users table ────────────────────────────┐
│ id │ name    │ email              │ age  │
├────┼─────────┼────────────────────┼──────┤
│ 1  │ Lucky   │ lucky@email.com    │ 28   │
│ 2  │ Grace   │ grace@email.com    │ 24   │
│ 3  │ Kevin   │ kevin@email.com    │ 30   │
└────┴─────────┴────────────────────┴──────┘
```

**Examples:** MySQL, PostgreSQL, SQLite, Microsoft SQL Server

**Key features:**
- Data has a fixed **schema** (structure) — every row has the same columns
- Tables can be linked together using **relationships** (foreign keys)
- Uses the **SQL language** to query data
- Great for data that has clear relationships (e.g., users → orders → products)

#### NoSQL (Not Only SQL) — Document Databases

NoSQL databases store data as flexible **documents** (like JSON objects) inside **collections**.

```json
// users collection
{
    "_id": "abc123",
    "name": "Lucky",
    "email": "lucky@email.com",
    "age": 28,
    "skills": ["HTML", "CSS", "JavaScript"],
    "address": {
        "city": "Nairobi",
        "country": "Kenya"
    }
}
```

**Examples:** MongoDB, Firebase Firestore, CouchDB, DynamoDB

**Key features:**
- **Flexible schema** — documents can have different fields
- Data is stored as JSON-like documents
- Great for rapid development and data that changes shape often
- Scales horizontally (add more servers easily)

### When to Use Which?

| Scenario | Use SQL | Use NoSQL |
|----------|---------|-----------|
| Banking / financial systems | ✅ Data integrity is critical | ❌ |
| E-commerce (users, orders, products) | ✅ Relationships matter | ⚠️ Possible |
| Social media posts & feeds | ⚠️ Possible | ✅ Flexible, fast reads |
| IoT sensor data (millions of events) | ❌ | ✅ High volume, flexible |
| Startup MVP / rapid prototyping | ⚠️ More setup | ✅ Fast to build |
| Data with complex relationships | ✅ JOINs handle this | ❌ Gets messy |

> 💡 **Rule of thumb:** If your data has clear relationships and needs strict consistency → **SQL**. If your data is flexible, nested, or changes often → **NoSQL**.

### Core Terminology

| SQL Term | NoSQL Term | What it means |
|----------|-----------|---------------|
| Database | Database | The container for all your data |
| Table | Collection | A group of related data |
| Row | Document | A single record/entry |
| Column | Field | A specific piece of data (name, email, etc.) |
| Schema | Schema-less | The structure/rules for your data |
| Primary Key | `_id` | Unique identifier for each record |
| Foreign Key | Reference / Embedding | How data relates to other data |

### Where Does the Database Fit?

In a full-stack application:

```
Browser (Client)  ←→  Server (API)  ←→  Database
   React/HTML          Node/Express       MongoDB/PostgreSQL
   
User clicks      →   Server processes  →  Database stores/retrieves
"Show my orders"      the request          the order data
```

The database is the **permanent memory** of your application. Without it, all data disappears when the server restarts.

---

## ✅ Step-by-Step Tasks

1. **List 5 apps you use daily** — For each, write down what data they store in a database. Think about users, content, settings, transactions.

2. **Design a schema (SQL style)** — Draw a table structure for a Library system:
   - `books` table: id, title, author, genre, year_published, is_available
   - `members` table: id, name, email, membership_date
   - `loans` table: id, book_id, member_id, borrow_date, return_date

3. **Design a document (NoSQL style)** — Write a JSON document for the same library system. Should a book document embed the loan history, or should loans be a separate collection?

4. **Compare the approaches** — Write 3 advantages of each approach for the library system.

5. **Explore a real database** — Visit [MongoDB Atlas](https://www.mongodb.com/atlas) and create a free account. Browse the sample datasets they provide.

6. **Try an SQL playground** — Go to [sqliteonline.com](https://sqliteonline.com/) and run this query:
   ```sql
   CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT, grade TEXT);
   INSERT INTO students VALUES (1, 'Lucky', 'A');
   INSERT INTO students VALUES (2, 'Grace', 'B');
   SELECT * FROM students;
   ```

---

## 🧠 Knowledge Check

1. What is the main difference between a SQL and a NoSQL database?
2. In SQL terminology, what is a "row" called in NoSQL?
3. Give one scenario where you would choose SQL and one where you'd choose NoSQL. Explain why.

---

## 💪 Challenge

You're building a food delivery app (like Uber Eats). Design the database:

**SQL approach:** Draw out the tables you'd need (restaurants, menu_items, users, orders, order_items). Show the relationships (foreign keys) between them.

**NoSQL approach:** Write the JSON documents for the same system. Decide what should be embedded vs referenced.

Compare both approaches: Which feels more natural for this use case? Write a paragraph defending your choice.

---

## 📚 Resources

- 📖 [MongoDB vs SQL — MongoDB Docs](https://www.mongodb.com/resources/compare/mongodb-mysql) — Official comparison
- 🎥 [SQL vs NoSQL Explained — Fireship](https://www.youtube.com/watch?v=W2Z7fbCLSTw) — 5-minute visual explanation
- 📖 [What is a Database? — Oracle](https://www.oracle.com/database/what-is-database/) — Clear introduction
- 📖 [SQL Tutorial — W3Schools](https://www.w3schools.com/sql/) — Interactive SQL learning
- 🎥 [Database Design Course — freeCodeCamp](https://www.youtube.com/watch?v=ztHopE5Wnpc) — Full free course

---

## 🐛 Common Mistakes to Avoid

1. **Choosing a database before understanding your data** — Don't pick MongoDB just because it's trendy, or PostgreSQL because someone told you to. Understand your data's shape and relationships first, then choose the right tool.
2. **Thinking NoSQL means "no structure"** — NoSQL databases are schema-flexible, not schema-chaotic. You should still design your document structure carefully. Poorly structured NoSQL data causes more problems than SQL ever would.

---

## 🧭 Navigation

← Previous: [Module Overview](../) | [Next Day: SQL Fundamentals →](../day-02/)
