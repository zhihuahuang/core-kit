/**
 * isNumber
 *
 * @since 1.0.0
 * @param num
 * @returns {boolean}
 */
function isNumber(num) {
    // typeof val is faster than Object.prototype.toString.call(val)
    return typeof num === 'number';
}

module.exports = isNumber;