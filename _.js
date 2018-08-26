'use strict';

exports.__esModule = true;

var _type = require('./type');

var _type2 = _interopRequireDefault(_type);

var _isArray = require('./isArray');

var _isArray2 = _interopRequireDefault(_isArray);

var _isBoolean = require('./isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isFunction = require('./isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isNumber = require('./isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isObject = require('./isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = require('./isString');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = {
    /* Type */
    isArray: _isArray2.default,
    isBoolean: _isBoolean2.default,
    isFunction: _isFunction2.default,
    isNumber: _isNumber2.default,
    isObject: _isObject2.default,
    isString: _isString2.default,
    type: _type2.default
};

exports.default = _;