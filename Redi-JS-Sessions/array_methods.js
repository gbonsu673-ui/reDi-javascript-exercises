const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Higher Order Functions - A function that accepts other functions (callbacks)

// forEach -> manipulations are done without being stored
nums.forEach((number, index) => {
  return console.log(`${index + 1}, ${number}`); // index predefined in JavaScript
});

// space between console outputs
console.log();

// map -> creates a new array with manipulated items
const numTimes10 = nums.map((number) => {
  return number * 10;
});

// filter -> creates a new array with filtered eletements
const evenNums = nums.filter((number) => {
  return number % 2 === 0;
});

// find -> returns the first occurrence of the item
const numberThree = nums.find((number) => {
  number === 3;
});

// reduce -> creates a new array
const count = 0;
const sumOfNumbers = nums.reduce(
  (accumulate, number) => accumulate + number,
  count,
);

// nums.console.log(`Numbers arraynumTimes10`);
console.log(evenNums);
console.log(sumOfNumbers);
