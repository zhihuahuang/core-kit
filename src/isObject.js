/**
 * isObject
 *
 * @since 0.1.0
 * @param obj
 * @returns {boolean}
 */
function isObject(obj) {
    // typeof val is faster than Object.prototype.toString.call(val)
    return typeof obj === 'object';
}

export default isObject;