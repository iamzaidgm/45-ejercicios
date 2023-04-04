const readlineSync = require('readline-sync');

let number = readlineSync.questionInt("Ingrese un numero: ");
let flag = true;

for (let z = 1; z <= number; z++){
    if ((z !== 1) || (z !== number)){
        console.log(z);
        if ((number%z) === 0) {
            flag = false;
        }   
    }
    console.log(flag);
} 

if (flag) {
    console.log(`The ${number} is prime number`);
} else {
    console.log(`The ${number} isn´t prime number`);
}