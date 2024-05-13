function towerOfHaNoi(n, from, middle, to) {
	if (n === 1) {
		return log(n, from, to);
	}

	towerOfHaNoi(n - 1, from, to, middle);
	log(n, from, to);
	towerOfHaNoi(n - 1, middle, from, to);
}

function log(diskNumber, from, to) {
	console.log(`Move disk ${diskNumber} from ${from} to ${to}`);
}

towerOfHaNoi(2, 'A', 'B', 'C');
