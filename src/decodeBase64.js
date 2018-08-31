const isBrowser = require('./isBrowser');
let decodeBase64;

if (isBrowser()) {
    if (!self.atob) {
        const base64js = require('base64-js');
        const TextDecoderLite = require('text-encoder-lite').TextDecoderLite;

        decodeBase64 = function (str) {
            let bytes = base64js.toByteArray(str);
            return new (TextDecoder || TextDecoderLite)('utf-8').decode(bytes);
        };
    } else {
        const map = require('./map');
        decodeBase64 = function (str) {
            // Going backwards: from bytestream, to percent-encoding, to original string.
            return decodeURIComponent(map(atob(str).split(''), function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        };
    }
} else {
    decodeBase64 = function (str) {
        let _require = require;
        let _Buffer = _require('buffer').Buffer;
        return new _Buffer(str, 'base64').toString();
    };
}

module.exports = decodeBase64;