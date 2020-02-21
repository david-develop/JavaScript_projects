// Type Conversion and its use.

const f = 100;
// Show "Variable f contains the value 100"
console.log('Variable f contains the value ' + f);

// Show NaN (Not a Number) conversion isn’t possible
const g = 'five' * 2;
console.log(g);

//  JavaScript has the Number() and String() commands that convert the value between the parenthesis to a number or a string.
const h = '5';
console.log(h + 1); // Concatenation: show the string "51"
const i = Number('5');
console.log(i + 1); // Numerical addition: show the number 6
