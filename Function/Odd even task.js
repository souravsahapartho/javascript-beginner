/*
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/


function checker(number){
    if(number%2===0){
        number=number/2;
    }
    else{
        number=number*2;
    }
    return number;
}

result1=checker(2);
console.log(result1);

result2=checker(3);
console.log(result2);
