describe('Type', function() {

    describe('isArray', function() {

        it('isArray([1, 2, 3]) => true', function() {
            assert.equal(_.isArray([1, 2, 3]), true);
        });

        if (typeof document !== 'undefined') {
            it('isArray(document.body.children) => false', function() {
                assert.equal(_.isArray(document.body.children), false);
            });
        }

        it('isArray("abc") => false', function() {
            assert.equal(_.isArray('abc'), false);
        });

        it('isArray(_.noop) => false', function() {
            assert.equal(_.isArray(_.noop), false);
        });

    });

    describe('isBoolean', function() {

        it('isBoolean(false) => true', function() {
            assert.equal(_.isBoolean(false), true);
        });

        it('isBoolean(null) => false', function() {
            assert.equal(_.isBoolean(null), false);
        });

    });

    describe('isFunction', function() {

        it('isFunction(_.isFunction) => true', function() {
            assert.equal(_.isFunction(_.isFunction), true);
        });

        it('isFunction(/abc/) => false', function() {
            assert.equal(_.isFunction(/abc/), false);
        });

    });

    describe('isNull', function() {

        it('isNull(null) => true', function() {
            assert.equal(_.isNull(null), true);
        });

        it('isNull(void 0) => false', function() {
            assert.equal(_.isNull(void 0), false);
        });

    });

    describe('isNumber', function() {

        it('isNumber(3) => true', function() {
            assert.equal(_.isNumber(3), true);
        });

        it('isNumber(Number.MIN_VALUE) => true', function() {
            assert.equal(_.isNumber(Number.MIN_VALUE), true);
        });

        it('isNumber(Infinity) => true', function() {
            assert.equal(_.isNumber(Infinity), true);
        });

        it('isNumber("3") => false', function() {
            assert.equal(_.isNumber('3'), false);
        });

    });

    describe('isObject', function() {

        it('isObject({}) => true', function() {
            assert.equal(_.isObject({}), true);
        });

        it('isObject([1, 2, 3]) => true', function() {
            assert.equal(_.isObject([1, 2, 3]), true);
        });

        it('isObject(_.noop) => true', function() {
            assert.equal(_.isObject(_.noop), true);
        });

        it('isObject(null) => false', function() {
            assert.equal(_.isObject(null), false);
        });

    });

    describe('isPlainObject', function() {

        function Foo() {
            this.a = 1;
        }

        it('isPlainObject(new Foo) => false', function() {
            assert.equal(_.isPlainObject(new Foo), false);
        });

        it('isPlainObject([1, 2, 3]) => false', function() {
            assert.equal(_.isPlainObject([1, 2, 3]), false);
        });

        it('isPlainObject({ "x": 0, "y": 0 }) => true', function() {
            assert.equal(_.isPlainObject({ 'x': 0, 'y': 0 }), true);
        });

        it('isPlainObject(Object.create(null)) => true', function() {
            assert.equal(_.isPlainObject(Object.create(null)), true);
        });

    });

    describe('isRegExp', function() {

        it('isRegExp(/abc/) => true', function() {
            assert.equal(_.isRegExp(/abc/), true);
        });

        it('isRegExp("/abc/") => false', function() {
            assert.equal(_.isRegExp('/abc/'), false);
        });

    });

    describe('isString', function() {

        it('isString("abc") => true', function() {
            assert.equal(_.isString('abc'), true);
        });

        it('isString(1) => false', function() {
            assert.equal(_.isString(1), false);
        });

    });

});