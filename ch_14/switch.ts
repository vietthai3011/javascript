type Operation = "add" | "subtract"

function calculator(operation: Operation, a: number, b: number) {
	const calculator: Record<Operation, () => number> = {
		add: () => a + b,
		subtract: () => a - b,
	};
	
	return (calculator[operation] || (() => "Not found " + operation))();
}

console.log(calculator("add", 1, 2));
console.log(calculator("subtract", 2, 3));