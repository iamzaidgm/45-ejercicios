const matrix = [];

for (let z = 0; z < 4; z++) 
{
    const row = [];
    for (let x = 0; x < 5; x++) 
    {
        row.push(Math.floor(Math.random() * 100) + 1);
    }
    matrix.push(row);
}

console.log(matrix);