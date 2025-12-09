const prompt = require("prompt-sync")();

const base = prompt("Enter a base");
const height = prompt("Enter a height");

const areaOfParallelogram = base * height;

console.log(areaOfParallelogram);