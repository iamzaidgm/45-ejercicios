let count = 0;

console.log("The odd numbers up to 100 are: ");

for (let z = 0; z < 101; z++) {
    if ((z % 2) !== 0) {
        console.log(z);
        count++;}
}

console.log("The odd numbers up to 100 are: " + count);