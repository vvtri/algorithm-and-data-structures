function search(arr, n) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === n) return i;
	}

	return -1;
}

console.log(search([1,2,3,4], 3))
console.log(search([1,2,3,4], 5))
console.log(search([1,2,3,4], 4))
console.log(search([1,2,3,4], 1))

// Big O