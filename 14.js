const readlineSync  = require('readline-sync');
const myArray = [];

for (let z = 0; z < 5; z++) 
{   let number = parseInt(readlineSync.question("Enter a number: "));
    myArray.push(number);
}

myArray.sort();

console.log(`The smallest number in the series is: ${myArray[0]}`);
console.log(`The largest number in the series is: ${myArray[myArray.length - 1]}`);
