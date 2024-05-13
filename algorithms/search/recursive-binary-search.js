// function recursiveBinarySearch(arr, n) {
// 	const middleIdx = Math.floor((arr.length - 1) / 2);
// 	if (arr[middleIdx] === n) return middleIdx;
// 	if (arr.length <= 1) return -1;

// 	let result;

// 	if (arr[middleIdx] > n) {
// 		result = recursiveBinarySearch(arr.slice(0, middleIdx - 1), n);
// 	} else {
// 		result = recursiveBinarySearch(arr.slice(middleIdx + 1), n);
// 		if (result !== -1) result += middleIdx + 1;
// 	}

// 	return result;
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 5));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 4));
// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));

// #### METHOD 2

function recursiveBinarySearch(arr, n) {
  return search(arr,n,0,arr.length -1)
}

function search(arr, n, leftIdx, rightIdx) {
	if (leftIdx > rightIdx) return -1;

	const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
	if (arr[middleIdx] === n) return middleIdx;

	if (arr[middleIdx] < n) return search(arr, n, middleIdx + 1, rightIdx);
	else return search(arr, n, leftIdx, middleIdx - 1);
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 5));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 4));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
