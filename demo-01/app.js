const calculate = (operation, a, b) => {
    const calculator = {
        add: () => a + b,
        subtract: () => a - b,
        multiply: () => a * b,
        divide: () => (b === 0 ? "Khong the chia cho 0" : a / b),
    };
    return (calculator[operation] ?? (() => "Loi cu phap"))();
};

console.log(calculate("add", 5, 3));
console.log(calculate("subtract", 5, 3));
console.log(calculate("subtract", 5, 5));
console.log(calculate("multiply", 5, 3));
console.log(calculate("divide", 9, 3));
console.log(calculate("divide", 5, 0));
console.log(calculate("modulus", 5, 3));
console.log(123);
