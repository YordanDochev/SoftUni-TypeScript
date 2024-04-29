function findLowestPrice(data: string[]): void {
  const lowestPrices: { [product: string]: { price: number; town: string } } =
    {};

  data.forEach((entry) => {
    const [town, product, priceStr] = entry.split(" | ");
    const price: number = parseFloat(priceStr);

    if (
      !lowestPrices.hasOwnProperty(product) ||
      price < lowestPrices[product].price
    ) {
      lowestPrices[product] = { price: price, town: town };
    }
  });

  for (const product in lowestPrices) {
    console.log(
      `${product} -> ${lowestPrices[product].price} (${lowestPrices[product].town})`
    );
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
