import { DefaultDoublyLinkedList } from "../Linked-List/Doubly-Linked-List/doubly-linked-list";
import type {
	DoublyLinkedList,
	DoublyNode,
} from "../Linked-List/Doubly-Linked-List/types";
import type { StackADT } from "./types";

export class DoublyLinkedListBasedStack<T> implements StackADT<T> {
	private doublyLinkedList: DoublyLinkedList<T>;
	private index: number;

	constructor() {
		this.doublyLinkedList = new DefaultDoublyLinkedList();
		this.index = -1;
	}

	push(element: T): void {
		this.doublyLinkedList.addLast(element);
	}

	pop(): T | undefined {
		if (this.isEmpty()) throw new Error("Stack is empty!");

		const item = this.doublyLinkedList.removeLast();
		return item;
	}

	peek(): T | undefined {
		if (this.isEmpty()) throw new Error("Stack is empty!");
		return this.doublyLinkedList.pickLast();
	}

	size(): number {
		return this.doublyLinkedList.getSize();
	}

	isEmpty(): boolean {
		return this.doublyLinkedList.isEmpty();
	}

	printStack(): string {
		return this.doublyLinkedList.print();
	}
}
