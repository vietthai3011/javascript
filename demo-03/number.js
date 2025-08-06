function countNaNValues(input) {
    let count = 0;
    if (Array.isArray(input)) {
        return input.filter((num) => num !== num).length;
    } else if (typeof input === "object" && input !== null) {
        return Object.values(input).filter((item) => item !== item).length;
    }

    return "Invalid value";
}

// Sample usage
console.log(countNaNValues([1, 2, NaN, 4, NaN])); // 2
console.log(countNaNValues({ a: 1, b: NaN, c: 3, d: NaN })); // 2
console.log(countNaNValues(123)); // "Invalid input"
console.log(countNaNValues("NaN")); // "Invalid input"
