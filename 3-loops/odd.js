// Function that get first 10 odd numbers

let count = 0;
for (let i = 1; count < 10; i++) {
  if (i % 2 != 0) {
    console.log(`${i} is odd`);
    count++;
  }
}
