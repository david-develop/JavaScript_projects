// program that returns true or false if the given word is palindrome or not.

function palindrome (word) {
  let backwardWord = '';
  for (const letter of word) {
    // Adding letter at the beginning of the backward string
    backwardWord = letter + backwardWord;
  }
  if (word.toLowerCase() === backwardWord.toLowerCase()) { return true; } else { return false; }
}

console.log(palindrome('racecar'));
console.log(palindrome('radar'));
console.log(palindrome('beautiful'));
