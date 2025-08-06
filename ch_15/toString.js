const obj2 = {
	valueOf() {
		console.log("valueOf 2");
	},

	toString() {
		console.log("valueOf 2");
	}
};

const obj = {
	valueOf() {
		console.log("valueOf");
		return {};
	},

	toString() {
		console.log("valueOf");
		return obj2;
	}
};

console.log(obj + "abc");

