'use strict';

exports.__esModule = true;
/**
 * isBoolean
 * typeof val is faster than Object.prototype.toString.call(val)
 *
 * @param str
 * @returns {boolean}
 */
function isString(str) {
  return typeof str === 'string';
}

exports.default = isString;