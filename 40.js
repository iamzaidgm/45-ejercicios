function generateSales(numProduct, sellers) {
    let products = [];
    for (let z = 0; z < numProduct; z++) {
        products.push([]);
        for (let x = 0; x < 12; x++) {
            products[z].push([]);
            let sales = Math.floor(Math.random() * 5) + 1;
            for (let y = 0; y < sales; y++) {
                products[z][x].push({
                    seller: sellers[Math.floor(Math.random() * sellers.length)],
                    sale: Math.random() * 150
                });
            }
        }
    }
    return products;
}

let months = [
    'January', 'February',
    'March', 'April', 'May',
    'June', 'July', 'August',
    'September', 'October',
    'November', 'December'
];

let sellers = ['Kylian', 'Mbappe', 'Lottin']
let sales = generateSales(4, sellers);

sales.forEach((product, index) => {
    console.log(`Product sells ${index}`);
    product.forEach((month, index) => {
        let total = month.reduce((acc, current) => {
            return acc + current.sale
        }, 0);
        console.log(`${months[index]} : ${total}`);
    });
    console.log('\n');
});