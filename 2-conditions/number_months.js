// Write a program that accepts a month number (between 11 and 1212), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.

const month = Number(prompt('Enter month number :'));

switch (month) {
  case 1:
    console.log('Number of days: 31');
    break;
  case 2:
    console.log('Number of days: 28');
    break;
  case 3:
    console.log('Number of days: 31');
    break;
  case 4:
    console.log('Number of days: 30');
    break;
  case 5:
    console.log('Number of days: 29');
    break;
  case 6:
    console.log('Number of days: 30');
    break;
  case 7:
    console.log('Number of days: 31');
    break;
  case 8:
    console.log('Number of days: 31');
    break;
  case 9:
    console.log('Number of days: 30');
    break;
  case 10:
    console.log('Number of days: 31');
    break;
  case 11:
    console.log('Number of days: 30');
    break;
  case 12:
    console.log('Number of days: 31');
    break;
  default:
    console.log('Not a valid month');
}
