const removeFromArray = function(list) {
    const args = [...arguments];
    args.splice(0, 1)

    returnables = []

    for (let i = 0; i < list.length; i++) {
        if (!(args.indexOf(list[i]) >= 0)) {
            returnables.push(list[i])
        }
    }
    return returnables
};

// Do not edit below this line
module.exports = removeFromArray;
