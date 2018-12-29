describe('Number Type', function () {

    describe('isInteger', function () {

        it('isInteger(3) => true', function() {
            assert.equal(_.isInteger(3), true);
        });

        it('isInteger(Number.MIN_VALUE) => false', function() {
            assert.equal(_.isInteger(Number.MIN_VALUE), false);
        });

        it('isInteger(Infinity) => false', function() {
            assert.equal(_.isInteger(Infinity), false);
        });

        it('isInteger("3") => false', function() {
            assert.equal(_.isInteger('3'), false);
        });

    });

    describe('isNaN', function() {

        it('isNaN(NaN) => true', function() {
            assert.equal(_.isNaN(NaN), true);
        });

        it('isNaN(new Number(NaN)) => true', function() {
            assert.equal(_.isNaN(new Number(NaN)), true);
        });

        it('isNaN(undefined) => false', function() {
            assert.equal(_.isNaN(undefined), false);
        });

    });

    describe('isSafeInteger', function() {

        it('isSafeInteger(3) => true', function() {
            assert.equal(_.isSafeInteger(3), true);
        });

        it('isSafeInteger(Number.MIN_VALUE) => false', function() {
            assert.equal(_.isSafeInteger(Number.MIN_VALUE), false);
        });

        it('isSafeInteger(Infinity) => false', function() {
            assert.equal(_.isSafeInteger(Infinity), false);
        });

        it('isSafeInteger("3") => false', function() {
            assert.equal(_.isSafeInteger('3'), false);
        });

    });

});