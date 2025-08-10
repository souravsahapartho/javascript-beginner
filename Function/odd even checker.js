/*
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
*/



function odd_even(number){
    if(number%2===0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

let nmb=odd_even(2);
console.log(nmb);

console.log('--------------');
let nmb1=odd_even(3);
console.log(nmb1);
