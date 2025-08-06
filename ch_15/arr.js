const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];

function flatArray(arr) {
	const result = [];

	arr.forEach(el => {
		if (Array.isArray(el)) {
			result.push(...flatArray(el));
		} else {
			result.push(el);
		}
	});

	return result;
}

console.log(flatArray(arr));
