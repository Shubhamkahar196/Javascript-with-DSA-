const prompt = require("prompt-sync")();

const base = Number(prompt("Enter a base number"));
const height = Number(prompt("Enter a height number"));

const areaofTri = (1/2 * base * height);
console.log(areaofTri);