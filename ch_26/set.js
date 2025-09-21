let key1 = { name: "John" };
let key2 = { name: "Bob" };

const key3 = Object.assign({}, key2);

const obj = new WeakSet([key1, key2, key1, key1, key1, key1, key1, key2]);

key1 = null;

console.log(obj);

const person = {
    name: "Thai",
    age: 22,
};

function a(p) {
    p.name = "Hello";
}

a(person);

console.log(person);
