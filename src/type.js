const isArray = require('./isArray');
const isBoolean = require('./isBoolean');
const isFunction = require('./isFunction');
const isNull = require('./isNull');
const isNumber = require('./isNumber');
const isObject = require('./isObject');
const isRegExp = require('./isRegExp');
const isString = require('./isString');

/**
 * Get the type of a variable
 *
 * @since 0.1.0
 * @param val
 * @returns string null, number, string, boolean, object, array, function, regexp
 */
function type(val) {
    switch (true) {
        case isNull(val):
            return 'null';

        case isString(val):
            return 'string';

        case isNumber(val):
            return 'number';

        case isBoolean(val):
            return 'boolean';

        case isFunction(val):
            return 'function';

        case isArray(val):
            return 'array';

        case isRegExp(val):
            return 'regexp';

        case isObject(val):
            return 'object';

        default:
            return '';
    }
}

module.exports = type;