// Write a function called the 'same', which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

const same = (array1: number[], array2: number[]) => {
  if (array1.length !== array2.length) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  // Populate frequencyCounter1 with counts of elements in array1
  for (const val of array1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  // Populate frequencyCounter2 with counts of elements in array2
  for (const val of array2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  // Check if the squared values of keys in frequencyCounter1 exist in frequencyCounter2
  for (const key in frequencyCounter1) {
    const squaredKey = Number(key) ** 2;
    // console.log('David Vo 🚀 ~> squaredKey:', squaredKey)
    if (!(squaredKey in frequencyCounter2)) {
      return false;
    }

    // Check if the counts match for the squared values
    if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};

const array1 = [2, 2, 3];
const array2 = [4, 9, 9];

// const result = same(array1, array2);
// console.log('David Vo 🚀 ~> result:', result)

// ------------------------------------------------------------------------------------------------

// Anagrams
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase or name formed by rearranging the letters of another, such as 'cinema', formed from 'iceman'
const validAnagram = (string1: string, string2: string) => {
  if (string1.length !== string2.length) {
    return false;
  }

  const frequency1 = {};
  const frequency2 = {};

  for (let val of string1) {
    frequency1[val] = (frequency1[val] || 0) + 1;
  }

  for (let val of string2) {
    frequency2[val] = (frequency2[val] || 0) + 1;
  }

  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true
};

const string1 = "texttwisttime";
const string2 = "timetwisttext";

const result = validAnagram(string1, string2);
console.log("David Vo 🚀 ~> result:", result);
