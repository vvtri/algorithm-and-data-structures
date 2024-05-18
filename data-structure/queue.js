class Queue {
	constructor() {
		this.items = [];
	}

	enqueue(item) {
		this.items.push(item);
	}

	dequeue() {
		return this.items.shift();
	}

	isEmpty() {
		return this.items.length === 0;
	}

	sizes() {
		return this.items.length;
	}

	peek() {
		if (this.items.length > 0) return this.items[0];
		return null;
	}

	print() {
		console.log(this.items.toString());
	}
}

const queue = new Queue()
console.log(queue.isEmpty())
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.print()

