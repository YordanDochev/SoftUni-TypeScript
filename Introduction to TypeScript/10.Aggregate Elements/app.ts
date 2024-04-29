function sum(array: number[]): number {
  const result: number = array.reduce((acc, val) => acc + val, 0);

  return result;
}

function sumInverse(array: number[]): number {
  const result: number = array.reduce((acc, val) => acc + 1 / val, 0);

  return result;
}

function concat(array: number[]): string {
  return array.map(String).join("");
}


const nubmers1: number[] = [1, 2, 3]

const nubmers2: number[] = [2, 4, 8, 16]

console.log(sum(nubmers1));
console.log(sumInverse(nubmers1));
console.log(concat(nubmers1));

console.log(sum(nubmers2));
console.log(sumInverse(nubmers2));
console.log(concat(nubmers2));
