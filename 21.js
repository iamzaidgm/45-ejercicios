let sumEvenNumbers = 0;
let sumOddNumbers = 0;

for(let z = 1; z <= 1000; z++) 
{   if ((z%2) === 0) {
        sumEvenNumbers += 1;
    } else {
        sumOddNumbers += z;
    }
}

console.log(`The sum of the odd numbers is ${sumOddNumbers}`);
console.log(`The sum of the even numbers is ${sumEvenNumbers}`);