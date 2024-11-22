export interface StackADT<T> {
	push (element: T):void;
	pop(): void;
	peek(): T | undefined;
	size(): number;
	isEmpty(): boolean;
	printStack(): string;
}
