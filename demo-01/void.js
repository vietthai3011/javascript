function character(name, hp, atk, defense) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;

    this.attack = function (target) {
        const damage = this.atk - target.defense;
        target.hp -= damage > 0 ? damage : 0;
        console.log(`${this.name} đánh ${target.name} mất ${damage}, ${target.name} còn ${target.hp}`);
    };
}

const tom = new character("Tom", 1000, 50, 5);
const jerry = new character("Jerry", 500, 20, 20);

Number.prototype.moneyFormat = function () {
    return `${this.valueOf()}d`;
};

let a = Number(999);
console.log(a.moneyFormat());
