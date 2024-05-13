/**
 * 
 * Idea: Choose a pivot, then instead of create new left array, we sort the pivot in place. Meaning we move all item less than pivot to the left, and all item more than pivot to the right. We do it by move all item less than pivot to beginning of the array
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		const pivot = partition(arr, left, right);
		quickSort(arr, left, pivot - 1);
		quickSort(arr, pivot + 1, right);
	}
	return arr;
}

function partition(arr, left, right) {
	const pivot = arr[right];
	let leftMostIdx = left;

	for (let i = left; i < right; i++) {
		if (arr[i] < pivot) {
			swap(arr, leftMostIdx, i);
			leftMostIdx += 1;
		}
	}

	swap(arr, leftMostIdx, right);
	return leftMostIdx;
}

function swap(arr, i, j) {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

console.log(quickSort([5, 4, 8, 4, 6, 7, 3, 1, 6]));
console.log(quickSort([1, 2, 3]));
console.log(quickSort([3, 2, 1]));
