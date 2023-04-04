const readlineSync = require('readline-sync');

let numberOne = readlineSync.questionInt("Enter the first number: ");
let numberTwo = readlineSync.questionInt("Enter the second number: ");

let countEven = 0;
let countNaturalNumbers = 0;
let sumOddNumbers = 0;

console.log("The natural numbers between these 2 numbers are: ");

for (let z = numberOne; z <= numberTwo; z++) {
    console.log(z)
    countNaturalNumbers++;
    if((z%2) === 0){
        countEven++;
    }
    if ((z%2) !== 0){
        sumOddNumbers += z;
    }
}

console.log(`The amount of natural numbers between the interval is: ${countNaturalNumbers}`);
console.log(`The number of even numbers in the interval is: ${countEven}`);
console.log(`The sum of the odd numbers in the interval is: ${sumOddNumbers}`);