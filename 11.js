const readlineSync = require('readline-sync');

let n = parseInt(readlineSync.question("Enter the limit number:"));

for (let z = 1; z <= n; z++) 
{   if ((z % 3) === 0) {
        console.log(z);
    }
}