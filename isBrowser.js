"use strict";

/**
 * isBrowser
 *
 * @since 1.0.0
 * @return {boolean}
 */
var isBrowser = typeof window !== 'undefined';

module.exports = function () {
  return isBrowser;
};