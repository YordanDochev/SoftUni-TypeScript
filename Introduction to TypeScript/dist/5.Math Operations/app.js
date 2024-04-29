const mathOperators = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "*": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num1 / num2,
    "**": (num1, num2) => num1 ** num2,
    "%": (num1, num2) => num1 % num2,
};
function calculator(num1, num2, operator) {
    const result = mathOperators[operator](num1, num2);
    return console.log(result);
}
calculator(5, 6, "+");
calculator(25, 6, "-");
calculator(5, 6, "*");
calculator(25, 5, "/");
calculator(5, 2, "**");
calculator(20, 3, "%");
//# sourceMappingURL=app.js.map