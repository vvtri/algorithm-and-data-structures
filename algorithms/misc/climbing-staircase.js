// function climbingStaircase(goal) {
// 	if (goal === 1) return 1;
// 	if (goal === 2) return 2;

// 	let lastStepCount = 2;
// 	let secondLastStepCount = 1;
// 	let totalStep = 3;

// 	for (let i = 3; i <= goal; i++) {
// 		let newTotalStep = lastStepCount + secondLastStepCount;
// 		secondLastStepCount = lastStepCount;
// 		lastStepCount = newTotalStep;
// 		totalStep = newTotalStep;
// 	}

// 	return totalStep;
// }

function climbingStaircase(goal) {
	const noOfWays = [1, 2];

	for (let i = 2; i <= goal; i++) {
		noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
	}

	return noOfWays[goal - 1];
}

console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
console.log(climbingStaircase(6));
