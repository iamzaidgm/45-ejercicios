const readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question("Enter a number:"));

if ((number % 2) === 0) {
    console.log("The number is even");
} 
else {
    console.log("The number is odd");
}