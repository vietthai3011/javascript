// function Animal(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Animal.prototype.speak = function () {
//     console.log(`${this.name} makes a sound`);
// };

// function Cat(name, age, breed) {
//     Animal.call(this, name, age);
//     this.breed = breed;
// }

// Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.speak = function () {
//     console.log(`${this.name} kêu meo meo...`);
// };

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Cat extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} kêu meo meo...`);
    }
}

const tom = new Cat("Tom", 2, "Mèo anh lông ngắn");

console.log(tom);
tom.speak();
