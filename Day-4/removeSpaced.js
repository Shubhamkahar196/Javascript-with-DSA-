const prompt = require("prompt-sync")();

const str = prompt("Enter a spaces string");
// create new varaibles
// for loop traversal all string
// check through if

let result = '';
for(let i =0; i<str.length; i++){
    if(str[i] !== ' '){
        result += str[i]
    }
}
console.log("String without spaces:", result);





