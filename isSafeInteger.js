"use strict";

if (!Number.isSafeInteger) {
  var isInteger = require('./isInteger');

  Number.isSafeInteger = function (value) {
    return isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
  };
}

module.exports = Number.isSafeInteger;