Array.prototype.find2 = function (callback, thisValue) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            if (callback.call(thisValue, this[i], i, this)) return this[i];
        }
    }
};

Array.prototype.findLast2 = function (callback, thisValue) {
    const length = this.length;
    for (let i = length - 1; i >= 0; i--) {
        if (i in this) {
            if (callback.call(thisValue, this[i], i, this)) return this[i];
        }
    }
};

const a = [
    { name: "A", age: 20 },
    { name: "B", age: 22 },
    { name: "c", age: 23 },
    { name: "d", age: 24 },
    { name: "d", age: 20 },
    { name: "d", age: 21 },
    { name: "d", age: 22 },
    { name: "d", age: 23 },
];

const b = a.find2(function (obj) {
    return obj.age > 26;
});

const c = a.reduce(function (total, obj) {
    total.push(obj.age);
    return total;
}, []);

console.log(c);

const asd = [1, 2, 3];
const asd2 = asd.push(4, 5, 6, 9, 0, 8, 7);

console.log(asd2);
