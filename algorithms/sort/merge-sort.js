/**
 * 
 * Idea: First we device array into one item array or empty array, then we merge it together with correct sort order. We merge two sorted array by compare each first item, and push the smallest one into the result array, if one array is empty, we push all item of other array into the result. Keep doing it, finally we get sorted array.
 */

function mergeSort(arr) {
	if (arr.length < 2) return arr;

	const middle = Math.floor(arr.length / 2);
	const left = arr.slice(0, middle);
	const right = arr.slice(middle);

	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right);
	const result = [];

	while (sortedLeft.length && sortedRight.length) {
		if (sortedLeft[0] < sortedRight[0]) {
			result.push(sortedLeft.shift());
		} else {
			result.push(sortedRight.shift());
		}
	}
	if (sortedLeft.length) result.push(sortedLeft.shift());
	if (sortedRight.length) result.push(sortedRight.shift());

	return result;
}

console.log(mergeSort([5, 4, 8, 4, 6, 7, 3, 1, 6]));
console.log(mergeSort([1, 2, 3]));
console.log(mergeSort([3, 2, 1]));


// Big(O) = O(n log(n))
