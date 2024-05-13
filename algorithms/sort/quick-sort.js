/**
 * Choose pivot ast last element, loop through entire array and move element less than pivot into the left, and element more than pivot into the right. Repeat this until we left with 1 element. Then merge array from these one element.
 */

function quickSort(arr) {
	return sort(arr);
}

function sort(arr) {
	if (arr.length < 2) return arr;

	const pivot = arr[arr.length - 1];

	const left = [];
	const right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) left.push(arr[i]);
		else right.push(arr[i]);
	}

	let result = [];

	result = result.concat(sort(left));
	result.push(pivot);
	result = result.concat(sort(right));

	return result;
}

// console.log(quickSort([5, 4, 8, 4, 6, 7, 3, 1, 6]));
// console.log(quickSort([1, 2, 3]));
console.log(quickSort([3, 2, 1]));


// Big(O) = O(n^2) when array is sorted
// Big(Ω) = O(n log(n))