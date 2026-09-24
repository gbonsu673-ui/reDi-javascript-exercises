const student = {
  name: "Ana",
  age: 20,
  course: "Javascript",
  score: 90,
};

// Use the spread operator to increment the users age by 1.
student = {
  ...student,
  age: student.age + 1,
};

// let { age: newAge, ...otherInfo } = student;
// //newAge = newAge + 1;
// console.log(newAge);

// Extract name, course, and marks using destructuring.
const { name, course, score, age } = student;

//Use a template string to show a message similar to:
//"Ana aged 21 scored 100% in Javascript"
//assume the given score is on 90.
console.log(`${name} aged ${age} scored ${score} in ${course}`);
