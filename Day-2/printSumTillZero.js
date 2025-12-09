const prompt = require("prompt-sync")();



let sum = 0;
let number ;
console.log("Enter integers (enter 0 to stop): ");

while(true){
    number = Number(prompt("Enter a number"));

    if(number === 0){
        break;
    }

    sum += number;
}

console.log(`Sum of all numbers: ${sum}`);