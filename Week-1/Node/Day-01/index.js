console.log("Hello");
/***********************
 * Exercise 1: Variable Declarations & Scope
 ***********************/

// var is function-scoped
function varTest() {
    var x = 1;
    if (true) {
        var x = 2; // same variable
        console.log("Inside if with var:", x);
    }
    console.log("Outside if with var:", x);
}
varTest();

// let is block-scoped
function letTest() {
    let y = 1;
    if (true) {
        let y = 2; // different variable
        console.log("Inside if with let:", y);
    }
    console.log("Outside if with let:", y);
}
letTest();

// const is also block-scoped and cannot be reassigned
const z = 5;
// z = 6; // ❌ This will throw an error

// const with objects
const person = {
    name: "Alice",
    age: 25,
};
person.age = 26; // ✅ we can modify properties
console.log("Modified person:", person);

// const with arrays
const numbers = [1, 2, 3];
numbers.push(4);
console.log("Modified array:", numbers);

/***********************
 * Exercise 2: Function Mastery
 ***********************/

// Traditional function
function greet(name) {
    return `Hello, ${name}`;
}

// Function expression
const greetExp = function(name) {
    return `Hello, ${name}`;
};

// Arrow function (explicit return)
const greetArrow = (name) => {
    return `Hello, ${name}`;
};

// Arrow function (implicit return)
const greetShort = name => `Hello, ${name}`;

console.log(greet("Alice"));
console.log(greetExp("Bob"));
console.log(greetArrow("Carol"));
console.log(greetShort("Dan"));

// this binding
const obj = {
    name: "Object",
    regularFunc: function () {
        console.log("regularFunc this:", this.name);
    },
    arrowFunc: () => {
        console.log("arrowFunc this:", this); // undefined or window/global
    }
};
obj.regularFunc();
obj.arrowFunc();

// Higher-order function
function multiplyBy(factor) {
    return function(num) {
        return num * factor;
    };
}
const double = multiplyBy(2);
console.log("Double of 5:", double(5));

/***********************
 * Exercise 3: Object Manipulation
 ***********************/

const user = {
    id: 1,
    name: "Harshal",
    contact: {
        email: "harshal@example.com",
        phone: "1234567890"
    },
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

user.greet();

// Object destructuring
const { name, contact: { email } } = user;
console.log("Name:", name);
console.log("Email:", email);

// Spread operator
const updatedUser = { ...user, age: 22 };
console.log("Updated user:", updatedUser);

// Computed property
const prop = "role";
const admin = {
    [prop]: "admin",
    isActive: true
};
console.log("Admin object:", admin);

// Property access
console.log(user["name"]);
user["name"] = "Updated Harshal";

/***********************
 * Exercise 4: Array Operations
 ***********************/

const nums = [1, 2, 3, 4, 5];

// map
const squared = nums.map(n => n * n);
console.log("Squared:", squared);

// filter
const evens = nums.filter(n => n % 2 === 0);
console.log("Even numbers:", evens);

// reduce
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// find and some
console.log("Find 3:", nums.find(n => n === 3));
console.log("Has >4:", nums.some(n => n > 4));

// Chaining
const processed = nums.filter(n => n > 2).map(n => n * 10);
console.log("Chained result:", processed);

// Array destructuring
const [first, second, ...rest] = nums;
console.log("First two:", first, second);
console.log("Rest:", rest);

// Spread operator
const moreNums = [...nums, 6, 7];
console.log("Extended array:", moreNums);

/***********************
 * Exercise 5: Modern JavaScript Features
 ***********************/

// Template literals
const userName = "Harshal";
const msg = `Welcome, ${userName}!
This is a multi-line message.`;
console.log(msg);

// Destructuring
const coords = [10, 20];
const [xCoord, yCoord] = coords;
console.log("Coordinates:", xCoord, yCoord);

// Default parameters
function sayHi(name = "Guest") {
    return `Hi, ${name}`;
}
console.log(sayHi());
console.log(sayHi("Harshal"));

// Rest parameters
function sumAll(...nums) {
    return nums.reduce((a, b) => a + b);
}
console.log("Sum all:", sumAll(1, 2, 3, 4));

// Optional chaining & nullish coalescing
const config = {
    settings: {
        theme: "dark"
    }
};
const theme = config.settings?.theme ?? "default";
console.log("Theme:", theme);
