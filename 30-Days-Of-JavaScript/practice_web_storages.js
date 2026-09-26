// 5 methods to work on local storage:
// setItem(), getItem(), removeItem(), clear(), key()


// Exercises: Level 1
// Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("firstName", "Gideon");
localStorage.setItem("lastName", "Bonsu");
localStorage.setItem("age", 24);
localStorage.setItem("country", "Germany");
localStorage.setItem("city", "Bonn");


// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: "Test",
    lastName: "Student",
    skills: ["HTML", "CSS", "JS"],
    country: "Germany",
    enrollmentStatus: true
};
// set testStudent value in localStorage
const studentText = JSON.stringify(student);
localStorage.setItem("testStudent", studentText);

// get testStudent value from localStorage
let studentFromLocalStorage = localStorage.getItem("testStudent");
let studentObj = JSON.parse(studentFromLocalStorage); // variable can be accessed directly from the Console tab on the browser's developer tools


// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
const personAccount = {
    firstName: "David",
    lastName: "Surfer",
    incomes: [200, 100, 300],
    expenses: [100, 300, 200],

    totalIncome: function(){
        return this.incomes.reduce((add, income) => add + income, 0)
    },
    totalExpense: function() {
        return this.expenses.reduce((add, expense) => add + expense, 0)
    },
    addIncome: function (income){
        this.incomes.push(income);
    },
    addExpense: function (expense){
        this.expenses.push(expense);
    },
    accountBalance: function (){
        return this.totalIncome() - this.totalExpense();
    },
    accountInfo: function(){
        return `First name: ${this.firstName}, Last name: ${this.lastName}, Total income: ${this.totalIncome()}, Total expense: ${this.totalExpense()}`;
    }
};