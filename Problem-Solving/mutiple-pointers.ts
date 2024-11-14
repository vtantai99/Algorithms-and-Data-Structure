// Write a function called 'sumZero' which accepts a sorted array of integers.
// The function should find the 'first pair' where the sum is 0.
// Return an array that includes both values that sum to zero or empty array if a pair does not exist.
const sumZero = (array: number[]) => {
	array.sort((a, b) => a - b);

	let left = 0;
	let right = array.length - 1;

	while (left < right) {
		const sum = array[left] + array[right];
		if (sum === 0) {
			return [array[left], array[right]];
		}
		if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
	return [];
};

// const result = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 5]);
// console.log("David Vo 🚀 ~> result:", result);

// Implement a function called 'countUniqueValues', which accepts a sorted array, and count the unique values in the array
// There can be negative numbers in the array, but it will always be sorted
const countUniqueValues = (array: number[]) => {
	if (array.length === 0) return 0;

	let i = 0;
	for (let j = 1; j < array.length; j++) {
		if (array[i] !== array[j]) {
			i++;
			array[i] = array[j];
		}
	}
	return i + 1;
};

console.log(countUniqueValues([1, 1, 2, 2, 3]));
