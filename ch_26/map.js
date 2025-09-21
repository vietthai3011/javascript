let key1 = { name: "John" };
let key2 = { name: "John" };

// const obj = {
//     1: "Value 1",
//     [key1]: "Value 2",
//     [key2]: "Value 2",
// };

// const obj = new Map([
//     [1, "value 1"],
//     ["1", "value 2"],
//     [key1, "value 3"],
//     [key2, "value 4"],
// ]);

// WeakMap chỉ nhận object là key, còn Map nhận tất cả

const obj = new WeakMap([
    [key1, "value 3"],
    [key2, "value 4"],
]);

key1 = null;
key2 = null;

console.log(obj);
