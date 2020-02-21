// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.

const raw = prompt('Enter Raw Price : ');
const price = Number(raw) * 1.206;
alert(`Final Price: ${price}`);
