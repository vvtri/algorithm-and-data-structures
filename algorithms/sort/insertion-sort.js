/**
 * Idea:
 * Start with index 1, keep the left part of the index sorted. 
 * Loop through entire array, for each item, reverse loop of the sorted left array, if any item of sorted left array greater than current index, shift it to the next, by assigning next item to be it's value. Till the most of left array or the reverse item less than current index, assign next current reverse item to current item (because next current reverse item is shifted to the right).
 */

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i];

		let j = i - 1;
		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = numberToInsert;
	}

	return arr;
}

console.log(insertionSort([5, 4, 8, 4, 6, 7, 3, 1, 6]));
console.log(insertionSort([1, 2, 3]));
console.log(insertionSort([3, 2, 1]));

// Big (O) = O(n^2)
