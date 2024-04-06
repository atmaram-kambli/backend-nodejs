function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

module.exports = {
    additionOfTwoNumber: add,
    multiply
};



// We can also exports the module like this
// exports.add = (a, b) => a + b;