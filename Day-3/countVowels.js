const prompt = require("prompt-sync")();

const str = prompt("Enter a string");

const vowels = ['a','e','i','o','u'];

const count = str.toLowerCase().split('').filter(x => vowels.includes(x)).length;

console.log(`Vowels count ${count}`);