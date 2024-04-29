function Calculator(firstNum, operator, secondNum) {
    const opertionDict = {
        "+": firstNum + secondNum,
        "-": firstNum - secondNum,
        "/": firstNum / secondNum,
        "*": firstNum * secondNum,
    };
    const result = opertionDict[operator];
    return console.log(`${result.toFixed(2)}`);
}
Calculator(5, "+", 10);
Calculator(25.5, "-", 3);
Calculator(9, "/", 2);
Calculator(7, "*", 5);
//# sourceMappingURL=index.js.map