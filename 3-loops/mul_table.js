// Program that asks the user for a number, then shows the multiplication table for this number.
const number = Number(prompt('Enter a number :'));
let i, res;

for (i = 1; i <= 10; i++) {
  res = number * i;
  console.log(`${number} x ${i} = ${res}`);
}
