// Spread - Array merge & clone
const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];
console.log("Merged array:", merged);

// Spread - Object update
const user = { name: "Alice", age: 25 };
const updated = { ...user, age: 26 };
console.log("Updated object:", updated);

// Rest - Function params
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log("Sum:", sum(1, 2, 3)); // 6

// Rest - Destructuring
const [first, ...restArr] = [10, 20, 30];
console.log("First:", first, "Rest:", restArr);

const { name, ...otherProps } = { name: "Bob", age: 22, role: "Dev" };
console.log("Name:", name, "Other:", otherProps);
