describe('Type', () => {

    describe('isArray', () => {

        it('isArray([1, 2, 3]) => true', () => {
            assert.equal(_.isArray([1, 2, 3]), true);
        });

        if (typeof document !== 'undefined') {
            it('isArray(document.body.children) => false', () => {
                assert.equal(_.isArray(document.body.children), false);
            });
        }

        it('isArray("abc") => false', () => {
            assert.equal(_.isArray('abc'), false);
        });

        it('isArray(_.noop) => false', () => {
            assert.equal(_.isArray(_.noop), false);
        });

    });

    describe('isBoolean', () => {

        it('isBoolean(false) => true', () => {
            assert.equal(_.isBoolean(false), true);
        });

        it('isBoolean(null) => false', () => {
            assert.equal(_.isBoolean(null), false);
        });

    });

    describe('isFunction', () => {

        it('isFunction(_.isFunction) => true', () => {
            assert.equal(_.isFunction(_.isFunction), true);
        });

        it('isFunction(/abc/) => false', () => {
            assert.equal(_.isFunction(/abc/), false);
        });

    });

    describe('isNull', () => {

        it('isNull(null) => true', () => {
            assert.equal(_.isNull(null), true);
        });

        it('isNull(void 0) => false', () => {
            assert.equal(_.isNull(void 0), false);
        });

    });

    describe('isNumber', () => {

        it('isNumber(3) => true', () => {
            assert.equal(_.isNumber(3), true);
        });

        it('isNumber(Number.MIN_VALUE) => true', () => {
            assert.equal(_.isNumber(Number.MIN_VALUE), true);
        });

        it('isNumber(Infinity) => true', () => {
            assert.equal(_.isNumber(Infinity), true);
        });

        it('isNumber("3") => false', () => {
            assert.equal(_.isNumber('3'), false);
        });

    });

    describe('isObject', () => {

        it('isObject({}) => true', () => {
            assert.equal(_.isObject({}), true);
        });

        it('isObject([1, 2, 3]) => true', () => {
            assert.equal(_.isObject([1, 2, 3]), true);
        });

        it('isObject(_.noop) => true', () => {
            assert.equal(_.isObject(_.noop), true);
        });

        it('isObject(null) => false', () => {
            assert.equal(_.isObject(null), false);
        });

    });

    describe('isPlainObject', () => {

        function Foo() {
            this.a = 1;
        }

        it('isPlainObject(new Foo) => false', () => {
            assert.equal(_.isPlainObject(new Foo), false);
        });

        it('isPlainObject([1, 2, 3]) => false', () => {
            assert.equal(_.isPlainObject([1, 2, 3]), false);
        });

        it('isPlainObject({ "x": 0, "y": 0 }) => true', () => {
            assert.equal(_.isPlainObject({ 'x': 0, 'y': 0 }), true);
        });

        it('isPlainObject(Object.create(null)) => true', () => {
            assert.equal(_.isPlainObject(Object.create(null)), true);
        });

    });

    describe('isRegExp', () => {

        it('isRegExp(/abc/) => true', () => {
            assert.equal(_.isRegExp(/abc/), true);
        });

        it('isRegExp("/abc/") => false', () => {
            assert.equal(_.isRegExp('/abc/'), false);
        });

    });

    describe('isString', () => {

        it('isString("abc") => true', () => {
            assert.equal(_.isString('abc'), true);
        });

        it('isString(1) => false', () => {
            assert.equal(_.isString(1), false);
        });

    });

});