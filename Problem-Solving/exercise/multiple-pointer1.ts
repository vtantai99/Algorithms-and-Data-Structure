// Write a function called 'averagePair'.
// Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There maybe more than one pair that matches the average target.
const averagePair = (array: number[], target: number) => {
  if (array.length === 0) return false;
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const tempAvg = (array[left] + array[right]) / 2;
    if (tempAvg === target) return true;
    else if (tempAvg < target) {
      left++;
    } else right--;
  }
  return false
};

console.log(averagePair([1, 2, 3, 4, 5], 2));
