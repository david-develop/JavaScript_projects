// Program that asks the user for his first and last names, then show the result of the sayHello() function.

const first_name = prompt('Enter First Name');
const last_name = prompt('Enter Last Name');

function sayHello (first_name, last_name) {
  console.log(`Hello, ${first_name} ${last_name}!`);
}

sayHello(first_name, last_name);
