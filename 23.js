for (let z = 1; z <= 100; z++) 
{   if ((z % 10) === 0) {
        console.log(z);
    } 
    else 
    {
        process.stdout.write(z + " ");
    }
}