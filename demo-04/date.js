let date = new Date();
const days = ["Thu hai", "Thu ba", "Thu tu", "Thu nam", "Thu sau", "Thu bay", "Chu nhat"];

console.log(days[date.getDay()]);

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (let number of numbers) format = format.replace("x", number);

    return format;
}

function createPhoneNumber2(numbers) {
    numbers = numbers.join("");
    return "(" + numbers.slice(0, 3) + ") " + numbers.slice(3, 6) + "-" + numbers.slice(6);
}

console.log(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
const a = [1, 2, 3];
console.log("(" + [1, 2, 3].join("").slice(0) + ")");
