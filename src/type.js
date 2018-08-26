import isArray from './isArray';
import isBoolean from "./isBoolean";
import isFunction from './isFunction';
import isNull from './isNull';
import isNumber from './isNumber';
import isObject from "./isObject";
import isRegExp from "./isRegExp";
import isString from './isString';

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

export default type;