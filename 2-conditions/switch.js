// code that helps people decide what to wear based on the weather using switch.

const weather = prompt("What's the weather like?");

switch (weather) {
  case 'sunny':
    console.log('T-shirt time!');
    break;
  case 'windy':
    console.log('Windbreaker life.');
    break;
  case 'rainy':
    console.log('Bring that umbrella!');
    break;
  case 'snowy':
    console.log('Winter is coming! Just stay inside!');
    break;
  default:
    console.log('Not a valid weather type');
}

/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's the weather like?\n`, (weather) => {
    switch (weather) {
    case "sunny":
	console.log("T-shirt time!");
	break;
    case "windy":
	console.log("Windbreaker life.");
	break;
    case "rainy":
	console.log("Bring that umbrella!");
	break;
    case "snowy":
	console.log("Winter is coming! Just stay inside!");
	break;
    default:
	console.log("Not a valid weather type");
}
    readline.close()
})
*/
