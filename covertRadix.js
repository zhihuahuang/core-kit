"use strict";

/**
 * 进制转换
 *
 * @param number
 * @param fromRadix
 * @param toRadix
 * @returns {string}
 */
function covertRadix(number, fromRadix, toRadix) {
  if (+fromRadix !== 10) {
    number = parseInt(number, fromRadix);
  }

  if (+toRadix !== 10) {
    number = Number.prototype.toString.call(number, toRadix).toUpperCase();
  }

  return '' + number;
}

module.exports = covertRadix;