"use strict";

/**
 * isPlainObject
 *
 * @since 1.0.0
 * @param obj
 * @returns {boolean}
 */
function isPlainObject(obj) {
  var proto = Object.getPrototypeOf(obj);
  return proto === null || proto.constructor === Object;
  /* && Object.prototype.toString.call(obj) === '[object Object]'*/
}

module.exports = isPlainObject;