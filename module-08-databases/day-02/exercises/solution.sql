-- ============================================
-- ✅ Module 08 · Day 02 — SQL Solutions
-- SQL Fundamentals — Queries, Joins & Schemas
-- ============================================


-- ============================================
-- TASK 1: Create Tables
-- ============================================

-- 1a. Courses table
CREATE TABLE courses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    instructor TEXT NOT NULL,
    duration_weeks INTEGER DEFAULT 8
);

-- 1b. Students table
CREATE TABLE students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    age INTEGER,
    course_id INTEGER,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);


-- ============================================
-- TASK 2: Insert Data
-- ============================================

-- 2a. Insert courses
INSERT INTO courses (name, instructor, duration_weeks)
VALUES ('Web Development', 'Lucky Ochieng', 10);

INSERT INTO courses (name, instructor, duration_weeks)
VALUES ('Data Science', 'Alice Muthoni', 12);

INSERT INTO courses (name, instructor)
VALUES ('Cybersecurity', 'Brian Kimani');

-- 2b. Insert students
INSERT INTO students (name, email, age, course_id)
VALUES ('Grace Wanjiku', 'grace@example.com', 22, 1);

INSERT INTO students (name, email, age, course_id)
VALUES ('David Otieno', 'david@example.com', 25, 1);

INSERT INTO students (name, email, age, course_id)
VALUES ('Fiona Achieng', 'fiona@example.com', 20, 2);

INSERT INTO students (name, email, age, course_id)
VALUES ('James Kamau', 'james@example.com', 23, 2);

INSERT INTO students (name, email, age, course_id)
VALUES ('Linda Njeri', 'linda@example.com', 19, 3);


-- ============================================
-- TASK 3: SELECT Queries
-- ============================================

-- 3a. Select all students
SELECT * FROM students;

-- 3b. Name and email of students older than 21
SELECT name, email FROM students WHERE age > 21;

-- 3c. Students in course_id 1, sorted alphabetically
SELECT * FROM students
WHERE course_id = 1
ORDER BY name ASC;

-- 3d. Count total students
SELECT COUNT(*) AS total_students FROM students;

-- 3e. Average age
SELECT AVG(age) AS average_age FROM students;


-- ============================================
-- TASK 4: UPDATE and DELETE
-- ============================================

-- 4a. Update student 1's course
UPDATE students SET course_id = 2 WHERE id = 1;

-- 4b. Delete student 5
DELETE FROM students WHERE id = 5;


-- ============================================
-- TASK 5: JOINs
-- ============================================

-- 5a. INNER JOIN — students with their course names
SELECT students.name AS student, students.email, courses.name AS course
FROM students
INNER JOIN courses ON students.course_id = courses.id;

-- 5b. LEFT JOIN — all courses with student counts
SELECT courses.name AS course, COUNT(students.id) AS student_count
FROM courses
LEFT JOIN students ON courses.id = students.course_id
GROUP BY courses.name;

-- 5c. Courses sorted by enrolment (most first)
SELECT courses.name AS course, COUNT(students.id) AS student_count
FROM courses
LEFT JOIN students ON courses.id = students.course_id
GROUP BY courses.name
ORDER BY student_count DESC;
