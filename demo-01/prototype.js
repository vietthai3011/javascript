function Char(name, hp, atk, defense) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    let a = 123;

    this.getA = function () {
        return a;
    };
}

Char.prototype.speed = 100;
Char.prototype.attack = function (target) {
    return `${this.getA()} attack ${target.name}`;
};

const tom = new Char("Tom", 1000, 50, 5);
const jerry = new Char("Jerry", 1000, 50, 5);

tom.speed = 200;

console.log(tom.attack(jerry));
