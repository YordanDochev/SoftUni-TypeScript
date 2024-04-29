function Calculator(
  firstNum: number,
  operator: string,
  secondNum: number
): void {
  type operationType = {
    [key: string]: number;
  };

  const opertionDict: operationType = {
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
