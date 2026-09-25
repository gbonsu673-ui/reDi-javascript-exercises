//Exercises are from Asabeneh 30 Days of JavaScript

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTML", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTML", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTML", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTML", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTML", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTML", "CSS", "JS"],
    age: 20,
  },
];

/** Exercises: Level 1 */
// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

// 3. Destructure the rectangle object by its properties or keys.

//Solutions:
//1.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

//2.
let [fin, est, sw, den, nor] = countries;

//3.
let { width, height, area, perimeter } = rectangle;

/** Exercises: Level 2 */
// 1. Iterate through the users array and get all the keys of the object using destructuring

// 2. Find the persons who have less than two skills

//Solutions:
//1.
for (const { name, scores, skills, age } of users) {
  //console.log(`${name}, ${scores}, ${skills}, ${age}`);
}

//2.
for (const { name, scores, skills, age } of users) {
  if (skills.length < 2) {
    console.log(`${name}, ${scores}, ${skills}, ${age}`);
  }
}

/** Exercises: Level 3 */
// 1. A junior developer structure student name, skills and score in array of arrays which may not be easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
// Output: David (4) ["HTM", "CSS", "JS", "React"] 90 95
const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
let [name, skills, [, , jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);

// Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTML", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = function (students) {
  const objectsArray = [];
  for (const student of students) {
    let [studentName, studentSkills, studentScores] = student;
    const object = {
      name: studentName,
      skills: studentSkills,
      scores: studentScores,
    };
    objectsArray.push(object);
  }
  return objectsArray;
};

console.log(convertArrayToObject(students));
