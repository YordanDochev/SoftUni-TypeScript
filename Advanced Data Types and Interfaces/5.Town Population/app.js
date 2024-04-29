function createTownRegistry(data) {
    var townPopulation = {};
    data.forEach(function (entry) {
        var _a = entry.split(" <-> "), town = _a[0], populationStr = _a[1];
        var population = Number(populationStr);
        if (townPopulation.hasOwnProperty(town)) {
            townPopulation[town] += population;
        }
        else {
            townPopulation[town] = population;
        }
    });
    for (var town in townPopulation) {
        console.log("".concat(town, " : ").concat(townPopulation[town]));
    }
}
createTownRegistry([
    "Sofia <-> 1200000",
    "Montana <-> 20000",
    "New York <-> 10000000",
    "Washington <-> 2345000",
    "Las Vegas <-> 1000000",
]);
