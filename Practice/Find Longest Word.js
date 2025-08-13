/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function LongestWord(sentence){

    let words=sentence.split(" ");

    let longest=words[0];


    for(const word of words){
        if(word.length>longest.length){
            longest=word;
        }
    }

    return longest;

}

let sentence="I am learning Programming to become a programmer";
console.log(LongestWord(sentence));
