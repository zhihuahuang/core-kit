'use strict';

exports.__esModule = true;
/**
 * Use native isArray first
 */
var isArray = Array.isArray ? Array.isArray : function _isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
};

exports.default = isArray;