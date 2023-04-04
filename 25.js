const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function convertToRoman(numbers) {
  const romans = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
    L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

  if (numbers >= 5000) 
  { throw new Error('The number must be less than 5000');}

  let result = '';

  for (const letter in romans) 
  {
    const value = romans[letter];
    while (numbers >= value) {
      result += letter;
      numbers -= value;
    }
  }

  return result;
}

readline.question('Introduce un número: ', (numbers) => {
  const roman = convertToRoman(numbers);
  console.log(roman);
  readline.close();
});