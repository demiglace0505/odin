const reverseString = function(string) {
    const arr = string.split('');
    const newString = arr.reverse().join('')
    return newString;
}

module.exports = reverseString
