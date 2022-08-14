const palindromes = function (str) {
    str = str.toLowerCase().split("");
    let returnable = [];
    let newStr = [];
    const noToThis = [",","!"," ","."]

    for (const char of str) {
        if (noToThis.indexOf(char) >= 0) continue;
        returnable.push(char)
        newStr.push(char)
    }
    returnable.reverse()
    return (returnable.join() == newStr.join());
};

// Do not edit below this line
module.exports = palindromes;