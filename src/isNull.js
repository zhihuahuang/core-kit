/**
 * isNull
 *
 * @since 0.1.0
 * @param val
 * @returns {boolean}
 */
function isNull(val) {
    // val === null is faster than Object.prototype.toString.call(val)
    return val === null;
}

export default isNull;