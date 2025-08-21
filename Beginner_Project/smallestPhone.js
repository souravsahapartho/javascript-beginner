const prices = [12000, 100500, 40000, 67500, 7600];

function getMin(prices) {
    let phonemin = prices[0];
    for(const price of prices) {
        if (price < phonemin) {
            phonemin = price;
        }
    }
    return phonemin;
}

const phone = getMin(prices); {
    console.log(phone);
}