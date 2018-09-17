/**
 * chunk
 *
 * @since 1.0.0
 * @param array
 * @param size
 * @return {array}
 */
require('js-polyfill/Array.prototype.forEach');

module.exports = function (array, size = 1) {
    let chunks = [];

    array.forEach((item, index) => {
        if (index % size === 0) {
            chunks.push([]);
        }

        chunks[Math.floor(index / size)][index % size] = item;
    });

    return chunks;
};