function recursiveFibonacci(n) {
	if (n === 0 || n === 1) return 1;

	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(4));
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(6));
console.log(recursiveFibonacci(7));
console.log(recursiveFibonacci(8));

// Big O = 2^n

