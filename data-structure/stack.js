const LinkedList = require('./link-list');

class LinkedListStack {
	constructor() {
		this.list = new LinkedList();
	}

	pop() {
		return this.list.removeFromFront();
	}

	push(value) {
		return this.list.prepend(value);
	}

	peak() {
		return this.list.head.value;
	}

	isEmpty() {
		return this.list.isEmpty();
	}

	getSize() {
		return this.list.getSize();
	}

	print() {
		return this.list.print();
	}
}

const stack = new LinkedListStack()
console.log(stack.isEmpty())

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)

console.log(stack.getSize())

stack.print()

stack.pop()

stack.print()