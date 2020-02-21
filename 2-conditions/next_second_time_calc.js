/* Write a program that asks for a time under the form of three information
(hours, minutes, seconds). The program calculates and shows the time one
second after. Incorrect inputs must be taken into account.
*/

let hour = Number(prompt('Enter the hours:'));
let minute = Number(prompt('Enter the minutes:'));
let second = Number(prompt('Enter the seconds:'));

if ((hour < 24 && hour >= 0) && (minute < 60 && minute >= 0) && (second < 60 && second >= 0)) {
  second++;
  if (second === 60) {
    second = 0;
    minute++;
    if (minute === 60) {
      minute = 0;
      hour++;
      if (hour === 24) {
        hour = 0;
      }
    }
  }
  console.log('In a second, time will be ' + hour + ' hours, ' + minute + ' minutes and ' + second + ' seconds.');
} else {
  console.log('Incorrect hour!');
}
