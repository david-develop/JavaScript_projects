/* console enviroment user interaction
const name = prompt("Enter your first name:");
alert(`Hello, ${name}`);
*/

// command line user interaction

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What\'s your name?\n', (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});
