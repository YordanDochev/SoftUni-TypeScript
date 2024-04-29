function Employees(array: string[]): void {
  array.forEach((employee) => {
    return console.log(`Name: ${employee} -- Personal Number: ${employee.length}`);
  });
}

Employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
