function biggerHalf(array) {
    return array.sort(function (a, b) { return a - b; }).slice(array.length / 2);
}
console.log(biggerHalf([4, 7, 2, 5]));
