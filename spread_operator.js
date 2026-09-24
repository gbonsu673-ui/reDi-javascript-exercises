const numbers = [1, 2, 3, 4, 5];
const moreNumbers = [...numbers, 6, 7, 8];
const evenMoreNumbers = [0, ...moreNumbers];
console.log(moreNumbers);
console.log(evenMoreNumbers);

const [number1, number2, ...otherNumbers] = numbers;
console.log(`${number1},${number2},${otherNumbers}`);
