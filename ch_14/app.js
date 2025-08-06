const person = {
	age: 20,
	name: "Thai",
};

// console.log("age" in person);
// console.log(person instanceof Object);

const target = {a: 1};
const source = {
	b: 2,
	need: {
		c: 4
	}
};

const a = Object.assign({}, target, source);

console.log(target === a);

source.need.c = 22;

a.info = {hello: "world"};

console.log(a);

Object.freeze(a);

a.info.hello = 3;

console.log(a);

