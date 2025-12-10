const prompt = require("prompt-sync")();

const str = prompt("Enter a string");
let spaces = 0;
let digits = 0;
let alphabets = 0;
let others = 0;

for(let char of str){
    if( char === ' '){
        spaces++;
    }else if(char >='0' && char <='9'){
        digits++;
    }else if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')){
        alphabets++;
    }else{
        others++;
    }
}

console.log("\nCharacter Analysis:");
console.log(`Spaces: ${spaces}`);
console.log(`Digits: ${digits}`);
console.log(`Alphabets: ${alphabets}`);
console.log(`Others: ${others}`);
console.log(`Total characters: ${str.length}`);