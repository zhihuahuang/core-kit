"use strict";

/**
 * isNaN
 *
 * @since 1.0.0
 * @param num
 * @return {boolean}
 */
require('js-polyfill/Number.isNaN');

module.exports = function (num) {
  if (typeof num === 'undefined') {
    num = null;
  }

  return Number.isNaN(+num);
};