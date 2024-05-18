const LinkedList = require('./link-list');

class LinkedListQueue {
	constructor() {
		this.list = new LinkedList();
	}

	enqueue(value) {
		this.list.append(value);
	}

	dequeue() {
		return this.list.removeFromFront();
	}

	peek() {
		if (this.isEmpty()) return null;

		return this.list.head.value;
	}

	isEmpty() {
		return this.list.isEmpty();
	}

	getSize() {
		return this.list.getSize();
	}

	print() {
		this.list.print();
	}
}

const queue = new LinkedListQueue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.getSize());

queue.print();
console.log('stack.dequeue()', queue.dequeue());

queue.print();
