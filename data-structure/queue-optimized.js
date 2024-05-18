class Queue {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}

	enqueue(item) {
		this.items[this.rear] = item;
		this.rear++;
	}

	dequeue() {
		if (this.front >= this.rear) return null;
		const item = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return item;
	}

	isEmpty() {
		return this.rear === this.front;
	}

	peek() {
		return this.items[this.front];
	}

	size() {
		return this.rear - this.front;
	}

	print() {
		console.log(this.items);
	}
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.dequeue()
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print();
console.log('dequeue ', queue.dequeue());
queue.print();
