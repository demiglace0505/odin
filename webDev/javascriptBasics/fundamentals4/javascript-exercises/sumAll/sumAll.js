const sumAll = function (start, end) {
    let sum = 0;
    if (
        start < 0 ||
        typeof start !== 'number' ||
        typeof end !== 'number'
    ) {
        return 'ERROR'
    }

    if (start < end) {
        num1 = start;
        num2 = end;
    } else {
        num1 = end;
        num2 = start;
    }

    for (let i = num1; i <= num2; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
