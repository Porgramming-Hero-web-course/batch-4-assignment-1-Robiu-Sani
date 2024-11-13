function removeDuplicatesTest(numbers: number[]): number[] {
  const uniqueNumbers: number[] = [];

  for (const number of numbers) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  return uniqueNumbers;
}
