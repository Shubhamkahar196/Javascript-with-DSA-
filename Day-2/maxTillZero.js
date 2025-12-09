const prompt = require("prompt-sync")();

let largest =  -Infinity;
let number;

console.log('Enter integers (enter 0 to stop): ');

while(true){
    number = Number(prompt("enter a number"));

    if(number === 0){
        break;
    }

    // update largest if current number is bigger

    if(number > largest){
        largest = number
    }
}

if (largest === -Infinity) {
    console.log("No numbers were entered!");
} else {
    console.log(`Largest number: ${largest}`);
}