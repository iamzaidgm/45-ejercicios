let even = 0;
let odd = 0;

for (let i = 0; i <= 100; i++) 
{   if ((i % 2) === 0) 
    {   even += 1;
    } else {
        odd += 1;
    }
}

console.log(`The sum of the even numbers is: ${even}`);
console.log(`The sum of the odd numbers is: ${odd}`);