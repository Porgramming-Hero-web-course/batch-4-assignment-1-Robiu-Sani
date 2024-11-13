"use strict";
function sumArray(numbers) {
    let totalSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalSum = totalSum + numbers[i];
    }
    return totalSum;
}
console.log(sumArray([1, 2, 3, 4, 5]));
