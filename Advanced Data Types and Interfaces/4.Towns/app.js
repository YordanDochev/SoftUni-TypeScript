function townCreation(input) {
    var townArr = [];
    input.forEach(function (row) {
        var _a = row.split(" | "), town = _a[0], latitudeStr = _a[1], longitudeStr = _a[2];
        var latitude = Number(Number(latitudeStr).toFixed(2));
        var longitude = Number(Number(longitudeStr).toFixed(2));
        var townObj = {
            town: town,
            latitude: latitude,
            longitude: longitude,
        };
        townArr.push(townObj);
    });
    return townArr.forEach(function (townEntry) {
        console.log(townEntry);
    });
}
townCreation([
    "Sofia | 42.696552 | 23.32601",
    "Beijing | 39.913818 | 116.363625",
]);
