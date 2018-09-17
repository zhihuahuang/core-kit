"use strict";

/**
 * random(min, max, [isFloat])
 *
 * @since 1.0.1
 * @param min
 * @param max
 * @param isFloat
 * @return {number}
 */
function random(min, max, isFloat) {
  if (min === void 0) {
    min = 0;
  }

  if (max === void 0) {
    max = 1;
  }

  if (isFloat === void 0) {
    isFloat = false;
  }

  if (min > max) {
    var _ref = [min, max];
    max = _ref[0];
    min = _ref[1];
  }

  var num = Math.random() * (max - min) + min;

  if (!isFloat) {
    num = Math.floor(num);
  }

  return num;
}

module.exports = random;