"use strict";

/**
 * isNull
 *
 * @since 1.0.0
 * @param val
 * @returns {boolean}
 */
function isNull(val) {
  // val === null is faster than Object.prototype.toString.call(val)
  return val === null;
}

module.exports = isNull;