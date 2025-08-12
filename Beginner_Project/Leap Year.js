function isleapyear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const isleap = isleapyear(2000);
console.log(isleap);
const isleap1 = isleapyear(2100);
console.log(isleap1);
const isleap2 = isleapyear(2024);
console.log(isleap2);
