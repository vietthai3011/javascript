const tom = {
    name: "tom",
    hp: 1000,
    atk: 50,
    defense: 5,

    attack(target) {
        const damage = this.atk - target.defense;
        target.hp -= damage > 0 ? damage : 0;

        console.log(`${this.name} đánh ${target.name} mất ${damage}, ${target.name} còn ${target.hp}`);
    },

    isAlive() {
        return this.hp > 0;
    },
};

const jerry = {
    name: "jerry",
    hp: 500,
    atk: 20,
    defense: 20,

    attack(target) {
        const damage = this.atk - target.defense;
        target.hp -= damage > 0 ? damage : 0;

        console.log(`${this.name} đánh ${target.name} mất ${damage}, ${target.name} còn ${target.hp}`);
    },

    isAlive() {
        return this.hp > 0;
    },
};
// while (tom.isAlive() && jerry.isAlive()) {
//     jerry.attack(tom);
//     tom.attack(jerry);
// }

console.log(tom + "");
