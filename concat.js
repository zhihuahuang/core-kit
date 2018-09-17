"use strict";

/**
 * concat(array, [values])
 *
 * @param array
 * @param values
 * @return {array[]}
 */
module.exports = function (array) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return Array.prototype.concat.apply(array, values);
};