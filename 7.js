let count = 0;
const readlineSync = require('readline-sync');

let phrase = readlineSync.question("Enter some text or press enter to exit: ");

while (phrase !== '') 
   {count++;
    phrase = readlineSync.question("Enter some text or press enter to exit: ");
}

console.log(`Entered a total of ${count} words`);