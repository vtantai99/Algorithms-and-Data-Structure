class DoublyNode<T> {
	private _data: T | null;
	private _prev: DoublyNode<T> | null;
	private _next: DoublyNode<T> | null;

	constructor(data: T, prev: DoublyNode<T> | null, next: DoublyNode<T> | null) {
		this._data = data;
		this._prev = prev;
		this._next = next;
	}

	getData(): T | null {
		return this._data;
	}

	setData(data: T | null) {
		this._data = data;
	}

	getPrev(): DoublyNode<T> | null {
		return this._prev;
	}

	setPrev(doublyNode: DoublyNode<T> | null) {
		this._prev = doublyNode;
	}

	getNext(): DoublyNode<T> | null {
		return this._next;
	}

	setNext(doublyNode: DoublyNode<T> | null) {
		this._next = doublyNode;
	}
}

class DoublyLinkedList<T> {
	head: DoublyNode<T> | null = null;
	tail: DoublyNode<T> | null = null;

	createNode(data: T) {
		return new DoublyNode(data, null, null);
	}

	insertFirst(data: T) {
		const newNode = this.createNode(data);

		if (this.head) {
			newNode.setNext(this.head);
			this.head.setPrev(newNode);
		} else {
			this.tail = newNode;
		}

		this.head = newNode;
	}

	insertLast(data: T) {
		const newNode = this.createNode(data);

		if (this.tail) {
			newNode.setPrev(this.tail);
			this.tail.setNext(newNode);
		} else {
			this.head = newNode;
		}
		this.tail = newNode;
	}

	print() {
		let output = "";
		let currentNode = this.head;

		while (currentNode) {
			output += `${currentNode.getData()} -> `;
			currentNode = currentNode.getNext();
		}

		console.log(output);
	}

	clearAll() {
		let currentNode = this.head;

		while (currentNode) {
			currentNode.setPrev(null);
			currentNode.setData(null);
			currentNode.setNext(null);
			currentNode = currentNode.getNext();
		}
		this.head = null;
		this.tail = null;
	}

	removeFirst() {
		if (this.head) {
			if (this.head.getNext()) {
				this.head.getNext()?.setPrev(null);
				this.head.setNext(null);
			}

			this.head.setData(null);
		}
	}

	reverse() {
		let currentNode = this.head;
		let temp: DoublyNode<T> | null = null;

		while (currentNode) {
			temp = currentNode.getPrev();

			currentNode.setPrev(currentNode.getNext());
			currentNode.setNext(temp);

			currentNode = currentNode.getPrev();

			console.log(temp);
		}

		if (temp) {
			this.tail = this.head;
			this.head = temp.getPrev();
		}
	}
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insertFirst(3);
doublyLinkedList.insertFirst(2);
doublyLinkedList.insertLast(4);
doublyLinkedList.print();

doublyLinkedList.reverse();
// console.log("David Vo 🚀 ~> doublyLinkedList:", doublyLinkedList);
doublyLinkedList.print();
