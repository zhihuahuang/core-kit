if (!Array.isArray) {
    /**
     * isArray
     *
     * @since 0.1.0
     * @param arg
     * @returns {boolean}
     */
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    };
}

module.exports = Array.isArray;