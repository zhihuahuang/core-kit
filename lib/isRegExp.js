/**
 * isRegExp
 *
 * @since 1.0.0
 * @param regexp
 * @returns {boolean}
 */
function isRegExp(regexp) {
    return regexp instanceof RegExp;
}

module.exports = isRegExp;