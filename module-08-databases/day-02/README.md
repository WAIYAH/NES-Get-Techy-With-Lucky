# 📅 Day 02 of Module 08 — SQL Fundamentals — Queries, Joins & Schemas

⏱ **Estimated Time:** 2–3 hours

---

## 🎯 Learning Objectives

By the end of today, you will be able to:

- Create tables with appropriate data types and constraints
- Write SELECT queries with WHERE, ORDER BY, and LIMIT
- Use INSERT, UPDATE, and DELETE to modify data
- Understand primary keys, foreign keys, and table relationships
- Combine data from multiple tables using JOIN operations

---

## 📖 Lesson Content

### Creating Tables

A table is a structured collection of rows and columns — like a spreadsheet with strict rules.

```sql
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    age INTEGER,
    course TEXT DEFAULT 'Undeclared',
    enrolled_date DATE DEFAULT CURRENT_DATE
);
```

### Common Data Types

| Type | Description | Example |
|------|-------------|---------|
| `INTEGER` | Whole numbers | 42, -7, 0 |
| `TEXT` / `VARCHAR` | Text strings | "Lucky Ochieng" |
| `REAL` / `FLOAT` | Decimal numbers | 3.14, 85.5 |
| `BOOLEAN` | True/False | TRUE, FALSE |
| `DATE` | Date value | "2025-01-15" |
| `DATETIME` | Date and time | "2025-01-15 10:30:00" |

### Constraints

| Constraint | Purpose |
|-----------|---------|
| `PRIMARY KEY` | Unique identifier for each row |
| `NOT NULL` | Column cannot be empty |
| `UNIQUE` | No duplicate values allowed |
| `DEFAULT` | Fallback value if none provided |
| `CHECK` | Custom validation rule |
| `FOREIGN KEY` | Links to another table |

### INSERT — Adding Data

```sql
INSERT INTO students (name, email, age, course)
VALUES ('Alice Muthoni', 'alice@example.com', 22, 'Computer Science');

INSERT INTO students (name, email, age, course)
VALUES ('Brian Ochieng', 'brian@example.com', 25, 'Data Science');

INSERT INTO students (name, email, age, course)
VALUES ('Catherine Wanjiku', 'catherine@example.com', 20, 'Web Development');
```

### SELECT — Querying Data

```sql
-- Get all columns
SELECT * FROM students;

-- Get specific columns
SELECT name, email, course FROM students;

-- Filter with WHERE
SELECT * FROM students WHERE course = 'Computer Science';
SELECT * FROM students WHERE age > 21;
SELECT * FROM students WHERE age >= 20 AND course = 'Data Science';
SELECT * FROM students WHERE course = 'Web Development' OR course = 'Data Science';

-- Sort results
SELECT * FROM students ORDER BY name ASC;     -- A to Z
SELECT * FROM students ORDER BY age DESC;     -- Oldest first

-- Limit results
SELECT * FROM students LIMIT 5;

-- Count
SELECT COUNT(*) AS total_students FROM students;

-- Pattern matching
SELECT * FROM students WHERE name LIKE '%chi%';   -- Contains "chi"
SELECT * FROM students WHERE email LIKE '%@gmail%'; -- Gmail addresses
```

### UPDATE — Modifying Data

```sql
UPDATE students
SET course = 'Full Stack Development'
WHERE email = 'alice@example.com';

-- Update multiple columns
UPDATE students
SET age = 26, course = 'Machine Learning'
WHERE name = 'Brian Ochieng';
```

> ⚠️ **Always include a WHERE clause with UPDATE and DELETE.** Without it, you'll modify every row in the table.

### DELETE — Removing Data

```sql
DELETE FROM students WHERE id = 3;

-- DANGEROUS — deletes ALL rows!
-- DELETE FROM students;
```

### Aggregate Functions

```sql
SELECT COUNT(*) AS total FROM students;
SELECT AVG(age) AS average_age FROM students;
SELECT MAX(age) AS oldest FROM students;
SELECT MIN(age) AS youngest FROM students;

-- Group by
SELECT course, COUNT(*) AS student_count
FROM students
GROUP BY course
ORDER BY student_count DESC;
```

### Table Relationships

#### One-to-Many Example

A student belongs to one course, but a course has many students:

```sql
CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    instructor TEXT
);

CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    course_id INTEGER,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
```

### JOINs — Combining Tables

```sql
-- INNER JOIN — only rows that match in BOTH tables
SELECT students.name, students.email, courses.name AS course_name
FROM students
INNER JOIN courses ON students.course_id = courses.id;

-- LEFT JOIN — all students, even without a course
SELECT students.name, courses.name AS course_name
FROM students
LEFT JOIN courses ON students.course_id = courses.id;
```

#### Visual Guide

```
INNER JOIN:  Only matching rows from both tables
LEFT JOIN:   All rows from left table + matching from right
RIGHT JOIN:  All rows from right table + matching from left
FULL JOIN:   All rows from both tables
```

### Putting It Together

```sql
-- "Show me all students in each course, sorted by course name"
SELECT 
    courses.name AS course,
    students.name AS student,
    students.email
FROM students
INNER JOIN courses ON students.course_id = courses.id
ORDER BY courses.name, students.name;

-- "How many students per course?"
SELECT 
    courses.name AS course,
    COUNT(students.id) AS student_count
FROM courses
LEFT JOIN students ON courses.id = students.course_id
GROUP BY courses.name
ORDER BY student_count DESC;
```

---

## ✅ Step-by-Step Tasks

1. **Create a database** — Open [sqliteonline.com](https://sqliteonline.com/). Create a `students` table with: id, name, email, age, and course columns. Add appropriate constraints.

2. **Insert 5 students** — Add 5 students with different courses and ages. Verify with `SELECT * FROM students`.

3. **Write queries** — Write SELECT statements to: find all students over 21, find students in a specific course, count total students, find the average age, and list students alphabetically.

4. **Create relationships** — Create a `courses` table. Modify `students` to use `course_id` as a foreign key. Insert data and write a JOIN query to show students with their course names.

5. **Update and delete** — Update a student's course. Delete a student by ID. Verify your changes.

---

## 🧠 Knowledge Check

1. What is the difference between `WHERE` and `HAVING` in SQL?
2. Why are foreign keys important in relational databases?
3. What is the difference between INNER JOIN and LEFT JOIN?

---

## 💪 Challenge

Build a **"Library Database"**:

- Tables: `authors`, `books`, `borrowers`, `loans`
- An author has many books (one-to-many)
- A borrower can have many loans (one-to-many)
- Each loan references a book and a borrower
- Write queries to: find all books by a specific author, list currently borrowed books, find the most popular book (most loans), find borrowers with overdue books

---

## 📚 Resources

- 📖 [W3Schools — SQL Tutorial](https://www.w3schools.com/sql/) — Interactive tutorials
- 📖 [SQLBolt — Learn SQL](https://sqlbolt.com/) — Hands-on exercises
- 📖 [SQLite Online](https://sqliteonline.com/) — Practice in the browser
- 🎥 [SQL in 100 Seconds — Fireship](https://www.youtube.com/watch?v=zsjvFFKOm3c) — Quick overview
- 📖 [MDN — SQL Introduction](https://developer.mozilla.org/en-US/docs/Glossary/SQL) — Concepts

---

## 🐛 Common Mistakes to Avoid

1. **UPDATE or DELETE without WHERE** — This affects EVERY row in the table. Always double-check your WHERE clause before running destructive queries.
2. **Forgetting to use JOIN** — If you SELECT from two tables without a JOIN condition, you get a "Cartesian product" — every combination of rows (e.g., 10 × 10 = 100 rows instead of 10).
3. **Using reserved words as column names** — Words like `order`, `group`, `select`, and `table` are SQL keywords. If you must use them, wrap in backticks: `` `order` ``.

---

## 🧭 Navigation

← [Previous Day: Database Concepts — SQL vs NoSQL](../day-01/) | [Next Day: MongoDB Basics & Data Modelling →](../day-03/)
