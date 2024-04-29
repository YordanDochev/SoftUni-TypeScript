function evenPositionElement(array) {
    var resultArray = [];
    for (var index = 0; index < array.length; index++) {
        if (index % 2 === 0) {
            resultArray.push(array[index]);
        }
    }
    return console.log(resultArray.join(" "));
}
evenPositionElement(['5', '10']);
