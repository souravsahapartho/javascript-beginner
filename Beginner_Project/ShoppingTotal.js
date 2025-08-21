const products=[
    {name:'Shampoo', price:300},
    {name:'Shirt', price:1500},
    {name:'Soap', price:120},
    {name:'Oil', price:930},
    {name:'Rice', price:65},
    {name:'Beverage', price:100}
]

function totalSum(products){
    let sum=0;
    for(const value of products){
        sum+=value.price;
    }
    return sum;
}


const items=totalSum(products);
console.log('Total cost: ',items);