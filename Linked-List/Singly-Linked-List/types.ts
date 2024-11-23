export interface SinglyLinkedListADT<T> {
	prepend(element: T): void;
	append(element: T): void;
	pop(): T | undefined;
	popFirst(): T | undefined;
	pickHead(): T | undefined;
	pickTail(): T | undefined;
	removeNode(element: T): T | undefined;
	print(): string;
}
