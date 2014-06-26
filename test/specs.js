var expect = require('chai').expect;

var prop = require('../index.js');

describe('prop', function(){
    it('should work with objects', function(){
        var obj = { a: 1 };

        prop(obj, 'b', 2);

        prop(obj, { a: 3, c: 4 });

        expect(obj)
            .to.eql({
                a: 3,
                b: 2,
                c: 4
            });

        expect(prop(obj, 'a'))
            .to.equal(3);
    });

    it('should work with undefined and null', function(){
        var obj = prop(null, 'a', { text: 'hello' });

        expect(obj)
            .to.eql({
                a: { text: 'hello' }
            });
    });

});
