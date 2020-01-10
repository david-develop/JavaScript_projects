// Program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
const first_number = prompt("Enter first number :");
const second_number = prompt("Enter second number :");

if (first_number < second_number) {
    console.log(first_number + " is smaller than " + second_number);
} else if (first_number > second_number) {
    console.log(first_number + " is greater than " + second_number);
} else if (first_number === second_number) {
    console.log(first_number + " is equal than " + second_number);
}
