import type { SinglyLinkedListADT } from "./types";

class SinglyNode<T> {
	data: T;
	next: SinglyNode<T> | null;
	constructor(data: T, next: SinglyNode<T> | null = null) {
		this.data = data;
		this.next = next;
	}
}

class DefaultSinglyLinkedList<T> implements SinglyLinkedListADT<T> {
	head: SinglyNode<T> | null = null;
	tail: SinglyNode<T> | null = null;
	private size = 0;

	private createNode(element: T): SinglyNode<T> {
		return new SinglyNode(element);
	}

	isEmpty(): boolean {
		return this.size === 0;
	}

	prepend(element: T): void {
		const newNode = this.createNode(element);

		if (this.head) {
			newNode.next = this.head;
		} else {
			this.tail = newNode;
		}

		this.head = newNode;
		this.size++;
	}

	append(element: T): void {
		const newNode = this.createNode(element);

		if (this.tail) {
			this.tail.next = newNode;
		} else {
			this.head = newNode;
		}

		this.tail = newNode;
		this.size++;
	}

	pop(): T | undefined {
		if (this.isEmpty()) throw new Error("Linked list is empty!");

		if (this.head === this.tail) {
			const item = this.head?.data;

			this.head = this.tail = null;

			return item;
		}

		let currentNode = this.head;

		while (currentNode?.next && currentNode.next !== this.tail) {
			currentNode = currentNode.next;
		}

		const item = this.tail?.data;
		this.tail = currentNode;
		(this.tail as SinglyNode<T>).next = null;
		this.size--;
		return item;
	}

	popFirst(): T | undefined {
		if (this.isEmpty()) throw new Error("Linked list is empty!");

		const item = this.head?.data;
		if (this.head?.next) {
			this.head = this.head.next;
		} else {
			this.head = this.tail = null;
		}

		this.size--;
		return item;
	}

	pickHead(): T | undefined {
		if (this.isEmpty()) throw new Error("Linked list is empty!");
		return this.head?.data;
	}

	pickTail(): T | undefined {
		if (this.isEmpty()) throw new Error("Linked list is empty!");
		return this.tail?.data;
	}

	removeNode(element: T): T | undefined {
		if (this.isEmpty()) throw new Error("Linked list is empty!");

		// If element to remove is the head
		if (this.head?.data === element) {
			return this.popFirst();
		}

		let currentNode = this.head;
		let previousNode: SinglyNode<T> | null = null;

		while (currentNode !== null && currentNode.data !== element) {
			previousNode = currentNode;
			currentNode = currentNode.next;
		}

		if (!currentNode) return undefined;

		// If the element is the tail
		if (currentNode === this.tail) {
			return this.pop();
		}

		if (previousNode && currentNode) {
			previousNode.next = currentNode.next;
			this.size--;
			return currentNode.data;
		}

		return undefined;
	}

	print(): string {
		if (this.isEmpty()) throw new Error("Linked list is empty!");
		let output = "";
		let currentNode = this.head;

		while (currentNode !== null) {
			output += currentNode.next
				? `${currentNode.data} -> `
				: `${currentNode.data} -> null`;
			currentNode = currentNode.next;
		}

		return output;
	}
}

const singlyLinkedList = new DefaultSinglyLinkedList();
singlyLinkedList.append(1);
singlyLinkedList.append(2);
singlyLinkedList.prepend(0);
singlyLinkedList.append(3);
singlyLinkedList.removeNode(2);

console.log(singlyLinkedList.print());
