// Implement a function called 'areThereDuplicates' which accepts a 'variable number of arguments', and checks whether there are any duplicates among the arguments passed in.
// Can using the frequency counter pattern OR the multiple pointers pattern

// 1. Using the frequency counter pattern
const areThereDuplicatesWithFrequencyCounter = (...array: Array<number | string>) => {
  const frequency = {}
  for(let item of array) {
    frequency[item] = (frequency[item] || 0) + 1;
    if (frequency[item] > 1) return true
  }
  return false
}

// 2. Using the multiple pointers pattern
const areThereDuplicatesWithMultiplePointersPattern = (...array: Array<number | string>) => {
  array.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  let start = 0;
  let next = 1;

  while(next < array.length) {
    if (array[start] === array[next]) return true
    start++;
    next++;
  }
  return false
}

// 3. Using Set to remote duplicate in array
const areThereDuplicatesWithSet = (...array: Array<number | string>) => {
  return new Set(array).size !== array.length
}
