/**
 * random(min, max, [isFloat])
 *
 * @since 1.0.1
 * @param min
 * @param max
 * @param isFloat
 * @return {number}
 */
function random(min = 0, max = 1, isFloat = false) {
    if (min > max) {
        [max, min] = [min, max];
    }

    let num = Math.random() * (max - min) + min;

    if (!isFloat) {
        num = Math.floor(num);
    }

    return num;
}

module.exports = random;