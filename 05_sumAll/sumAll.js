const sumAll = function(numOne, numTwo) {
    let finalValue = 0;
    let a;
    let b;

    if (typeof(numOne) != "number" || typeof(numTwo) != "number") return "ERROR";
    if (numOne < 0 || numTwo < 0) return "ERROR";

    if (numOne < numTwo) {
        a = numOne
        b = numTwo
    } else {
        a = numTwo
        b = numOne
    }

    for (a; a <= b; a++) {
        finalValue += a
    }
    return finalValue;
};

// Do not edit below this line
module.exports = sumAll;
