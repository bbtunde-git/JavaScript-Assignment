/**
 * Write two JavaScript functions that convert temperatures
 * to and from Celsius and Fahrenheit.
 * The name of your first function must be celciusToFahrenheit
 * and the name of the second function must be fahrenheitToCelcius.
 * The functions must take one arguments corresponding
 * to the temperature to be converted: temperature.
 * The celciusToFahrenheit function must return
 * the temperature converted from Celcius to Fahrenheit.
 * Round off the returned value to 2 decimal places.
 * The fahrenheitToCelcius function must return
 * the temperature converted from Fahrenheit to Celcius.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

function celciusToFahrenheit(temperature) {
  let fahrenheit = (temperature * 9/5) + 32;
  return fahrenheit.toFixed(2);
}

function fahrenheitToCelcius(temperature) {
  let celsius = (temperature - 32) * 5/9;
  return celsius.toFixed(2);
}

let celsiusTemperature = 25;
let fahrenheitEquivalent = celciusToFahrenheit(celsiusTemperature);
console.log(fahrenheitEquivalent); // Output: 77.00

let fahrenheitTemperature = 98.6;
let celsiusEquivalent = fahrenheitToCelcius(fahrenheitTemperature);
console.log(celsiusEquivalent); // Output: 37.00


// End of code

// Do not modify code below this line.
// --------------------------------
