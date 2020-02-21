// number as input

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a number:\n', (number) => {
  const nb = Number(`${number}`);
  console.log('This is a number ' + nb);
  readline.close();
});
