//for a given string tell me it is even or odd


function evenSizedString(str) {
    const size = str.length;
    if (size % 2 === 0) {
        console.log('Even size');
        return true;
    }
    else {
        console.log('Odd size');
        return false;
    }
    console.log(str, size);
}

// evenSizedString('Dhaka');
// console.log('-----------------');
// evenSizedString('faka');


function doubleortriple(number, dodouble) {
    if (dodouble === true) {
        const result = number * 2;
        return result;
    }
    else {
        const result = number * 3;
        return result;
    }
}

// console.log(doubleortriple(5,true));
// console.log(doubleortriple(5,false));

function numberofElements(number) {
    const len = number.length;
    return len;
}

// numberofElements([12, 45, 55, 36, 43, 26])

function getAge(person){
    const age=person.age();
    return age;
}
