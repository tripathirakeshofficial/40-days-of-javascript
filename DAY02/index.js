console.log("Day 02");

const address = "Bangalore";

console.log(address);

// address = "USA";

// console.log(address);

// var can be redeclared. let can not be redeclared but can be reassigned. const con not be reassigned

let age;

age = 12;

let name, salary, department; // multiple variable declarations

console.log(name);

salary = null;

console.log(salary);

// Primitive data types

// String, Number, Boolean, Undefined, Null, BigInt, Symbol

// Non-Primitive Data Types: passed by reference

// Object, Array, Function

// Object- collection of key-value pairs

let student = {
  name: "Alice",
  age: 22,
  isEnrolled: true,
};
console.log(student.name);

// Array - ordered list of values

let arr = [1, 2, 4, 5];

let a = 10;
let b = a;
b = 20;
console.log(a, b);
