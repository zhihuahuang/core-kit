/**
 * forIn
 *
 * @since 1.0.0
 * @param object
 * @param handler
 */
module.exports = function (object, handler) {
    for(let key in value) {
        handler(value, key, object);
    }
};