"use strict";

/**
 * md5
 *
 * @since 1.0.0
 * @param str
 * @return {string}
 */
var isBrowser = require('./isBrowser');

if (isBrowser()) {
  module.exports = require('blueimp-md5');
} else {
  var _require = require;

  var crypto = _require('crypto');

  module.exports = function (str) {
    return crypto.createHash('md5').update(str).digest('hex');
  };
}