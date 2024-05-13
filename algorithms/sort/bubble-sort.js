/**
 *
 * Idea:
 * Compare and swap two adjacent element. Re-do it to all element in an array.
 * After finish, if element has been swapped, then stop, otherwise re-do it again for entire array.
 *
 */

function bubbleSort(arr) {
	let hasBeenSwapped = true;

	while (hasBeenSwapped) {
		hasBeenSwapped = false;
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < arr[i - 1]) {
				hasBeenSwapped = true;
				let temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
			}
		}
	}

  return arr;
}

console.log(bubbleSort([5, 4, 8, 4, 6, 7, 3, 1, 6]));
console.log(bubbleSort([1, 2, 3]));
console.log(bubbleSort([3, 2, 1]));
