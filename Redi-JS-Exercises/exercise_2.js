//Write functions to do each of the following tasks:

// 1. Calculate the area of a rectangle.
const calculateArea = function (length, width) {
  return length * width;
};
// 2. Check whether a number is even.
const checkEven = function (number) {
  return number % 2 === 0;
};

// 3. Convert Celsius to Fahrenheit.
const convertToFahrenheit = function (temperature) {
  return temperature * (9 / 5) + 32;
};

// 4. Return the largest of three numbers.
const returnLargestNumber = function (num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

// 5. Capitalize the first letter of a string.
const capitalizeFirstLetter = function (word) {
  let wordArray = word.split("");
  wordArray[0] = wordArray[0].toUpperCase();
  return wordArray.toString();
};

// Rewrite all of them to arrow functions.
// 1. Calculate the area of a rectangle.
const calculateAreaArrow = (length, width) => length * width;

// 2. Check whether a number is even.
const checkEvenArrow = (number) => number % 2 === 0;

// 3. Convert Celsius to Fahrenheit.
const convertToFahrenheitArrow = (temperature) => temperature * (9 / 5) + 32;

// 4. Return the largest of three numbers.
const returnLargestNumberArrow = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
};

// 5. Capitalize the first letter of a string.
const capitalizeFirstLetterArrow = (word) => {
  let wordArray = word.split("");
  wordArray[0] = wordArray[0].toUpperCase();
  return wordArray.toString();
};
