const fc = new Function("a", "b", "return a + b");

const arr = Array.from({length: 100}, (_, i) => i);

let str = new String("abc");

console.log(str === "abc");
