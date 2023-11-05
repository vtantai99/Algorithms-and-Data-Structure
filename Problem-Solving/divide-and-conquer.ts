// Given a 'sorted' array of integers, write a function called 'search', that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1

const search = (array: number[], value: number) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    console.log("David Vo 🚀 ~> min:", min, max);
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < value) {
      min = middle + 1;
    } else if (currentElement > value) {
      max = middle - 1;
    } else return middle;
  }

  return -1;
};

console.log(search([1, 2, 3, 4, 6, 7], 2));
