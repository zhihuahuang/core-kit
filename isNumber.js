'use strict';

exports.__esModule = true;
/**
 * isBoolean
 * typeof val is faster than Object.prototype.toString.call(val)
 *
 * @param num
 * @returns {boolean}
 */
function isNumber(num) {
  return typeof num === 'number';
}

exports.default = isNumber;