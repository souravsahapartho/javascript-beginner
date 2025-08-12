/*
Write a function to count the number of vowels in a string.
*/


function countVowel(letter) {
    let count = 0;
    for (const item of letter) {
        if (item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u' || item === 'A' || item === 'E' || item === 'I' || item === 'O' || item === 'U') {
            count++;
        }
    }
    return count;
}

let letter = 'Abdullah';
let Vowelcount = countVowel(letter);
console.log(Vowelcount);
