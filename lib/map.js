/**
 * Array map
 *
 * @since 1.0.0
 * @param array
 * @param handler
 * @returns {any[]}
 */
require('js-polyfill/Array.prototype.map');

module.exports = function (array, handler) {
    return Array.prototype.map.call(array, handler);
};