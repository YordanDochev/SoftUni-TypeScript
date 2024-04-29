function solve(firstNum: number, lastNum: number): void {
  let sum: number = 0;
  let numbers: string = "";

  for (let index = firstNum; index <= lastNum; index++) {
    sum += index;

    // numbers += index.toString() + " ";

    numbers += `${index} `;
  }

  return console.log(`${numbers.trim()}\nSum: ${sum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);
