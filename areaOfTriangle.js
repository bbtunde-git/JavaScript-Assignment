/**
 * Write a JavaScript function that finds the area of a triangle
 * given the lengths of three of its sides
 * The name of your function must be areaOfTriangle
 * The function must take 3 arguments corresponding
 * to the length of one side of the trianle: a, b and c.
 * The function must return the area of the triangle.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

let sideA = 5;
let sideB = 6;
let sideC = 7;

function areaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area.toFixed(2);
}

let triangleArea = areaOfTriangle(sideA, sideB, sideC);
console.log(triangleArea);

// End of code

// Do not modify code below this line.
// --------------------------------
