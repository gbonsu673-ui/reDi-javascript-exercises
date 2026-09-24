// Create a const containing your name
const FULLNAME = "Gideon Bonsu";

// What error is displayed by JS if you try to reassign to a const?
// FULLNAME = "Janet Bonsu"; // TypeError

// Create a let containing your age and increase it by 1
let age = 24;
age += 1;

// Create a variable inside an if block and try accessing it outside
if (age > 18) {
  let newName = "Sadio Mane";
}
console.log(newName); // ReferenceError: newName not defined

// Explain why const doesn't mean the value in always immutable
