export interface DynamicArray<T> {
	size(): number;
	isEmpty(): boolean;
	get(index: number): T | undefined;
	insert(index: number, element: T): void;
	add(element: T): void;
	removeAt(index: number): T;
	remove(): T | undefined;
	indexOf(element: T): number;
	contains(element: T): boolean;
  toString(): string
}
