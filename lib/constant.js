/**
 *
 * @param value
 * @return {function(): *}
 */
module.exports = function (value) {
    return function () {
        return value;
    }
};