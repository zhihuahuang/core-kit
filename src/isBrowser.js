const isBrowser = typeof window !== 'undefined';

module.exports = function () {
    return isBrowser;
};