var mathOperators = {
    "+": function (num1, num2) { return num1 + num2; },
    "-": function (num1, num2) { return num1 - num2; },
    "*": function (num1, num2) { return num1 * num2; },
    "/": function (num1, num2) { return num1 / num2; },
    "**": function (num1, num2) { return Math.pow(num1, num2); },
    "%": function (num1, num2) { return num1 % num2; },
};
function calculator(num1, num2, operator) {
    var result = mathOperators[operator](num1, num2);
    return console.log(result);
}
calculator(5, 6, "+");
calculator(25, 6, "-");
calculator(5, 6, "*");
calculator(25, 5, "/");
calculator(5, 2, "**");
calculator(20, 3, "%");
