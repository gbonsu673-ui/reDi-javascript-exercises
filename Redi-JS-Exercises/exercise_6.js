// Problem — User Information

// Topics: destructuring, objects, spread, if/else, map, filter

// You have this array:

const users = [
  {
    name: "Aisha",
    age: 22,
    city: "Mumbai",
    active: true,
  },
  {
    name: "Rahul",
    age: 17,
    city: "Delhi",
    active: false,
  },
  {
    name: "John",
    age: 25,
    city: "Mumbai",
    active: true,
  },
  {
    name: "Sara",
    age: 16,
    city: "Pune",
    active: true,
  },
];

// Tasks
// Use destructuring to get name, age, and city from each user.
// Use if/else to print whether each user is an adult.
// Display this information along their city

// Use filter() to find users who are active.

// Use filter() to find users who live in Mumbai.

// Use map() and the spread operator to create a new array where each user has a new property called isAdult.

// Your Solution:
// Use destructuring to get name, age, and city from each user.
// Use if/else to print whether each user is an adult.
// Display this information along their city
for (const user of users) {
  const { name, age, city } = user;
  console.log(
    `${name} is ${age >= 18 ? "an adult" : "not an adult"} and lives in ${city}`,
  );
}

// Use filter() to find users who are active.
const activeUsers = users.filter((user) => user.active);
console.log(activeUsers);

// Use filter() to find users who live in Mumbai.
const mumbaiUsers = users.filter((user) => user.city === "Mumbai");
console.log(mumbaiUsers);

// Use map() and the spread operator to create a new array where each user has a new property called isAdult.
const usersWithAdultProp = users.map((user) => {
  return { ...user, isAdult: user.age >= 18 };
});
console.log(usersWithAdultProp);
