Array.prototype.filter2 = function (callback, thisValue) {
    const result = [];
    const length = this.length;
    for (let i = 0; i < length; i++) {
        if (callback.call(thisValue, this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

const a = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const b = a.filter2((num, index) => {
    return a.indexOf(num) === index;
});

console.log(b);
