function solve(operation: string[]): void {
  type TownPriceMap = {
    [townName: string]: number;
  };

  type ResultType = {
    [key: string]: TownPriceMap;
  };
  const result: ResultType = {};

  for (const line of operation) {
    const [townName, productName, price] = line.split(" | ");

    if (!result[productName]) {
      result[productName] = {};
    }

    result[productName][townName] = Number(price);
  }
  const tupples = Object.entries(result);
  for (const [product, tonwsWithPrice] of tupples) {
    const townPriceTuples = Object.entries(tonwsWithPrice);

    const sorrtedArr = townPriceTuples.sort((a, b) => {
      return a[1] - b[1];
    });

    const [town, price] = sorrtedArr[0];

    console.log(`${product} -> ${town} (${price})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
