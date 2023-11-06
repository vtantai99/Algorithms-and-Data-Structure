// Write a function called 'sameFrequency'.
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Note: Using the frequency pattern

const sameFrequency = (number1: number, number2: number) => {
  const strNumber1 = number1.toString();
  const strNumber2 = number2.toString();

  if (strNumber1.length !== strNumber2.length) return false;

  const frequency = {};
  for (let num of strNumber1) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let num of strNumber2) {
    if (!frequency[num]) return false;
    frequency[num]--;
  }
  return true;
};

console.log(sameFrequency(3589578, 5879385));