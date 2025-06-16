// Primitive vs Reference Types
let a = 10;
let b = a;
b++;
console.log("Primitive:", a, b); // 10, 11

let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";
console.log("Reference:", obj1.name, obj2.name); // Bob, Bob

// Shallow copy
let shallowCopy = { ...obj1 };
shallowCopy.name = "Charlie";
console.log("Shallow Copy:", obj1.name, shallowCopy.name); // Bob, Charlie

// Deep copy using JSON
let nested = { user: { name: "Dave" } };
let deepCopy = JSON.parse(JSON.stringify(nested));
deepCopy.user.name = "Eve";
console.log("Deep Copy:", nested.user.name, deepCopy.user.name); // Dave, Eve

// Function behavior
function mutate(obj) {
  obj.changed = true;
}
let sample = {};
mutate(sample);
console.log("Mutated in function:", sample); // { changed: true }
