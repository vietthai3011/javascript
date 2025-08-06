const a = [4, 50, 6, 7, 81, 9, 100, 2, 3];
const b = ["Orange", "apple", "banana"];

const c = [
    { name: "a", age: 10 },
    { name: "John", age: 20 },
    { name: "c", age: 30 },
    { name: "Bob", age: 40 },
    { name: "Alice", age: 50 },
];

console.log(a.sort((a, b) => a - b));
console.log(b.sort((a, b) => a.localeCompare(b)));

const d = c.slice().sort((a, b) => {
    return a.name.localeCompare(b.name);
});
const e = structuredClone(a);

console.log(e);
