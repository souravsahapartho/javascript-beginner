/*
chair --> 3cft
table --> 10cft
bed --> 50cft
*/

function woodQuantity(chairCount, tableCount, bedCount) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairCount * perChairWood;
    const tableTotalWood = tableCount * perTableWood;
    const bedTotalWood = bedCount * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
    return totalWood;
}

const wood=woodQuantity(10,10,10);
console.log('Wood needed: ',wood);
