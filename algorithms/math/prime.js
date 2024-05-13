function isPrime(n) {
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return true;
}

console.log(isPrime(3));
console.log(isPrime(25));
console.log(isPrime(27));
console.log(isPrime(31));
console.log(isPrime(33));
console.log(isPrime(32));

// Big O = O(sqrt(n))
