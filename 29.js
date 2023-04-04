let dice1; 
let dice2;

let sum;
let count = 0;

for (let z = 0; z < 100; z++) 
{   dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    sum = dice1 + dice2;

    if (sum === 10) 
    {
        count ++;
    }
}

console.log(`The number of times the sum of the dice gave 10 was ${count}`);