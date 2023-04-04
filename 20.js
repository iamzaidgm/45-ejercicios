const readlineSync = require('readline-sync');

function fct (x) {
    let facto = 1;
    for (let z = 1; z <= x; z++) 
    {
        facto *= z;
    }
    return facto;
}

let number = readlineSync.questionInt("Enter the number of which you want to know the factorial: ");
console.log(`The factorial of ${number} is ${fct(number)}`);