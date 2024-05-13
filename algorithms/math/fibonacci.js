function fibonacci(n) {
	if (n < 3) return 0;

	let lastVal = 1;
	let secondLastVal = 1;
	let total = 1;

	for (let i = 3; i < n; i++) {
		let newTotal = total + lastVal;

		secondLastVal = lastVal;
		lastVal = total;
		total = newTotal;
	}

	return total;
}

console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));
console.log(fibonacci(8));
