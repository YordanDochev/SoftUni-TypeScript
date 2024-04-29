function sum(array) {
    var result = array.reduce(function (acc, val) { return acc + val; }, 0);
    return result;
}
function sumInverse(array) {
    var result = array.reduce(function (acc, val) { return acc + 1 / val; }, 0);
    return result;
}
function concat(array) {
    return array.map(String).join("");
}
var nubmers1 = [1, 2, 3];
var nubmers2 = [2, 4, 8, 16];
console.log(sum(nubmers1));
console.log(sumInverse(nubmers1));
console.log(concat(nubmers1));
console.log(sum(nubmers2));
console.log(sumInverse(nubmers2));
console.log(concat(nubmers2));
