const numbers=[1,2,4,2,4,6,7];
const players=[{},{},{}];
const employees=[
    {name: 'Ashik', designation: 'Writer', salary: 25000},
    {name:'Rahim', designation:'designer', salary: 30000},
    {name: 'abdur', designation:'marketer', salary: 20000}
]
console.log(employees[2]);
console.log(employees[1].salary);

for(const emp of employees){
    const person=emp;
    const personInfo=person.name+ ': ' +person.salary;
console.log(personInfo);
}