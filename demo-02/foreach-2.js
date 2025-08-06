const obj = {
    numbers: [1, 2, 3],

    add(number) {
        this.numbers.push(number);
    },

    import(numbers) {
        numbers.forEach(this.add, this);
    },
};
obj.import([6, 7, 8, 9]);

console.log(obj.numbers);
