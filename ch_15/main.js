function Character(name, hp, atk, defense, hello) {
	this.name = name;
	this.hp = hp;
	this.atk = atk;
	this.defense = defense;
	this.hello = hello;
}

Character.prototype.hello = () => "Hello";

const tom = new Character("Tom", 1000, 100, 5, "Hello");

console.log(tom.hello);