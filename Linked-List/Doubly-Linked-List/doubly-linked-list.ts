import type { DoublyLinkedList, DoublyNode } from "./types";

class DefaultDoublyNode<T> implements DoublyNode<T> {
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

const ERROR_MESSAGE = {
	EMPTY: "Linked list is empty.",
};

export class DefaultDoublyLinkedList<T> implements DoublyLinkedList<T> {
	head: DoublyNode<T> | null = null;
	tail: DoublyNode<T> | null = null;
	private _size = 0;

	isEmpty(): boolean {
		return this._size === 0;
	}

	getSize() {
		console.log(this._size);
		return this._size;
	}

	createNode(data: T) {
		return new DefaultDoublyNode(data, null, null);
	}

	addFirst(data: T) {
		const newNode = this.createNode(data);

		if (this.head) {
			newNode.setNext(this.head);
			this.head.setPrev(newNode);
		} else {
			this.tail = newNode;
		}

		this.head = newNode;
		this._size++;
	}

	addLast(data: T) {
		const newNode = this.createNode(data);

		if (this.tail) {
			newNode.setPrev(this.tail);
			this.tail.setNext(newNode);
		} else {
			this.head = newNode;
		}
		this.tail = newNode;
		this._size++;
	}

	pickFirst(): T {
		if (this.isEmpty()) throw new Error(ERROR_MESSAGE.EMPTY);
		return this.head?.getData() as T;
	}

	pickLast(): T | undefined {
		if (this.isEmpty()) throw new Error(ERROR_MESSAGE.EMPTY);
		return this.tail?.getData() ?? undefined;
	}

	removeFirst(): T {
		if (this.isEmpty()) throw new Error(ERROR_MESSAGE.EMPTY);

		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		const headNode = this.head!;
		const removedData = headNode.getData()

		if (headNode.getNext()) {
			this.head = headNode.getNext();
			if (this.head) {
				this.head.setPrev(null);
			}
		} else {
			this.head = null;
			this.tail = null;
		}

		headNode.setNext(null);
		headNode.setData(null);

		this._size--;

		return removedData as T
	}

	removeLast(): T | undefined {
		if (this.isEmpty()) throw new Error(ERROR_MESSAGE.EMPTY);

		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		const tailNode = this.tail!;
		if (tailNode.getPrev()) {
			this.tail = tailNode.getPrev();
			if (this.tail) {
				this.tail.setNext(null);
			}
		} else {
			this.tail === null;
			this.head === null;
		}

		tailNode.setData(null);
		tailNode.setPrev(null);

		this._size--;
		return tailNode.getData() || undefined;
	}

	indexOf(object: unknown): number {
		let index = 0;
		let currentNode = this.head;

		while (currentNode !== null) {
			if (currentNode.getData() === object) return index;
			currentNode = currentNode.getNext();
			index++;
		}
		return -1;
	}

	includes(object: unknown): boolean {
		return this.indexOf(object) !== -1;
	}

	print(): string {
		if (this.isEmpty()) throw new Error(ERROR_MESSAGE.EMPTY);
		let output = "null -> ";
		let currentNode = this.head;

		while (currentNode) {
			output += currentNode.getNext()
				? `${currentNode.getData()} <-> `
				: `${currentNode.getData()} -> null`;
			currentNode = currentNode.getNext();
		}

		return output;
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
		this._size = 0;
	}

	reverse(): void {
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
