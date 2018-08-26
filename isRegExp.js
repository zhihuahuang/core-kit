"use strict";

exports.__esModule = true;
/**
 * isRegExp
 * @param regexp
 * @returns {boolean}
 */
function isRegExp(regexp) {
  return regexp instanceof RegExp;
}

exports.default = isRegExp;