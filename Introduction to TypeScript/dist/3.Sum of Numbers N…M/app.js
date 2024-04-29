function sumNumbers(num1, num2) {
    const number1 = Number(num1);
    const number2 = Number(num2);
    let result = 0;
    for (let index = number1; index <= number2; index++) {
        result += index;
    }
    return console.log(result);
}
sumNumbers("-8", "20");
//# sourceMappingURL=app.js.map