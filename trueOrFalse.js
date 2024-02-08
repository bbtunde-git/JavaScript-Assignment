/**
 * Write a JavaScript function that takes in two numbers
 * and returns true if the sum of both numbers is
 * greater than 100 and returns false otherwise.
 * The name of your function must be trueOrFalse.
 * The function must take 2 arguments corresponding
 * to the numbers to be summed up: m and n.
 * The function must return true if the
 * sum of the numbers is greater than 100 and
 * return false otherwise.
 */

// Write your code here

function trueOrFalse(m, n) {
  return (m + n) > 100;
}

let num1 = 60;
let num2 = 50;
let result1 = trueOrFalse(num1, num2);
console.log(result1); // Output: true

let num3 = 30;
let num4 = 40;
let result2 = trueOrFalse(num3, num4);
console.log(result2); // Output: false

// End of code

// Do not modify code below this line.
// --------------------------------
