"use strict";

/**
 * isBoolean
 *
 * @since 0.1.0
 * @param bool
 * @returns {boolean}
 */
function isBoolean(bool) {
  // typeof val is faster than Object.prototype.toString.call(val)
  return typeof bool === 'boolean';
}

module.exports = isBoolean;