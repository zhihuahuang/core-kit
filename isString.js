"use strict";

/**
 * isString
 *
 * @since 1.0.0
 * @param str
 * @returns {boolean}
 */
function isString(str) {
  // typeof val is faster than Object.prototype.toString.call(val)
  return typeof str === 'string';
}

module.exports = isString;