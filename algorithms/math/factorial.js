function factorial(n) {
	let result = 1;

	for (let i = 2; i <= n; i++) {
    // console.log('i', i)
    // console.log('result', result)
		result = result * i;
	}

	return result;
}

console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(7));


// Big O = n
