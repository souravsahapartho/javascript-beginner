const mobile={
    brand: 'vivo',
    price: 20000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys=Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key,':', mobile[key]);
}