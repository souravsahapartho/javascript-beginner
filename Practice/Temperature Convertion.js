/*
Write a function to convert temperature from Celsius to Fahrenheit.
*/


function CeltoFahrenheit(number){
    const fahr=(number*(9/5))+32;
    return fahr;
}

let number=CeltoFahrenheit(128);
console.log(number);
