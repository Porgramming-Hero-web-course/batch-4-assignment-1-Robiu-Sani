// problem 1

function sumArray(numbers: number[]): number {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum = totalSum + numbers[i];
  }
  return totalSum;
}

// problem 2

function removeDuplicates(numbers: number[]): number[] {
  const uniqueNumbers: number[] = [];

  for (const number of numbers) {
    if (!uniqueNumbers.includes(number)) {
      uniqueNumbers.push(number);
    }
  }

  return uniqueNumbers;
}

// problem 3
function countWordOccurrences(sentence: string, word: string): number {
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

// problem 4

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number {
  if (shape.shape === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.shape === "rectangle") {
    return shape.width * shape.height;
  }
  throw new Error("Unknown shape");
}

// problem 5

function retrievePropertyValue<
  ObjectType,
  PropertyKey extends keyof ObjectType
>(
  objectInstance: ObjectType,
  propertyName: PropertyKey
): ObjectType[PropertyKey] {
  return objectInstance[propertyName];
}

// problem 6

interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
  return { ...profile, ...updates };
}

// problem 7

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}

// problem 8

function validateKeys(object: t, keys: (keyof t)[]): boolean {
  return keys.every((key) => key in object);
}
