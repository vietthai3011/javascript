function sum(a: number, b: number, c: number): number {
	return a + b + c;
}

const result = sum.apply(null, [1, 2, 3]);

let date = new Date(2002, 10, 30, 11, 5, 2, 10);

const timestamp = 1716438480000; // ví dụ: 23/05/2024 @ 12:48pm UTC
const date2 = new Date(timestamp);

console.log(date2);

