// Simulated DB
let users = [];

// Add user
function addUser(name, age) {
  users.push({ id: users.length + 1, name, age });
}

// List users
function listUsers() {
  users.forEach((u) => console.log(u));
}

// Simulated API fetch
function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.length > 0 ? resolve(users) : reject("No users found");
    }, 500);
  });
}

// Using all features
addUser("Alice", 30);
addUser("Bob", 25);

fetchUsers()
  .then((data) => console.log("Fetched users:", data))
  .catch((err) => console.log("Error:", err));
