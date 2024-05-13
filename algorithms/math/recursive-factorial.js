function recursiveFactorial(n) {
	if (n <= 1) return 1;

	return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
console.log(recursiveFactorial(6));
console.log(recursiveFactorial(7));
console.log(recursiveFactorial(8));

// Big O = n
