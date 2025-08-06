function Char(name) {
    this.name = name;
}

Char.prototype.sayHi = function () {
    console.log("say hi");
};

let a = new Char("a");

// console.dir(String.__proto__ === Function.prototype);
// console.dir(Char);
// console.log(a);
// console.log(a.__proto__);
// console.dir(Object.getPrototypeOf(Object.getPrototypeOf(a)));

Object.prototype.sayHi = function () {
    console.log("hi");
};

let b = new String("Hello");

console.log(b);
