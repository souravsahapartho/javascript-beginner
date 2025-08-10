//write a function to give me the all even numbers in the array
/*
Step-1: Declare a function
Step-2: Call check whether the function is called properly
Step-3: set a parameter(s)
step-4: pass the parameter(s), check whether the parameter is passed in proper format
Step-5: do the function tasks (step by step)
Step-6: Show the sum of the even numbers
*/


function evenNumbers(numbers) {
const evens=[];
    for (const number of numbers) {
        // console.log(number);
        if (number % 2 === 0) {
            // console.log(number);
            evens.push(number);

        }

    }
    return evens;
}

const numbers = [4, 2, 4, 1, 3, 2, 7, 9, 4, 5, 6, 3];
const evens=evenNumbers(numbers);
console.log('Even numbers are: ',evens);


function sumofEven(numbers){
    let sum=0;
    for(const number of numbers){
        if(number %2===0){
            // console.log();
            sum+=number;
        }
    }
    return sum;
}

const sum=sumofEven(numbers);
console.log('Sum of even numbers', sum);