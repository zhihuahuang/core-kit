"use strict";

/**
 * chunk
 *
 * @since 1.0.0
 * @param array
 * @param size
 * @return {array}
 */
require('js-polyfill/Array.prototype.forEach');

module.exports = function (array, size) {
  if (size === void 0) {
    size = 1;
  }

  var chunks = [];
  array.forEach(function (item, index) {
    if (index % size === 0) {
      chunks.push([]);
    }

    chunks[Math.floor(index / size)][index % size] = item;
  });
  return chunks;
};