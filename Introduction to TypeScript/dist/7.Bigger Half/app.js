function biggerHalf(array) {
    let resultArray = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] > array[index++]) {
            resultArray.push(array[index]);
        }
        else {
            resultArray.unshift(array[index]);
        }
    }
    return resultArray;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
//# sourceMappingURL=app.js.map