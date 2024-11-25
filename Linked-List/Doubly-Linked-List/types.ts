export interface DoublyNode<T> {
	getData(): T | null;
	setData(data: T | null): void;
	getPrev(): DoublyNode<T> | null;
	setPrev(node: DoublyNode<T> | null): void;
	getNext(): DoublyNode<T> | null;
	setNext(node: DoublyNode<T> | null): void;
}

export interface DoublyLinkedList<T> {
	head: DoublyNode<T> | null;
	tail: DoublyNode<T> | null;
	isEmpty(): boolean;
	getSize(): number;
	createNode(data: T): DoublyNode<T>;
	addFirst(data: T): void;
	addLast(data: T): void;
	pickFirst(): T;
	pickLast(): T | undefined;
	removeFirst(): T;
	removeLast(): T | undefined;
	indexOf(object: unknown): number;
	includes(object: unknown): boolean;
	print(): string;
	clearAll(): void;
	reverse(): void;
}
