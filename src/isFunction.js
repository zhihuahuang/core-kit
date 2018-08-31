/**
 * isFunction
 *
 * @since 0.1.0
 * @param fn
 * @returns {boolean}
 */
function isFunction(fn) {
    return typeof fn === 'function' || Object.prototype.toString.call(fn) === '[object Function]';
}

module.exports = isFunction;