const readlineSync = require('readline-sync');

let Phrase = readlineSync.question("ingrese la frase: ");
let Letter = readlineSync.question("Ingrese la letra que desea buscar: ");
let countLetter = 0;

for (let z = 0; z < Phrase.length; z++) 
{   if (Phrase[z] === Letter) {
        countLetter++;
    }
}

console.log(`The number of times the letter \"${Letter}\" appears in the sentence is: ${countLetter}`);