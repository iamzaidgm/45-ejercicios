const readlineSync = require('readline-sync');

let x = parseInt(readlineSync.question("Enter up to which number you want to see the natural numbers: "));

for (let z = 1; z < (x + 1); z++) {
    console.log(z);
}