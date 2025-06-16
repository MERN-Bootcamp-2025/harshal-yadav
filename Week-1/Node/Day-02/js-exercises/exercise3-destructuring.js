// Nested Object
const user = {
  id: 1,
  profile: {
    personal: {
      name: "Alice",
      age: 30
    },
    contact: {
      email: "alice@example.com"
    }
  }
};

const {
  profile: {
    personal: { name: fullName },
    contact: { email = "N/A" }
  }
} = user;
console.log("Name:", fullName, "Email:", email);

// Destructure in function params
function greet({ name = "Guest" }) {
  console.log(`Hello, ${name}`);
}
greet({ name: "Zara" });
greet({});

// Array destructuring
const [x = 0, y = 1] = [5];
console.log("x:", x, "y:", y);
