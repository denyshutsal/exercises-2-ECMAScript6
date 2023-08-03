"use strict";

// Exercise 1
// The following function returns true if the parameter age is greater than 18.
// Otherwise, it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Do you have your parents permission to access this page?");
//   }
// }

// Rewrite it, to perform the same, but without if...else, and using arrow function.

// const checkAge = (age) =>
//   age > 18
//     ? true
//     : confirm("Do you have your parents permission to access this page?");

// console.log(checkAge(17));

// Exercise 2
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S. In this task the function should support only natural values of n: integers up from 1.

// function pow(num, degree) {
//   if (num < 1 || degree < 1) {
//     return "only natural values of n: integers up from 1!";
//   }

//   let result = num;

//   for (let i = 0; i < degree - 1; i++) {
//     result *= num;
//   }

//   return result;
// }

// console.log(pow(0, 0)); // Error
// console.log(pow(0, 1)); // Error
// console.log(pow(1, 0)); // Error
// console.log(pow(3, 2)); // 3 * 3 = 9
// console.log(pow(3, 3)); // 3 * 3 * 3 = 27
// console.log(pow(1, 100)); // 1 * 1 * ...* 1 = 1
// console.log(pow(5, 3)); // 125

// Exercise 3
// Replace Function Declaration with arrow functions in the code:

// JAVASCRIPT
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )

// ------------

// const ask = (question, yes, no) => (confirm(question) ? yes() : no());

// ask(
//   "Do you agree?",
//   function () {
//     alert("You agreed.");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// Exercise 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

// ------------------------

// checking entered values if they are a numeric ('2', '2442', not 'asdasdasd', '2qweqwe')
// from stackoverflow
// function isNumeric(str) {
//   // prompt always returns a string
//   // if (typeof str != "string") return false; // we only process strings!
//   return (
//     !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
//     !isNaN(parseFloat(str))
//   ); // ...and ensure strings of whitespace fail
// }

// const calculator = {
//   x: null,
//   y: null,
//   read: function () {
//     let x = prompt("Enter first number:");
//     let y = prompt("Enter second number:");
//     if (isNumeric(x) && isNumeric(y)) {
//       this.x = Number(x);
//       this.y = Number(y);
//     } else {
//       alert("Values must be numbers!");
//     }
//   },
//   sum: function () {
//     return this.x + this.y;
//   },
//   mul: function () {
//     return this.x * this.y;
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?

// const min = (a, b) => (a > b ? a : b);

// console.log(min(5, 4));
