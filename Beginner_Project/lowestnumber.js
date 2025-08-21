/*
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

const heights2 = [167, 190, 120, 165, 137];

let small=heights2[0];

for(const height of heights2){
    if(height<small){
        small=height;
    }
}
console.log(small);