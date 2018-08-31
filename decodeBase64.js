"use strict";

var isBrowser = require('./isBrowser');

var decodeBase64;

if (isBrowser()) {
  if (!self.atob) {
    var base64js = require('base64-js');

    var TextDecoderLite = require('text-encoder-lite').TextDecoderLite;

    decodeBase64 = function decodeBase64(str) {
      var bytes = base64js.toByteArray(str);
      return new (TextDecoder || TextDecoderLite)('utf-8').decode(bytes);
    };
  } else {
    var map = require('./map');

    decodeBase64 = function decodeBase64(str) {
      // Going backwards: from bytestream, to percent-encoding, to original string.
      return decodeURIComponent(map(atob(str).split(''), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
    };
  }
} else {
  decodeBase64 = function decodeBase64(str) {
    var _require = require;

    var _Buffer = _require('buffer').Buffer;

    return new _Buffer(str, 'base64').toString();
  };
}

module.exports = decodeBase64;