const today=new Date();
const date=new Date('2062-10-19');
console.log(date.getMonth());
console.log(date.getDay());
const specificdate=new Date(2091, 0, 26);
console.log(specificdate);
specificdate.setMonth(10);
console.log(specificdate);
console.log(specificdate.toLocaleString('en-GB'));
