function heroCreation(array) {
    var heroArray = [];
    array.forEach(function (row) {
        var _a = row.split(" / "), name = _a[0], levelStr = _a[1], itemsStr = _a[2];
        var level = Number(levelStr);
        var items = itemsStr.split(", ");
        var hero = {
            name: name,
            level: level,
            items: items,
        };
        heroArray.push(hero);
    });
    heroArray.sort(function (a, b) { return a.level - b.level; });
    return heroArray.forEach(function (hero) {
        console.log("Hero: ".concat(hero.name));
        console.log("level => ".concat(hero.level));
        console.log("Items => ".concat(hero.items.join(", ")));
    });
}
heroCreation([
    "Isacc / 25 / ",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
]);
heroCreation([
    "Batman / 2 / Banana, Gun",
    "Superman / 18 / Sword",
    "Poppy / 28 / Sentinel, Antara",
]);
