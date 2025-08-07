const numbers=[6,1,3,5,2,8];
console.log(numbers);
numbers.sort();
console.log(numbers);

const friends=['sakub', 'rakib', 'alif', 'maruf'];
friends.sort();
console.log(friends);

const age=[1,44,3,53,77,42,44];
// console.log(age);
// age.sort();
// console.log(age);



// ascending
const sorted_ages_asc=age.sort(function(a,b){return a-b})
console.log(sorted_ages_asc);


// descending
const sorted_ages_des=age.sort(function(a,b){return b-a})
console.log(sorted_ages_des);
