Array.prototype.forEach2 = function (callback, thisValue) {
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (i in this) {
            callback.call(thisValue, this[i], i, this);
        }
    }
};

const b = [
    { name: "A", age: 20 },
    { name: "B", age: 22 },
    { name: "c", age: 23 },
    { name: "d", age: 24 },
];

const c = [
    { name: "A", age: 20 },
    { name: "B", age: 22 },
    { name: "c", age: 23 },
    { name: "d", age: 24 },
];

delete b[1];

b.forEach2(
    (user, i, users) => {
        console.log(this);
    },
    { id: 123 }
);

c.forEach2(
    function (user, i, users) {
        console.log(user);
    },
    { id: 123 }
);
