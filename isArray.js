"use strict";

/**
 * isArray
 *
 * @since 0.1.0
 * @param arr
 * @returns {boolean}
 */
// Use native isArray first
var isArray = Array.isArray ? Array.isArray : function _isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};
module.exports = isArray;