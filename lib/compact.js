/**
 * compact(array)
 *
 * @since 1.0.0
 * @param array
 * @return {array}
 */
require('js-polyfill/Array.prototype.filter');

module.exports = function (array) {
    return array.filter(Boolean);
};