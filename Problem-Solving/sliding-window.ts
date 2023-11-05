// Write a function called 'maxSubarraySum' which accepts an array of integers and a number call 'n'.
// The function should calculate the maximum sum of n consecutive elements in the array.

const maxSubarraySum = (array: number[], number: number) => {
  if (number > array.length) {
    return null;
  }

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < number; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([2, 3, 4, 5, 1, 8, 5], 3));
