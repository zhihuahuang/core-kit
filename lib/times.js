const identity = require('./identity');

module.exports = function (times, iteratee = identity) {
    let result = [];

    for(let i = 0; i < times; i++) {
        result.push(iteratee(i));
    }

    return result;
};