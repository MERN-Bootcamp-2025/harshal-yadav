// Basic custom promise
const delay = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(`Waited ${ms}ms`), ms));

delay(1000).then(console.log);

// Chaining
Promise.resolve(1)
  .then((val) => val * 2)
  .then((val) => console.log("Chained result:", val));

// Error handling
Promise.reject("Error!")
  .catch((err) => console.log("Caught:", err));

// Simulate API
function fetchUserData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ name: "Alice", age: 30 }), 1000)
  );
}
async function showUser() {
  const user = await fetchUserData();
  console.log("Fetched user:", user);
}
showUser();
