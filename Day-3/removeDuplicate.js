const prompt = require("prompt-sync")();

const str = prompt("Enter a string: ");

const result = str.split('').filter((char,index,array)=> array.indexOf(char)===index).join('');

console.log(`Original: "${str}"`);
console.log(`Without duplicates: "${result}"`);