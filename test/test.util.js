describe('Util', function () {

    describe('chunk', function() {

        it("chunk(['a', 'b', 'c', 'd'], 2)", function() {
            assert.deepEqual(_.chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']]);
        });

        it("chunk(['a', 'b', 'c', 'd'], 3) => [['a', 'b', 'c'], ['d']]", function() {
            assert.deepEqual(_.chunk(['a', 'b', 'c', 'd'], 3), [['a', 'b', 'c'], ['d']]);
        });

    });

    describe('compact', function() {

        it("compact([0, 1, false, 2, '', 3]) => [1, 2, 3]", function() {
            assert.deepEqual(_.compact([0, 1, false, 2, '', 3]), [1, 2, 3]);
        });

    });

});