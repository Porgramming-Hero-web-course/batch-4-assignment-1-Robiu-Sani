"use strict";
// problem 1
function sumArray(numbers) {
    let totalSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalSum = totalSum + numbers[i];
    }
    return totalSum;
}
// problem 2
function removeDuplicates(numbers) {
    const uniqueNumbers = [];
    for (const number of numbers) {
        if (!uniqueNumbers.includes(number)) {
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
}
// problem 3
function countWordOccurrences(sentence, word) {
    const sentenceLowercase = sentence.toLowerCase();
    const wordLowercase = word.toLowerCase();
    const words = sentenceLowercase.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === wordLowercase) {
            count++;
        }
    }
    return count;
}
function calculateShapeArea(shape) {
    if (shape.shape === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.shape === "rectangle") {
        return shape.width * shape.height;
    }
    throw new Error("Unknown shape");
}
// problem 5
function retrievePropertyValue(objectInstance, propertyName) {
    return objectInstance[propertyName];
}
function updateProfile(profile, updates) {
    return Object.assign(Object.assign({}, profile), updates);
}
// problem 7
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
// problem 8
function validateKeys(object, keys) {
    return keys.every((key) => key in object);
}
