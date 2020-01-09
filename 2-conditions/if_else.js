// code that helps people decide what to wear based on the weather using if/else.

const weather = prompt("What's the weather like?");

if (weather === "sunny") {
  console.log("T-shirt time!");
} else if (weather === "windy") {
  console.log("Windbreaker life.");
} else if (weather === "rainy") {
  console.log("Bring that umbrella!");
} else if (weather === "snowy") {
  console.log("Just stay inside!");
} else {
  console.log("Not a valid weather type");
}

/*
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`What's the weather like?\n`, (weather) => {
    if (weather === "sunny") {
	console.log("T-shirt time!");
    } else if (weather === "windy") {
	console.log("Windbreaker life.");
    } else if (weather === "rainy") {
	console.log("Bring that umbrella!");
    } else if (weather === "snowy") {
	console.log("Just stay inside!");
    } else {
	console.log("Not a valid weather type");
    }
    readline.close()
})
*/
