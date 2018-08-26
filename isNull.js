"use strict";

exports.__esModule = true;
/**
 * isNull
 * val === null is faster than Object.prototype.toString.call(val)
 *
 * @param val
 * @returns {boolean}
 */
function isNull(val) {
  return val === null;
}

exports.default = isNull;