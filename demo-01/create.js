const prototype = {
    speed: 100,
    getName() {
        return this.name;
    },
};

const tom = Object.create(prototype);

tom.getName = function () {
    return `Hello my name is ${this.name}`;
};
tom.name = "Tom";
tom.atk = 100;
tom.hp = 1000;

const a = {};

const obj = {
    toString() {
        console.log("toString");
    },

    valueOf() {
        console.log("valueOf");
    },
};

const isObject = function (value) {
    return Object.prototype.toString.call(value) === "[object Number]" && value !== Infinity && value !== -Infinity;
};

console.log(isObject(123));

let logThis = function () {
    console.log(this);

    const showThis = () => {
        console.log(this);
    };

    showThis();
};

const person = {
    name: "john",

    logThis,
};
