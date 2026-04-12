-- ============================================
-- 📝 Module 08 · Day 02 — SQL Exercises
-- SQL Fundamentals — Queries, Joins & Schemas
-- ============================================
-- Practice writing SQL queries. Replace each TODO with working SQL.
-- Use https://sqliteonline.com/ to test your queries.
-- ============================================


-- ============================================
-- TASK 1: Create Tables
-- ============================================

-- 1a. Create a "courses" table with:
--     id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
--     name (TEXT, NOT NULL)
--     instructor (TEXT, NOT NULL)
--     duration_weeks (INTEGER, DEFAULT 8)

-- TODO: Write your CREATE TABLE statement here


-- 1b. Create a "students" table with:
--     id (INTEGER, PRIMARY KEY, AUTOINCREMENT)
--     name (TEXT, NOT NULL)
--     email (TEXT, UNIQUE, NOT NULL)
--     age (INTEGER)
--     course_id (INTEGER, FOREIGN KEY referencing courses.id)

-- TODO: Write your CREATE TABLE statement here


-- ============================================
-- TASK 2: Insert Data
-- ============================================

-- 2a. Insert 3 courses:
--     "Web Development" taught by "Lucky Ochieng", 10 weeks
--     "Data Science" taught by "Alice Muthoni", 12 weeks
--     "Cybersecurity" taught by "Brian Kimani", default duration

-- TODO: Write your INSERT statements here


-- 2b. Insert 5 students with different ages and course_ids

-- TODO: Write your INSERT statements here


-- ============================================
-- TASK 3: SELECT Queries
-- ============================================

-- 3a. Select all students

-- TODO


-- 3b. Select only the name and email of students older than 21

-- TODO


-- 3c. Select students enrolled in course_id = 1, sorted alphabetically

-- TODO


-- 3d. Count the total number of students

-- TODO


-- 3e. Find the average age of all students

-- TODO


-- ============================================
-- TASK 4: UPDATE and DELETE
-- ============================================

-- 4a. Update the student with id = 1 — change their course_id to 2

-- TODO


-- 4b. Delete the student with id = 5

-- TODO


-- ============================================
-- TASK 5: JOINs
-- ============================================

-- 5a. INNER JOIN — Show each student's name alongside their course name

-- TODO


-- 5b. LEFT JOIN — Show ALL courses, even those with no students
--     Display course name and the count of students

-- TODO


-- 5c. Show courses sorted by number of enrolled students (most first)

-- TODO
