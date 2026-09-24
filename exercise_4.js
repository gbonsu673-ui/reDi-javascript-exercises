// Problem — Student Scores
// Topics: arrays, if/else, loops, objects, array operations

// You have an array of students:
const students = [
  { name: "Aisha", score: 85 },
  { name: "Rahul", score: 42 },
  { name: "John", score: 67 },
  { name: "Sara", score: 30 },
  { name: "David", score: 91 },
];

// Tasks:
// Use a loop to go through every student.
// Print the student's name and whether they passed or failed.
// A student passes if their score is 50 or above.
// Calculate the total score.
// Calculate the average score.

// Expected output:
// Aisha passed
// Rahul failed
// John passed
// Sara failed
// David passed
// Total: 315
// Average: 63

// Your Solution:
let totalScore = 0;
for (const student of students) {
  totalScore += student.score;
  let grade = student.score >= 50 ? "passed" : "failed";
  console.log(`${student.name} ${grade}`);
}
const averageScore = totalScore / students.length;
console.log(`Total: ${totalScore}`);
console.log(`Average: ${averageScore}`);
