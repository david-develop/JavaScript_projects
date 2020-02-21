/* Minimalist to the max: Fat arrow function syntax can be further simplified in
some particular cases: When there’s only one statement in the function body,
everything can be written on the same line without curly braces. The return
statement is omitted and implicit. When the function accepts only one parameter,
parentheses around it can be omitted. */

const hello = name => `Hello, ${name}!`;

console.log(hello('Kate')); // "Hello, Kate!"
