// ====================
// Day 12 - Functions & Control Flow Practice
// ====================

// 1. Simple Function
function greet(name) {
  return `Hello ${name}, Welcome to Day 12`;
}
console.log(greet("Arsalan"));


// 2. Function with Math
function square(num) {
  return num * num;
}
console.log("The square of 5 is:", square(5));


// 3. If/Else Example (Age Check)
let age = 19;

if (age >= 18) {
  console.log("✅ You can book a taxi.");
} else {
  console.log("❌ Sorry, you must be 18+ to book a taxi.");
}


// 4. If/Else Example (Login Check)
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("✅ Login Successful");
} else {
  console.log("❌ Incorrect password, try again.");
}


// 5. Function Exercise: Even/Odd Checker
function isEven(num) {
  if (num % 2 === 0) {
    return `${num} is Even`;
  } else {
    return `${num} is Odd`;
  }
}
console.log(isEven(7));


// 6. Function Exercise: BMI Calculator
function bmi(weight, height) {
  let result = weight / (height * height);

  if (result < 18.5) {
    return `BMI: ${result.toFixed(1)} (Underweight)`;
  } else if (result < 25) {
    return `BMI: ${result.toFixed(1)} (Normal)`;
  } else if (result < 30) {  // FIX: you had ", 30" instead of "< 30"
    return `BMI: ${result.toFixed(1)} (Overweight)`;
  } else {
    return `BMI: ${result.toFixed(1)} (Obese)`;
  }
}
console.log(bmi(68, 1.76));


// 7. Mini Project: Taxi Fare Calculator
function calculateFare(distance) {
  const baseFare = 5;       // flat starting fee
  const ratePerKm = 2;      // per km charge
  return baseFare + distance * ratePerKm;
}
console.log("Fare for 10km:", calculateFare(10));
console.log("Fare for 3km:", calculateFare(3));
