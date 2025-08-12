function inchtofeet(inch) {
    const feet = inch / 12;
    return feet;
}


function inchtofeet2(inch){
    const feetfrac=inch/12;
    const feetNumber=parseInt(feetfrac);
    const inchremaining=inch%12;
    const result=feetNumber+ ' ft '+ inchremaining+' inch.';
    return result;
}

const shuvoheight = inchtofeet(75);
console.log(shuvoheight);

const shuvoheight2=inchtofeet2(75);
console.log(shuvoheight2);
