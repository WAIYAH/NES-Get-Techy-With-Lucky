// ============================================
// ✅ Day 02 Solution — Functions, Loops & Conditionals
// Module 05: Frontend JavaScript
// Get Techy with Lucky
// ============================================

// ============================================
// TASK 1: Write Three Functions
// ============================================

// 1a. calculateArea(length, width)
function calculateArea(length, width) {
  return length * width;
}

// 1b. isEven(number)
function isEven(number) {
  return number % 2 === 0;
}

// 1c. fahrenheitToCelsius(f)
function fahrenheitToCelsius(f) {
  return Math.round(((f - 32) * 5 / 9) * 100) / 100;
}

// Test:
console.log("=== TASK 1 ===");
console.log(calculateArea(5, 10));       // 50
console.log(isEven(7));                  // false
console.log(isEven(12));                 // true
console.log(fahrenheitToCelsius(100));   // 37.78


// ============================================
// TASK 2: Grade Calculator
// ============================================

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Test:
console.log("\n=== TASK 2 ===");
console.log(getGrade(95));  // "A"
console.log(getGrade(82));  // "B"
console.log(getGrade(73));  // "C"
console.log(getGrade(61));  // "D"
console.log(getGrade(45));  // "F"


// ============================================
// TASK 3: Loop a List
// ============================================

// 3a. Array of 5 countries
const countries = ["Kenya", "Japan", "Brazil", "Germany", "Canada"];

// 3b. for...of loop
console.log("\n=== TASK 3a — for...of ===");
for (const country of countries) {
  console.log(country);
}

// 3c. for loop with index
console.log("\n=== TASK 3b — numbered ===");
for (let i = 0; i < countries.length; i++) {
  console.log(`${i + 1}. ${countries[i]}`);
}


// ============================================
// TASK 4: FizzBuzz
// ============================================

console.log("\n=== TASK 4 — FizzBuzz ===");
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// ============================================
// TASK 5: Analyse Scores Function
// ============================================

function analyseScores(scores) {
  let highest = scores[0];
  let lowest = scores[0];
  let sum = 0;
  let passing = 0;

  for (const score of scores) {
    if (score > highest) highest = score;
    if (score < lowest) lowest = score;
    sum += score;
    if (score >= 50) passing++;
  }

  const average = Math.round((sum / scores.length) * 100) / 100;

  return { highest, lowest, average, passing };
}

// Test:
console.log("\n=== TASK 5 ===");
const testScores = [85, 42, 90, 67, 55, 38, 71, 96, 50, 23];
console.log(analyseScores(testScores));
// { highest: 96, lowest: 23, average: 61.7, passing: 7 }
