/**
 * concat(array, [values])
 *
 * @param array
 * @param values
 * @return {array[]}
 */
module.exports = function (array, ...values) {
    return Array.prototype.concat.apply(array, values);
};