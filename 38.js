const readlineSync = require('readline-sync');
const matrix = [];

let y = readlineSync.questionInt("Ingrese el numero de filas de la matriz: ");
let w = readlineSync.questionInt("Ingrese el numero de columnas de la matriz: ");

for (let z = 0; z < y; z++) 
{
    const row = [];
    for (let x = 0; x < y; x++) 
    {
        const number = Math.floor(Math.random() * 50) + 1;
        row.push(number);
    }
    matrix.push(row);
}

console.log(matrix);

function shellSort(column) 
{
    const y = column.length;

    for (let z = 1; z < y; z++) 
    {
        const key = column[z];
        let x = z - 1;

        while (x >= 0 && column[x] > key) 
        {
            column[x + 1] = column[x];
            x--;
        }

        column[x + 1] = key;
    }

    return column
}

const firstColumn = matrix.map(row => row[0]);
const sortedColumn = shellSort(firstColumn);

for (let z = 0; z < w; z++) 
{
    matrix[z][0] = sortedColumn[z];
}

console.log(matrix);