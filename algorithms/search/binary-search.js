function binarySearch(arr, n) {
	let leftIdx = 0;
	let rightIdx = arr.length - 1;

	while (leftIdx <= rightIdx) {
		const middleIdx = Math.floor((rightIdx + leftIdx) / 2);

		if (arr[middleIdx] === n) return middleIdx;

		if (arr[middleIdx] > n) {
			rightIdx = middleIdx - 1;
		} else {
			leftIdx = middleIdx + 1;
		}
	}

	return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 5));
console.log(binarySearch([-5, 2, 4, 6, 10], 4));
console.log(binarySearch([-5, 2, 4, 6, 10], 10));

// Big O = O(log n)