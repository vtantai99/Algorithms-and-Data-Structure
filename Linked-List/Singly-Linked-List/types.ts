export interface SinglyNode<T> {
	getData(): T | null;
	setData(data: T | null): void;
	getNext(): SinglyNode<T> | null;
	setNext(node: SinglyNode<T> | null): void;
}
