const heights = [65, 77, 83, 99, 38, 22, 109];

function getMax(numbers) {
    let min = numbers[0];
    for (const num of numbers) {

        if (num < min) {
            min = num;
        }

    }
    return min;
}

const min = getMax(heights);
console.log(min);