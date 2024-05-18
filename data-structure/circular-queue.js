class CircularQueue {
	constructor(capacity) {
		this.items = new Array(capacity);
		this.capacity = capacity;
		this.currentLength = 0;
		this.rear = -1;
		this.front = -1;
	}

	isFull() {
		return this.currentLength === this.capacity;
	}

	isEmpty() {
		return this.currentLength === 0;
	}

	enqueue(item) {
		if (this.isFull()) return;

		if (this.isEmpty()) this.front = 0;

		this.rear = (this.rear + 1) % this.capacity;
		this.items[this.rear] = item;
		this.currentLength += 1;
	}

	dequeue() {
		if (this.isEmpty()) return;

		const item = this.items[this.front];
		delete this.items[this.front];
		this.currentLength -= 1;
		this.front = (this.front + 1) % this.capacity;
		if (this.isEmpty()) {
			this.rear = -1;
			this.front = -1;
		}
		return item;
	}

	seek() {
		if (this.isEmpty()) return;

		return this.items[this.front];
	}

	print() {
		if (this.isEmpty()) return console.log(`Queue is empty`);
		let str = '';

		for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
			const element = this.items[i];
			str += `${element} `;
		}
		str += this.items[this.rear];

		console.log(str);
	}
}

const queue = new CircularQueue(3);
console.log(queue.isEmpty());
queue.dequeue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
// console.log('queue.front', queue.front);
// console.log('queue.rear', queue.rear);
console.log('full', queue.isFull());
queue.print();
queue.enqueue(40);
console.log('full', queue.isFull());
queue.print();

console.log('dequeue ', queue.dequeue());
console.log('dequeue ', queue.dequeue());
queue.print();
console.log('dequeue ', queue.dequeue());
console.log('dequeue ', queue.dequeue());
queue.print();
