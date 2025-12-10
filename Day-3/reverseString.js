const prompt = require("prompt-sync")();

const str = prompt("Enter a string");
let reversed = "";
let n = str.length;

while(n >0){
   const lastChar = str[n-1];
   reversed += lastChar;
   n--;  // decrement n to move to previous character

}

console.log(`Reversed : ${reversed}`)