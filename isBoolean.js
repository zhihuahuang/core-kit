'use strict';

exports.__esModule = true;
/**
 * isBoolean
 * typeof val is faster than Object.prototype.toString.call(val)
 *
 * @param bool
 * @returns {boolean}
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}

exports.default = isBoolean;