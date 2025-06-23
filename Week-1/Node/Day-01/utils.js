// utils.js
function add(a, b) {
    return a + b;
}

function capitalizeName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

module.exports = { add, capitalizeName };
