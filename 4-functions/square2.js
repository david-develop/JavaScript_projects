// Program that shows the square of every number between 00 and 1010.

function square(x) {
  return (x * x);
}
// Call the above function repeatedly to print square of every number
// between 0 and 10
let i;
for (i = 1; i < 10; i++)
{
  console.log(square(i));
}
