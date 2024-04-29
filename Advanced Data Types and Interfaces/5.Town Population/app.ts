function createTownRegistry(data: string[]): void {
  const townPopulation: { [town: string]: number } = {};

  data.forEach((entry) => {
    const [town, populationStr] = entry.split(" <-> ");
    const population: number = Number(populationStr);

    if (townPopulation.hasOwnProperty(town)) {
      townPopulation[town] += population;
    } else {
      townPopulation[town] = population;
    }
  });

  for (const town in townPopulation) {
    console.log(`${town} : ${townPopulation[town]}`);
  }
}

createTownRegistry([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
