/**
 * isBrowser
 *
 * @since 1.0.0
 * @return {boolean}
 */
const isBrowser = typeof window !== 'undefined';

module.exports = function () {
    return isBrowser;
};