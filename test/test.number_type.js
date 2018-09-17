describe('Number Type', function () {

    describe('isInteger', function () {

        it('isInteger(3) => true', () => {
            assert.equal(_.isInteger(3), true);
        });

        it('isInteger(Number.MIN_VALUE) => false', () => {
            assert.equal(_.isInteger(Number.MIN_VALUE), false);
        });

        it('isInteger(Infinity) => false', () => {
            assert.equal(_.isInteger(Infinity), false);
        });

        it('isInteger("3") => false', () => {
            assert.equal(_.isInteger('3'), false);
        });

    });

    describe('isNaN', () => {

        it('isNaN(NaN) => true', () => {
            assert.equal(_.isNaN(NaN), true);
        });

        it('isNaN(new Number(NaN)) => true', () => {
            assert.equal(_.isNaN(new Number(NaN)), true);
        });

        it('isNaN(undefined) => false', () => {
            assert.equal(_.isNaN(undefined), false);
        });

    });

    describe('isSafeInteger', () => {

        it('isSafeInteger(3) => true', () => {
            assert.equal(_.isSafeInteger(3), true);
        });

        it('isSafeInteger(Number.MIN_VALUE) => false', () => {
            assert.equal(_.isSafeInteger(Number.MIN_VALUE), false);
        });

        it('isSafeInteger(Infinity) => false', () => {
            assert.equal(_.isSafeInteger(Infinity), false);
        });

        it('isSafeInteger("3") => false', () => {
            assert.equal(_.isSafeInteger('3'), false);
        });

    });

});