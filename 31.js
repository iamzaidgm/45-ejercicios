const readlineSync = require('readline-sync');

function primeNumber (x) {
    if (x<=1) {
        return false;
    } else {
        for (let z = 2; z < x; z++) {
            if ((x % z) === 0) {
                return false;
            }
        }   
    }
    return true;
}

function facto (x) {
    let fact = 1;
    for (let z = 1; z <= x; z++) {
        fact *= z;
    }
    return fact;
}

function table (x) {
    console.log("The multiplication table of the number is as follows: \n");
    for (let z = 0; z <= 10; z++) {
        console.log(`${x} x ${z} = ${x * z}`);
    }
}

let number = readlineSync.question("Enter the number: ");
let option = 1;

while ((option >= 1) && (option <= 3)) {
    console.log("1.- check if it is a prime number");
    console.log("2.- get the factorial");
    console.log("3.- get the multiplication table");
    console.log("4.- exit");
    option = readlineSync.questionInt("Enter the option number you want to do: ");

    if (option === 1) {
        if (primeNumber(number)) {
            console.log("the number is prime");
        } else {
            console.log("the number isn´t prime");
        }
    } else if (option === 2) {
        console.log(`The factorial of the number is: ${facto(number)}`);
    } else if (option === 3) {
        table(number);
    } else if (option === 4) {
        console.log("Come back soon");
    }
}