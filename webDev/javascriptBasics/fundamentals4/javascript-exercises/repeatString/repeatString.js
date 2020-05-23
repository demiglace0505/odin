const repeatString = function(givenString, num) {
    let repeated = '';
    if (num < 0) {
        return 'ERROR'
    }
    for (let i = 0; i < num ; i++) {
        repeated += givenString
    }
    return repeated;
}

module.exports = repeatString
