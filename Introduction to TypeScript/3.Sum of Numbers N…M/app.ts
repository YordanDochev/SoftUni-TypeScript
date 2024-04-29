function sumNumbers(num1: string, num2: string): void {
  const number1: number = Number(num1);
  const number2: number = Number(num2);

  let result: number = 0;

  for (let index = number1; index <= number2; index++) {
    result += index;
  }

  return console.log(result);
}

sumNumbers("-8", "20");
