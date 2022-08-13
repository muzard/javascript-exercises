function repeatString(inputString, numOfRepeats) {
    let i = numOfRepeats;

    let returnValue = []

    if (i < 0) return "ERROR";

    for (i; i > 0; i--) {
        returnValue.push(inputString);
    }
    returnValue = returnValue.join("");
    return returnValue;
}

// Do not edit below this line
module.exports = repeatString;
