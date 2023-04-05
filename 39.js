let count = 1;

for (let z = 0; z < 3; z++) 
{
    console.log(`Page ${z + 1}\n`);
    for (let y = 0; y < 4; y++) 
    {
        let element = "";
        for (let x = 0; x < 5; x++) 
        {
            element += `${count}\t`;
            count++;
        }
        console.log(element);
    }
    console.log("\n");
}