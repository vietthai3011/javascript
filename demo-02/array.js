const a = [1, 6, 7, 2, 3, 4, 5, 8, ["a", "b", "c", [9, 10, 11, 12]]];
const b = [9, 10, 11, 12];
const x = ["a", "b", "c"];

const c = a.concat(b, x);
const d = a.flat(Infinity);
const e = a instanceof Array;

const f = b.concat(x);
console.log(f);
