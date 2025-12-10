const prompt = require("prompt-sync")();

const str = prompt("Enter a string");
const freq = {};

for( let char of str){
    freq[char] = freq[char] ? freq[char]+1: 1;
}

console.log("\nCharacter frequencies:");
for (let char in freq) {
    console.log(`'${char}' → ${freq[char]} times`);
}