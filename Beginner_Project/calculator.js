function add(num1, num2) {
    return num1 + num2;
}

function substract(num1, num2) {
    return num1 - num2;
}

function multiple(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function calculator(a, b, operation) {
    if (operation === 'add') {
        const result = add(a, b);
        return result;
    }

    else if (operation === 'substract') {
        const result = substract(a, b);
        return result;
    }

    else if (operation === 'multiple') {
        const result = multiple(a, b);
        return result;
    }

    else if (operation === 'division') {
        const result = division(a, b);
        return result;
    }
    else {
        return "Only add, substract, multiple, division is allowed";

    }
}


const result = calculator(5, 7, 'add');
console.log(result);
console.log('-------------');
const result1 = calculator(5, 7, 'multiple');
console.log(result1);
console.log('------------');
const result2 = calculator(5, 7, 'multiply')
console.log(result2);