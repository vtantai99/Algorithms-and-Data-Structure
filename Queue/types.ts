export interface QueueADT<T> {
	enqueue(element: T): void; // insert element at the end of the queue
	dequeue(): T; // return & remove the element at the front of the queue
	peek(): T; // return the element at the front of the queue without removing
	isFull(): boolean;
	isEmpty(): boolean;
	print(): string;
}
