const mobiles = [
    {
        name: 'Samsung', price: 200000, camera: '12mp', color: 'black'
    },
    {
        name: 'Nokia', price: 18000, camera: '12mp', color: 'black'
    },
    {
        name: 'Oppo', price: 20000, camera: '12mp', color: 'black'
    },
    {
        name: 'Iphone', price: 190000, camera: '12mp', color: 'black'
    },
    {
        name: 'Xiaomi', price: 40000, camera: '12mp', color: 'black'
    }
]

function getCheapest(phones) {
    let min=phones[0];
   for(const phone of phones){
    if(phone.price<min.price){
        min=phone;
    }
   }
   return min;
}

const cheap = getCheapest(mobiles)
    console.log(cheap);
