import type { DynamicArray } from "./type";

export class DefaultDynamicArray<T> implements DynamicArray<T> {
	private data: T[];
	private capacity: number;
	private length: number;

	constructor(initialCapacity = 5) {
		this.data = new Array(initialCapacity);
		this.capacity = initialCapacity;
		this.length = 0;
	}

	private resize(newCapacity: number) {
		const newArray = new Array(newCapacity);

		for (let i = 0; i < this.length; i++) {
			newArray[i] = this.data[i];
		}

		this.data = newArray;
		this.capacity = newCapacity;
	}

	size(): number {
		return this.length;
	}

	isEmpty(): boolean {
		return this.length === 0;
	}

	get(index: number): T | undefined {
		if (index < 0 || index >= this.length)
			throw new Error("Index out of bounds!");
		return this.data[index];
	}

	insert(index: number, element: T) {
		if (index < 0 || index > this.length)
			throw new Error("Index out of bounds!");
		if (this.length === this.capacity) {
			this.resize(this.capacity * 2);
		}
    // Shift elements to the right to make room for the new element
		for (let i = this.length; i > index; i--) {
			this.data[i] = this.data[i - 1];
		}

		this.data[index] = element;
		this.length++;
	}

	add(element: T): void {
		this.insert(this.length, element);
	}

	removeAt(index: number): T {
		if (index < 0 || index >= this.length)
			throw new Error("Index out of bounds!");

		const item = this.data[index];

    // Shift elements left to fill the gap
		for (let i = index; i < this.length; i++) {
			this.data[i] = this.data[i + 1];
		}

		this.length--;
		if (this.length < this.capacity / 4) {
			this.resize(Math.max(this.capacity / 2, 5)); // Don't shrink below initial size of 5
		}
		return item;
	}

	remove(): T | undefined {
		if (this.isEmpty()) throw new Error("Array is empty!");

		const item = this.removeAt(this.length - 1);

		return item;
	}

	indexOf(element: T): number {
		if (this.isEmpty()) throw new Error("Array is empty!");
		for (let i = 0; i < this.length; i++) {
			if (this.data[i] === element) return i;
		}

		return -1;
	}

	contains(element: T): boolean {
		return this.indexOf(element) !== -1;
	}

	toString(): string {
		let result = "[";

		for (let i = 0; i < this.length; i++) {
			result += this.data[i];
			if (i < this.length - 1) {
				result += ", ";
			}
		}

		result += "]";
		console.log(this.capacity);
		return result;
	}
}
