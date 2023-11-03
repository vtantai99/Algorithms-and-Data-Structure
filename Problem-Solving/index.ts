// Write a function which takes in a string and returns counts of each character in the string.

// function charCount(str: string) {
//   // do something
//   // return an object with keys that are lowercase alphanumeric characters in the string;
//   // values should be the counts for those characters
// }

function isAlphanumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

function charCount(str: string) {
  // make object to return at end ...

  const result = {};
  // loop over string, for each character...
  for (let char of str) {
    if (isAlphanumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  // 1. If the char is a number/letter AND is a key in object, add one to count
  // 2. If the char is a number/letter AND not in object, add it to object and set count to 1
  // 3. If the char is something else (space, period, etc.) don't do anything

  // return object at end
  return result;
}

console.log(charCount("Hello world!"));
