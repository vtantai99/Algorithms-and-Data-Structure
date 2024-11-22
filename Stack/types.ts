export interface StackADT<T> {
	push(element: T): void;
	pop(): T | undefined;
	peek(): T | undefined;
	size(): number;
	isEmpty(): boolean;
	printStack(): string;
}
