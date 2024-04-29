function solve(firstNum, lastNum) {
    let sum = 0;
    let numbers = "";
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
//# sourceMappingURL=index.js.map