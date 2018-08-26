'use strict';

exports.__esModule = true;
/**
 * isFunction
 * @param fn
 * @returns {boolean}
 */
function isFunction(fn) {
  return typeof fn === 'function' || Object.prototype.toString.call(fn) === '[object Function]';
}

exports.default = isFunction;