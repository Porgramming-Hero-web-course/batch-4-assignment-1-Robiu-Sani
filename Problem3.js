"use strict";
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
