const getTheTitles = function(array) {
    let returnables = [];
    for (const dict of array) {
        returnables.push(dict["title"])
    }
    return returnables
}
// Do not edit below this line
module.exports = getTheTitles;
