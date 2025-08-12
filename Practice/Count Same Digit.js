/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: Numbers=[5,6,11,12,98,5]

find: 5

output: 2
*/

function count(numbers,find){
    let count=0;
    for(const number of numbers){
        if(number===find){
            count++;
        }
    }
    return count;
}

let numbers=[5,6,11,12,98,5];
let find=5;
let five=count(numbers,find);
console.log(five);

