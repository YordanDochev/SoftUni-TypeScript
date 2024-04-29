function printLargestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return console.log("The largest number is ".concat(num1, "."));
    }
    else if (num2 > num1 && num2 > num3) {
        return console.log("The largest number is ".concat(num2, "."));
    }
    else {
        return console.log("The largest number is ".concat(num3, "."));
    }
}
printLargestNumber(-3, -5, -22.5);
