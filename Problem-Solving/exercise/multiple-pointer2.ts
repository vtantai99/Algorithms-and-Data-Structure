// Write a function called 'isSubsequence' which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

const isSubsequence = (string1: string, string2: string) => {
  if (!string1) return true;
  let i = 0;
  let j = 0;
  while (i < string1.length) {
    if (string1[i] === string2[j]) {
      i++;
    }
    if (i === string1.length) return true;
    j++;
  }
  return false;
};

console.log(isSubsequence("hello", "hello world"));
