function sumArray(numbers: number[]): number {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum = totalSum + numbers[i];
  }
  return totalSum;
}
