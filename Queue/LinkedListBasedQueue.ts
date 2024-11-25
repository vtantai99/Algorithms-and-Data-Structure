import { DefaultDoublyLinkedList } from "../Linked-List/Doubly-Linked-List/doubly-linked-list";
import type { DoublyLinkedList } from "../Linked-List/Doubly-Linked-List/types";
import type { QueueADT } from "./types";

export class LinkedListBasedQueue<T> implements QueueADT<T> {
	private linkedList: DoublyLinkedList<T>;

	constructor() {
		this.linkedList = new DefaultDoublyLinkedList();
	}

	enqueue(element: T): void {
		this.linkedList.addLast(element);
	}

	dequeue(): T {
		if (this.isEmpty()) throw new Error("Queue is empty!");
		const dequeuedElement = this.linkedList.removeFirst();
		return dequeuedElement;
	}

	peek(): T {
		return "a" as T;
	}

	isEmpty(): boolean {
		return this.linkedList.isEmpty();
	}

	print(): string {
		return this.linkedList.print();
	}
}

const linkedListBasedQueue = new LinkedListBasedQueue();
linkedListBasedQueue.enqueue(1)
linkedListBasedQueue.enqueue(2)
linkedListBasedQueue.enqueue(3)
linkedListBasedQueue.enqueue(4)
linkedListBasedQueue.dequeue()

console.log(linkedListBasedQueue.print());
