/**
 * forEach
 *
 * @since 1.0.0
 * @param arr
 * @param handler
 */
require('js-polyfill/Array.prototype.forEach');

module.exports = function (arr, handler) {
    return Array.prototype.forEach.call(arr, handler);
};