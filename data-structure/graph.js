class Graph {
	constructor() {
		this.adjacencyList = [];
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set();
	}

	addEdges(vertex1, vertex2) {
		this.addVertex(vertex1, vertex2);

		this.adjacencyList[vertex1].add(vertex2);
		this.adjacencyList[vertex2].add(vertex1);
	}

	print() {
		for (const vertex in this.adjacencyList) {
			console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
		}
	}

	hasEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
			return false;

		return (
			this.adjacencyList[vertex1].has(vertex2) &&
			this.adjacencyList[vertex2].has(vertex1)
		);
	}

	removeEdge(vertex1, vertex2) {
		if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;

		this.adjacencyList[vertex1].delete(vertex2);
		this.adjacencyList[vertex2].delete(vertex1);
	}

	removeVertex(vertex) {
		if (!this.adjacencyList[vertex]) return;

		for (const connectedVertex of this.adjacencyList[vertex]) {
			this.removeEdge(vertex, connectedVertex);
		}
		delete this.adjacencyList[vertex];
	}
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdges('A', 'B');
graph.addEdges('B', 'C');

graph.print();

console.log(graph.hasEdge('A', 'B'));
console.log(graph.hasEdge('A', 'C'));

graph.removeEdge('A', 'B');
graph.print();

console.log('remove vertex');
graph.removeVertex('B');
graph.print();
