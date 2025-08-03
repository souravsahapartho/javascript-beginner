let sum=0;

for(let i=1; i<=200; i++){
    sum+=i;

    if(sum>=100){
        console.log('sum 100 found');
        break;
    }
}

console.log("Final Sum: ",sum);
