const readlineSync = require(`readline-sync`);
const arrayOfNames = [];
let name;

for (let z = 0; z < 20; z++) 
{
    name = readlineSync.question("Enter the nombre: ");
    arrayOfNames.push(name);
}

for (let x = 0; x < 20; x++) 
{
    console.log(arrayOfNames[x]);
}