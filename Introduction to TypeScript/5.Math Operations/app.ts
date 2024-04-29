const mathOperators: object = {
  "+": (num1: number, num2: number) => num1 + num2,
  "-": (num1: number, num2: number) => num1 - num2,
  "*": (num1: number, num2: number) => num1 * num2,
  "/": (num1: number, num2: number) => num1 / num2,
  "**": (num1: number, num2: number) => num1 ** num2,
  "%": (num1: number, num2: number) => num1 % num2,
};

function calculator(num1: number, num2: number, operator: string): void {
  const result = mathOperators[operator](num1, num2);

  return console.log(result);
}

calculator(5, 6, "+");
calculator(25, 6, "-");
calculator(5, 6, "*");
calculator(25, 5, "/");
calculator(5, 2, "**");
calculator(20, 3, "%");
