const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    n = parseInt(n)
    const start = [1, 1]
    for (let i = 2; i < n; i++) {
        start.push(start[i-1] + start[i-2])
    }
    return start[start.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
