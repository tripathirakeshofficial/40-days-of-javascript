console.log("Day 03");

// Operator - Symbols + - * /

// Operands - x+y, here x and y are operands

// Expression - x = 2, the whole thing together is an assignment expression, 3 + 4 is an evaluating expression

// Arithmetic Operators
console.log("**** Arithmetic Operators ****");

let a = 10;
let b = 20;

let f_name = "Rakesh";
let l_name = "Tripathi";

console.log(f_name + l_name);

console.log(a + b); //30
console.log(a - b); //-10
console.log(b - a); //10
console.log(a * b); //200
console.log(a / b); //0.5

console.log(a ** b); //10^20 exponential operator

console.log(a % b); // remainder operator

let count = 5;
console.log(count--); // count = count - 1
console.log(count);

console.log(--count);

// Assignment Operators
console.log("**** Assignment Operators ****");

let x = 10;
x += 5; // x= x + 5 (15)
console.log(x);
x -= 3; // x = x -3 (12)
console.log(x);
x *= 2; // x = x * 2 (24)
console.log(x);
x /= 4; // x = x / 4 (6)
console.log(x);

// Comparison Operators
console.log("**** Comparison Operators ****");

// loosely equals operator
console.log(4 == 5); // false
console.log(0 == false); // true
console.log(3 == "3"); //true

// strict equals operator
console.log(3 === "3"); // false
console.log(null === null); // true
console.log(undefined === undefined); // true)

// Nan = Not a number

let obj1 = { name: "rakesh" };
let obj2 = { name: "rakesh" };

console.log(obj1 === obj2); // false
console.log(obj1 !== obj2); // true

// Logical Operators
console.log("**** Logical Operators ****");
// && || ?? !
// op1 && op2
console.log(false && false); // false
console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // "Horse"

console.log(4 > 5 && 4 === 6); // false

// op1 || op2
console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); //true
console.log(false || true); // true

console.log("Cow" || "Horse"); // "Cow"

// ! negate operator
console.log(!true); // false

// ?? nullish quashing operator
let a1 = null ?? 1;
console.log(a1); // 1

let a2 = undefined ?? 3;
console.log(a2); // 3

const a3 = false ?? "rakesh";
console.log(a3); // false

const a4 = 0 ?? "rakesh";
console.log(a4); // 0

// Conditional (ternary) Operators
console.log("**** Conditional (ternary) Operators ****");

// condition ? val1 : val2

let age = 23;
console.log(age >= 60 ? "Senior Citizen" : "Non senior Citizen");

// Bitwise Operators
console.log("**** Bitwise Operators ****");
// & | ^ ~ << >>

console.log(15 & 9); // 15 in binary is 1111, 9 is binary is 1001
// 1111 & 1001 = 1001 = 1 * (2 ** 0) + 0 * (2 ** 1) + 0 * (2 ** 2) + 1 * (2 ** 3) = 9

console.log(15 | 9); // 1111 | 1001 = 1111 = 15

console.log(15 ^ 9); //XOR operation; 1111 ^ 1001 = 0110 = 6

console.log(9 << 2); // left shift operation; 1001 << 2 = 100100 = 36

console.log(9 >> 2); // right shift operation; 1001 >> 2 = 0010 = 2

// Grouping
console.log("**** Grouping ****");

let p = 1;
let q = 2;
let r = 3;

console.log(p + q * r); // 7
console.log((p + q) * r); // 9

// typeof
console.log("**** typeof ****");

console.log(typeof "rakesh"); // string
console.log(typeof false); // boolean

let size = 100;
console.log(typeof size); // number

const numbers = [1, 2, 3, 4];
console.log(typeof numbers); // object

console.log(typeof null); // object

// instanceof
console.log("**** instanceof ****");

// object instanceof objectType it will return true
