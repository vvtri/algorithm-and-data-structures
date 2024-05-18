class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	isEmpty() {
		return this.root === null;
	}

	insert(value) {
		const node = new Node(value);

		if (this.isEmpty()) this.root = node;
		else this.insertNode(this.root, node);
	}

	insertNode(root, node) {
		if (root.value > node.value) {
			if (root.left === null) {
				root.left = node;
			} else {
				this.insertNode(root.left, node);
			}
		} else {
			if (root.right === null) {
				root.right = node;
			} else {
				this.insertNode(root.right, node);
			}
		}
	}

	search(root, value) {
		if (root === null) return false;
		if (root.value === value) return true;

		if (root.value > value) return this.search(root.left, value);
		else return this.search(root.right, value);
	}

	preOrderTravel(root) {
		if (root === null) return;

		console.log(root.value);
		this.preOrderTravel(root.left);
		this.preOrderTravel(root.right);
	}

	inOrderTravel(root) {
		if (root === null) return;

		this.inOrderTravel(root.left);
		console.log(root.value);
		this.inOrderTravel(root.right);
	}

	postOrderTravel(root) {
		if (root === null) return;

		this.postOrderTravel(root.left);
		this.postOrderTravel(root.right);
		console.log(root.value);
	}

	levelTravel() {
		if (this.isEmpty()) return;

		const queue = [];
		queue.push(this.root);

		while (queue.length) {
			let cur = queue.shift();
			console.log(cur.value);

			if (cur.left) {
				queue.push(cur.left);
			}
			if (cur.right) {
				queue.push(cur.right);
			}
		}
	}

	min(root) {
		if (this.isEmpty()) return NaN;

		if (!root.left) return root.value;
		return this.min(root.left);
	}

	max(root) {
		if (this.isEmpty()) return NaN;

		if (!root.right) return root.value;
		return this.min(root.right);
	}

	delete(value) {
		this.root = this.deleteNode(this.root, value);
	}

	deleteNode(root, value) {
		if (root === null) return root;

		if (root.value > value) {
			root.left = this.deleteNode(root.left, value);
		} else if (root.value < value) {
		} else {
			if (!root.left && !root.right) return null;

			if (!root.left) return root.right;
			if (!root.right) return root.left;

			const min = this.min(root.right);
			root.value = min;
			root.right = this.deleteNode(root.right, min);
		}

		return root;
	}
}

const bst = new BinarySearchTree();

console.log(bst.isEmpty());

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log('bst.search(bst.root, 5)', bst.search(bst.root, 5));
console.log('bst.search(bst.root, 15)', bst.search(bst.root, 15));
console.log('bst.search(bst.root, 10)', bst.search(bst.root, 10));
console.log('bst.search(bst.root, 10)', bst.search(bst.root, 20));
console.log('bst.search(bst.root, 10)', bst.search(bst.root, 1));

console.log('pre order');
bst.preOrderTravel(bst.root);

console.log('in order');
bst.inOrderTravel(bst.root);

console.log('post order');
bst.postOrderTravel(bst.root);

console.log('level travel');
bst.levelTravel();

console.log('bst.min(bst.root)', bst.min(bst.root));
console.log('bst.max(bst.root)', bst.max(bst.root));

console.log('delete node');
bst.delete(10);
bst.delete(5);
bst.delete(7);
bst.delete(3);
bst.delete(15);
bst.delete(15);

bst.levelTravel();
