function evenPositionElement(array) {
    let resultArray = [];
    for (let index = 0; index < array.length; index++) {
        if (index % 2 === 0) {
            resultArray.push(array[index]);
        }
    }
    return console.log(resultArray.join(" "));
}
evenPositionElement(['5', '10']);
//# sourceMappingURL=app.js.map