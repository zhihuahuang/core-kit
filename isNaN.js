"use strict";

if (!Number.isNaN) {
  Number.isNaN = function (value) {
    return value !== value;
  };
}

module.exports = Number.isNaN;