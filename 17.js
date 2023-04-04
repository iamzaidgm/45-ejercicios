const readlineSync = require('readline-sync');

let countEvenNumbers = 0;
let sumEvenNumbers = 0;

let numberOne = readlineSync.questionInt("Enter the first number:");
let numberTwo = readlineSync.questionInt("Enter the second number: ");

while (numberTwo < numberOne) {
    console.log("The second number must be equal to or greater than the first.");
    numberTwo = readlineSync.questionInt("Enter the second number: ");
}

console.log("The multiples of 2 of the interval are: ");

for (let z = numberOne; z <= numberTwo; z++) {
    if ((z % 2) === 0) {
        process.stdout.write(z + " ");
        sumEvenNumbers += z;
        countEvenNumbers++;
    }
}

console.log("\n\nThe number of multiples of 2 in the interval is: " + countEvenNumbers);
console.log("The sum of the multiples of 2 of the interval is: " + sumEvenNumbers);