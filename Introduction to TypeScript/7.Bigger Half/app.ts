function biggerHalf(array: number[]): number[] {
  return array.sort((a, b) => a - b).slice(array.length / 2);
}
console.log(biggerHalf([4, 7, 2, 5]));
