const x = "Hello world";
const y = "Apple, Banana, Cherry";
const z = "         Apple, Banana,                    Cherry                  ";

const a = new String("Thai");

const b = a.concat(x);

const c = x.substring(4, 12);

const d = y.split(", ", 1);

const e = z.trim();

const f = x.slice(1);

const arr = [1, 2, 3, 4, 5];

const g = x.replaceAll("l", "L");

const h = z.trim();

console.log(Object.prototype.toString.call(NaN));
