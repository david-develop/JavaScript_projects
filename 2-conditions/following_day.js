// program that output the next day that user input
const day = prompt("Enter day :");

switch (day) {
    case "Monday":
        console.log("Following day : Tuesday");
        break;
    case "Tuesday":
        console.log("Following day : Wednesday");
        break;
    case "Wednesday":
        console.log("Following day : Thursday");
        break;
    case "Thursday":
        console.log("Following day : Friday");
        break;
    case "Friday":
        console.log("Following day : Saturday");
        break;
    case "Saturday":
        console.log("Following day : Sunday");
        break;
    case "Sunday":
        console.log("Following day : Monday");
        break;
    default:
        console.log("Not a valid day");
}
