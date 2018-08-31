"use strict";

var isBrowser = typeof window !== 'undefined';

module.exports = function () {
  return isBrowser;
};