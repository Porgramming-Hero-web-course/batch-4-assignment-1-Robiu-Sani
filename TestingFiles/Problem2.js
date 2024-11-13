"use strict";
function removeDuplicatesTest(numbers) {
    const uniqueNumbers = [];
    for (const number of numbers) {
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
}
