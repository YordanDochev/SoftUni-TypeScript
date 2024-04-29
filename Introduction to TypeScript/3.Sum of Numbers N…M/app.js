function sumNumbers(num1, num2) {
    var number1 = Number(num1);
    var number2 = Number(num2);
    var result = 0;
    for (var index = number1; index <= number2; index++) {
        result += index;
    }
    return console.log(result);
}
sumNumbers("-8", "20");
