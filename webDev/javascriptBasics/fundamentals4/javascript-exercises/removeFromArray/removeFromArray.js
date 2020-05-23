const removeFromArray = function(arr, ...args) {
    
    return arr.filter( (item) => {
        return !args.includes(item)
    } )
}

module.exports = removeFromArray
