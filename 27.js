const readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Enter the number ");

console.log("The multiplication table of the number is as follows: \n");

for (let z = 0; z <= 10; z++) 
{   console.log(`${number} x ${z} = ${number * z}`);}