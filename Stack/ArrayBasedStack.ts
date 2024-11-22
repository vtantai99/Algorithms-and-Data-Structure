import { DefaultDynamicArray } from "../Array/DynamicArray";
import type { DynamicArray } from "../Array/type";
import type { StackADT } from "./types";

export class ArrayBasedStack<T> implements StackADT<T> {
	private array: DynamicArray<T>;
	private index: number;

	constructor(initialSize = 5) {
		this.array = new DefaultDynamicArray(initialSize);
		this.index = -1;
	}

	push(element: T): void {
		this.array.add(element);
		this.index++;
	}

	pop(): T | undefined {
		if (this.isEmpty()) throw new Error("Stack is empty!");
		const item = this.array.remove();
		this.index--;
		return item;
	}

	peek(): T | undefined {
		if (this.isEmpty()) throw new Error("Stack is empty!");
		return this.array.get(this.index);
	}

	size(): number {
		return this.array.size();
	}

	isEmpty(): boolean {
		return this.array.isEmpty();
	}

	printStack(): string {
		return this.array.toString();
	}
}
