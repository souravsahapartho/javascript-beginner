//write a function to give me the sum of all numbers in the array
/*
Step-1: Declare a function
Step-2: Call check whether the function is called properly
Step-3: set a parameter(s)
step-4: pass the parameter(s), check whether the parameter is passed in proper format
Step-5: do the function tasks (step by step)
*/



function sumofNUmbers(numbers) {
    console.log(numbers);
    let sum = 0;
    for (const number of numbers) {
        sum += number;
        console.log(number);

    }
    return sum;

}

const nums = [4, 3, 5, 3, 3];
const sum = sumofNUmbers(nums);
console.log('Sum of numbers: ', sum);