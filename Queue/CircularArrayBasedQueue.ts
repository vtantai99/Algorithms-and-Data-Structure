import type { QueueADT } from "./types";

export class CircularArrayBasedQueue<T> implements QueueADT<T> {
	private data: T[];
	private capacity: number;
	private front: number;
	private rear: number;
	private size: number;

	constructor(capacity = 5) {
		this.data = new Array(capacity);
		this.capacity = capacity;
		this.front = -1;
		this.rear = -1;
		this.size = 0;
	}

	enqueue(element: T): void {
		if (this.isFull()) throw new Error("Queue is full!");

		this.rear = (this.rear + 1) % this.capacity;
		this.data[this.rear] = element;

		// If the queue was empty, set the front pointer to 0 (first element)
		if (this.front === -1) {
			this.front = this.rear;
		}

		this.size++;
	}

	dequeue(): T {
		if (this.isEmpty()) throw new Error("Queue is empty!");

		const dequeuedElement = this.data[this.front];
		this.front = (this.front + 1) % this.capacity;

		this.size--;

		// Reset the front point and rear point if the data becomes empty
		if (this.size === 0) {
			this.front = this.rear = -1;
		}

		return dequeuedElement;
	}

	peek(): T {
		if (this.isEmpty()) throw new Error("Queue is empty!");
		const peekedElement = this.data[this.front];
		return peekedElement;
	}

	isFull(): boolean {
		return this.size === this.capacity;
	}

	isEmpty(): boolean {
		return this.size === 0;
	}

	print(): string {
		if (this.isEmpty()) throw new Error("Queue is empty!");

		const output: T[] = [];

		for (let i = 0; i < this.size; i++) {
			const index = (this.front + i) % this.capacity;
			output.push(this.data[index]);
		}

		console.log("front", this.front, "rear", this.rear);

		return output.join(", ");
	}
}

const circularArrayBasedQueue = new CircularArrayBasedQueue();

circularArrayBasedQueue.enqueue(1);
circularArrayBasedQueue.enqueue(2);
circularArrayBasedQueue.enqueue(3);
circularArrayBasedQueue.enqueue(4);
circularArrayBasedQueue.enqueue(5);
circularArrayBasedQueue.dequeue();
circularArrayBasedQueue.dequeue();
circularArrayBasedQueue.enqueue(6);
circularArrayBasedQueue.enqueue(7);

console.log(circularArrayBasedQueue.print());
