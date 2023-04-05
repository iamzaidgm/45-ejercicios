const readlineSync = require('readline-sync');
const fs = require('fs');

fs.writeFile('./DATOS.DAT', '', function(err) 
{   if (err) throw err;
    console.log('File created successfully');
});

let name = readlineSync.question("Enter the name: ");
let lastName = readlineSync.question("Enter last name: ");
let id = readlineSync.questionInt("Enter ID: ");
let address = readlineSync.question("Enter the address: ");
let state = readlineSync.question("Enter the state: ");
let tags = "\tID\t\tNAME\t\tLAST NAME\t\tADDRESS\t\t\tSTATE\n";
fs.appendFile('./DATOS.DAT', tags, function(err)
 {  if (err) throw err;
    console.log("Tags added successfully");
});

let append = `\t${id}\t\t${name}\t\t${lastName}\t\t${address}\t\t\t${state}\n`;

fs.appendFile('./DATOS.DAT', append, function(err) 
{   if (err) throw err;
    console.log("Content added successfully");
});