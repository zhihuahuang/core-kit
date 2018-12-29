/**
 * forEach
 *
 * @since 1.0.0
 * @param arr
 * @param handler
 */
require('js-polyfill/Array.prototype.forEach');

module.exports = function (array, handler) {
    return Array.prototype.forEach.call(array, handler);
};