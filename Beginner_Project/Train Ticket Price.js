/*
Robin works as a TT (Ticket Checker) on the train.
Every day, many passengers lose their tickets or do not buy one.
While fining ticketless passengers, it takes Robin a lot of time to calculate manually.

So, Robin wants a function named totalFine that will take fare (the actual ticket price) as input,
and return the fine amount.
*/



function totalFine(money) {
    if (typeof money==='number' && money > 0) {
        const surcharge = (money * 0.2);
        const fine = money + surcharge + 30;
        return fine;
    }
    else {
        return 'Invalid';
    }
}


const total = totalFine(50);
console.log(total);
