const readlineSync = require('readline-sync');

let SorN = '';

while ((SorN !== 'S') && (SorN !== 'N')) {
    SorN = readlineSync.question("Enter the letter S or the letter N: ");
}

console.log(`The letter is ${SorN}`);