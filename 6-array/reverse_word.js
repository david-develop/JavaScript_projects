// Returns the given word in reverse order
function reverse (word) {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

console.log(reverse('fly'));
console.log(reverse('beautiful'));
