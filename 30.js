const readlineSync = require('readline-sync');

let numberOne = readlineSync.questionInt("Enter the first number: ");
let numberTwo = readlineSync.questionInt("Enter the second number: ");

let option = 1;

while ((option >= 1) && (option <= 4)) {
    console.log("1.- Sum");
    console.log("2.- Subtraction");
    console.log("3.- Multiplication");
    console.log("4.- Division");
    console.log("5.- Exit");
    option = readlineSync.questionInt("Enter the option number you want to do: ");

    if (option === 1) 
    {   let sum = numberOne + numberTwo;
        console.log(`The sum of the two numbers is: ${sum}`);
    } else if (option === 2) 
    {   let substraction = numberOne - numberTwo;
        console.log(`The subtraction of the two numbers is: ${substraction}`);
    } else if (option === 3) 
    {   let multiplication = numberOne * numberTwo;
        console.log(`The multiplication of the two numbers is: ${multiplication}`);
    } else if (option === 4) 
    {   let division = numberOne / numberTwo;
        console.log(`The division of the two numbers is: ${division}`);
    } else if (option === 5) {
        console.log("Come back soon");
    }
}