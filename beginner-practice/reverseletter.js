const sentence='I am learning web dev';

let reverse='';

for(const letter of sentence){
    // console.log(letter);I+''
    reverse=letter+reverse;
}

console.log(reverse);