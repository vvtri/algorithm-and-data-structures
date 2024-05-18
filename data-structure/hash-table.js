class HashTable {
	constructor(size) {
		this.table = new Array(size);
		this.size = size;
	}

	hash(key) {
		let total = 0;

		for (let i = 0; i < key.length; i++) {
			total += key.charCodeAt(i);
		}

		return total % this.size;
	}

	get(key) {
		const index = this.hash(key);

		const bucket = this.table[index];
		if (!bucket) return;

		console.log('bucket', bucket);

		const item = bucket.find((item) => item[0] === key);
		if (item) return item[1];
	}

	set(key, value) {
		const index = this.hash(key);

		const bucket = this.table[index];
		if (bucket) {
			const itemIdx = bucket.indexOf((item) => item[0] === key);
			if (itemIdx >= 0) bucket[itemIdx][1] = value;
			else {
				bucket.push([key, value]);
			}
		} else {
			this.table[index] = [[key, value]];
		}
	}

	remove(key) {
		const index = this.hash(key);

		const bucket = this.table[index];
		if (!bucket) return;

		const itemIdx = bucket.indexOf((item) => item[0] === key);

		bucket.splice(itemIdx, 1);
	}

	print() {
		console.log(this.table);
	}
}

const table = new HashTable(50);

table.set('en', 'English');
table.set('vi', 'Vietnamese');

table.set('fr', 'Franch');

table.remove('vi');

table.print();

table.set('ne', 'ne dup');

table.print();

console.log('table.get()', table.get('ne'));
