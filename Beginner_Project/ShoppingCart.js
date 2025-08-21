const products = [
    { name: 'Shampoo', price: 300, quantity: 5 },
    { name: 'Shirt', price: 1500, quantity: 1 },
    { name: 'Soap', price: 120, quantity: 5 },
    { name: 'Oil', price: 930, quantity: 3 },
    { name: 'Rice', price: 65, quantity: 10 },
    { name: 'Beverage', price: 100, quantity: 2 }
]

function cartTotal(products) {
    let total = 0;
    for (const product of products) {
        const thisProductCost = product.price * product.quantity;

        total += thisProductCost;
    }
    return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);