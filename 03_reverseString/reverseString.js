function reverseString(reverseString) {
    let listOfChars = reverseString.split("")

    let reverseList = []

    for (let i = listOfChars.length; i >= 0; i--) {
        reverseList.push(listOfChars[i])
    }
    return reverseList.join("")
};

// Do not edit below this line
module.exports = reverseString;
