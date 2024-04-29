function findLowestPrice(data) {
    var lowestPrices = {};
    data.forEach(function (entry) {
        var _a = entry.split(" | "), town = _a[0], product = _a[1], priceStr = _a[2];
        var price = parseFloat(priceStr);
        if (!lowestPrices.hasOwnProperty(product) ||
            price < lowestPrices[product].price) {
            lowestPrices[product] = { price: price, town: town };
        }
    });
    for (var product in lowestPrices) {
        console.log("".concat(product, " -> ").concat(lowestPrices[product].price, " (").concat(lowestPrices[product].town, ")"));
    }
}
findLowestPrice([
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
]);
