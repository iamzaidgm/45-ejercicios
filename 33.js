const readlineSync = require('readline-sync');
const array = [];

let qualification;
let sum = 0;

for (let z = 0; z < 10; z++) 
{
    qualification = readlineSync.questionInt(`Enter the qualification you obtained in the subject ${z + 1}: `);
    array.push(qualification);
    sum += qualification;
}

let average = sum / 10;

console.log(`The average of the grades is ${average}`);