/*
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/


function count_zero(numbers) {
    let count = 0;
    for (const number of numbers) {
        if (number === '0') {
            count++;
        }
    }
    return count;
}

let nmb = count_zero('100020010020030010');
console.log(nmb);
