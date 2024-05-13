function powerOfTwoBitwise(n) {
	if (n < 1) return false;

	return (n & (n - 1)) === 0;
}

console.log(powerOfTwoBitwise(3))
console.log(powerOfTwoBitwise(5))
console.log(powerOfTwoBitwise(6))
console.log(powerOfTwoBitwise(8))
console.log(powerOfTwoBitwise(16))

// Big O = O(n)

// function powerOfTwo(n) {
// 	if (n === 1 || n === 0) return true;

// 	let cur = n;
// 	while (true) {
// 		cur = cur / 2;
// 		if (!Number.isInteger(cur)) return false;
// 		if (cur === 1) return true;
// 	}
// }

// console.log(powerOfTwo(3))
// console.log(powerOfTwo(5))
// console.log(powerOfTwo(6))
// console.log(powerOfTwo(8))
// console.log(powerOfTwo(16))

// // Big O = O(log n)



