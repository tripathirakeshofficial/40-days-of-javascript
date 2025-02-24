// Tasks

// 1. Odd or Even

let x = 24;
x % 2 === 0 ? console.log("Even") : console.log("Odd");

// 2. Do you have a Driving License?

let age = 17;
age >= 18
  ? console.log("You are eligible to apply for a driving license")
  : console.log("You are not eligible to apply for a driving license");

// 3. Calculate CTC with a Bonus

let monthlySalary = 12300;
let annualSalary = monthlySalary * 12;
let bonus = (20 * annualSalary) / 100;
let ctc = annualSalary + bonus;
console.log(ctc);

// 4. Write a program for the Traffic Light Simulation.

let color = "red";
color == "red" ? console.log("Stop") : console.log("Go");

// 5. Create an Electricity Bill Calculator

let units = 200;
let monthlyCharge = units * 150;
console.log(monthlyCharge);

let annualCharge = monthlyCharge * 12;
let discount = (20 * annualCharge) / 100;
let finalCharge = annualCharge - discount;
console.log(finalCharge);

// 6. Leap Year Checker

let year = 2025;
year % 4 === 0 ? console.log("Leap Year") : console.log("Not a Leap Year");

// 7. Max of Three Numbers

let p = 7;
let q = 9;
let r = 5;
let max = p > q ? (p > r ? p : r) : q > r ? q : r;
console.log(max);

// 8. Bitwise Doubling

let count = 5;
console.log(count << 1);
