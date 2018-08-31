"use strict";

var isBrowser = require('./isBrowser');

var encodeBase64;

if (isBrowser()) {
  if (!self.btoa) {
    var base64js = require('base64-js');

    var TextEncoderLite = require('text-encoder-lite').TextEncoderLite;

    encodeBase64 = function encodeBase64(str) {
      var bytes = new (TextEncoder || TextEncoderLite)('utf-8').encode(str);
      return base64js.fromByteArray(bytes);
    };
  } else {
    encodeBase64 = function encodeBase64(str) {
      // first we use encodeURIComponent to get percent-encoded UTF-8,
      // then we convert the percent encodings into raw bytes which
      // can be fed into btoa.
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
        return String.fromCharCode('0x' + p1);
      }));
    };
  }
} else {
  encodeBase64 = function encodeBase64(str) {
    var _require = require;

    var _Buffer = _require('buffer').Buffer;

    return new _Buffer(str).toString('base64');
  };
}

module.exports = encodeBase64;