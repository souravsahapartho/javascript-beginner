/*
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/



function make_avg(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum+=number;
    }

    let avg=sum/numbers.length;

    return avg;
}


const avg_arr=make_avg([1,2,3,4,5,2,3]);
console.log(avg_arr);
