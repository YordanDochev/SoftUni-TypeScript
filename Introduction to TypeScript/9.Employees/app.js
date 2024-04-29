function Employees(array) {
    array.forEach(function (employee) {
        return console.log("Name: ".concat(employee, " -- Personal Number: ").concat(employee.length));
    });
}
Employees([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
]);
