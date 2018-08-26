/**
 * isString
 *
 * @since 0.1.0
 * @param str
 * @returns {boolean}
 */
function isString(str) {
    // typeof val is faster than Object.prototype.toString.call(val)
    return typeof str === 'string';
}

export default isString;