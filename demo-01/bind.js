function getName(greeting, param1, param2) {
    console.log(param1);
    console.log(param2);

    console.log(`${greeting}, my name is ${this.name}`);
}

const person1 = {
    name: "John",
    age: 20,

    logTest() {
        console.log(this);
    },
};

const { logTest } = person1;

logTest();

getName.bind(person1)("hello", 2, 3);

const a = { name: "A" };
const b = { name: "B" };
const c = { name: "C" };

const arr = ["hehe", 19, 8, 10];

getName.call(a, "Hi", 4, 5, 6);
getName.apply(b, arr);

function sum(a, b, c) {
    return a + b + c;
}

const array = [1, 2, 3];

console.log(sum.apply(undefined, array));
