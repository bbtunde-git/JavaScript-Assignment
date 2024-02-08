/**
 * Write two JavaScript functions that calculate
 * the multiplication and division of two numbers.
 * The name of your first function must be multiplication
 * and the name of the second function must be division.
 * The functions must take 2 arguments corresponding to the
 * numbers to be multiplied or divided: i and j.
 * The multiplication function must return the
 * product of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 * The division function must return the
 * quotient of the 2 numbers passed into it.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

function multiplication(i, j) {
  let product = i * j;
  return product.toFixed(2);
}

function division(i, j) {
  if (j !== 0) {
    let quotient = i / j;
    return quotient.toFixed(2);
  } else {
    return "Cannot divide by zero";
  }
}

let num1 = 5;
let num2 = 3;
let productResult = multiplication(num1, num2);
console.log(productResult); // Output: 15.00

let dividend = 10;
let divisor = 2;
let divisionResult = division(dividend, divisor);
console.log(divisionResult); // Output: 5.00

// End of code

// Do not modify code below this line.
// --------------------------------
