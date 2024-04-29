function findLowestPrices(input) {
    const priceMap = new Map();
    // Parse input and update price map
    input.forEach(entry => {
        const [town, product, priceStr] = entry.split(" | ");
        const price = parseFloat(priceStr);
        if (!priceMap.has(product) || price < priceMap.get(product).price) {
            priceMap.set(product, { price, town });
        }
    });
    // Print lowest prices for each product
    priceMap.forEach(({ price, town }, product) => {
        console.log(`${product} -> ${price} (${town})`);
    });
}
// Example usage
const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Sample Product | 900',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];
findLowestPrices(input);
//# sourceMappingURL=index.js.map