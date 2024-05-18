class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
		this.tail = null;
	}

	isEmpty() {
		return this.head === null;
	}

	getSize() {
		return this.size;
	}

	prepend(value) {
		const node = new Node(value);

		this.size++;
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
	}

	append(value) {
		const node = new Node(value);

		this.size++;
		if (this.isEmpty()) {
			this.head = node;
			this.tail = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	insert(value, idx) {
		if (idx < 0 || idx >= this.getSize()) return console.log('invalid idx');

		if (idx === 0) this.prepend(value);
		else {
			const node = new Node(value);
			let cur = this.head;

			for (let i = 0; i < idx - 1; i++) {
				cur = cur.next;
			}

			node.next = cur.next;
			cur.next = node;
			this.size++;
		}
	}

	removeFromFront() {
		if (this.isEmpty()) return console.log(`removeFromFront of empty`);
		const value = this.head.value;
		this.head = this.head.next;
		this.size--;
		return value;
	}

	removeFromEnd() {
		if (this.isEmpty()) return console.log(`removeFromFront of empty`);

		let value = this.tail.value;
		if (this.size === 1) {
			this.tail = null;
			this.head = null;
		} else {
			let cur = this.head;
			while (cur.next !== this.tail) {
				cur = cur.next;
			}
			this.tail = cur;
			this.tail.next = null;
		}

		return value;
	}

	removeFrom(idx) {
		if (idx < 0 || idx >= this.getSize() || this.isEmpty())
			return console.log('invalid idx');

		if (idx === 0) {
			const node = this.head;
			this.head = node.next;
		} else {
			let prevNode = this.head;
			for (let i = 0; i < idx - 1; i++) {
				prevNode = prevNode.next;
			}
			prevNode.next = prevNode.next.next;
		}

		this.size--;
	}

	search(value) {
		if (this.isEmpty()) return -1;

		let i = 0;
		let cur = this.head;

		while (cur) {
			if (cur.value === value) return i;
			i++;
			cur = cur.next;
		}

		return -1;
	}

	reverse() {
		if (this.isEmpty()) return;

		let cur = this.head;
		let prev = null;

		this.head = this.tail;
		this.tail = cur;

		while (cur) {
			let next = cur.next;
			cur.next = prev;
			prev = cur;
			cur = next;
		}
	}

	print() {
		if (this.isEmpty()) return console.log(`list is empty`);

		let cur = this.head;
		let str = ``;
		while (cur) {
			str += `${cur.value} `;
			cur = cur.next;
		}

		console.log(str);
	}
}

module.exports = LinkedList

// const list = new LinkedList();
// console.log(list.isEmpty());
// console.log(list.getSize())

// list.append(50);
// list.prepend(10);

// list.prepend(20);
// list.prepend(30);
// list.append(40);

// list.insert(60, 4);
// list.insert(-10, 0);

// list.print();
// list.reverse();
// list.print();

// console.log('search', list.search(20));
// console.log('search', list.search(40));

// list.removeFrom(0);
// list.print();
// list.removeFrom(3);
// list.print();

// console.log('remove from');
// list.print();
// list.removeFromEnd();
// list.print();
// list.removeFromFront();
// list.print();



