// Module 05, Day 01 — Solution: Simple Calculator

const num1 = 10;
const num2 = 3;

// Calculate
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;
const remainder = num1 % num2;

// Greet the user
const userName = "Lucky";
console.log(`Hello, ${userName}! Here are your calculations:`);

// Display results using template literals
console.log(`${num1} + ${num2} = ${sum}`);
console.log(`${num1} - ${num2} = ${difference}`);
console.log(`${num1} × ${num2} = ${product}`);
console.log(`${num1} ÷ ${num2} = ${quotient}`);
console.log(`${num1} % ${num2} = ${remainder}`);
