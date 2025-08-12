function oddAverage(numbers) {
    let sum = 0;
    let count=0;
    for (const number of numbers) {
        if (number % 2 === 1) {
            sum += number;
            count++;
        }
    }
    let oddavg = sum / count;
    return oddavg;
}

const numbers = [42, 13, 58, 65, 81];
const avg = oddAverage(numbers);
console.log(avg);
