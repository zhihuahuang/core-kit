'use strict';

exports.__esModule = true;

var _isArray = require('./isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isBoolean = require('./isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isFunction = require('./isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isNull = require('./isNull');

var _isNull2 = _interopRequireDefault(_isNull);

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isObject = require('./isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isRegExp = require('./isRegExp');

var _isRegExp2 = _interopRequireDefault(_isRegExp);

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the type of a variable
 *
 * @param val
 * @returns string null, number, string, boolean, object, array, function, regexp
 */
function type(val) {
    switch (true) {
        case (0, _isNull2.default)(val):
            return 'null';

        case (0, _isString2.default)(val):
            return 'string';

        case (0, _isNumber2.default)(val):
            return 'number';

        case (0, _isBoolean2.default)(val):
            return 'boolean';

        case (0, _isFunction2.default)(val):
            return 'function';

        case (0, _isArray2.default)(val):
            return 'array';

        case (0, _isRegExp2.default)(val):
            return 'regexp';

        case (0, _isObject2.default)(val):
            return 'object';

        default:
            return '';
    }
}

exports.default = type;