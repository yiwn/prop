var assert = require('assert');

var prop = require('../index.js');

var equal = assert.equal;

describe('prop', function(){
    var source;

    beforeEach(function(){
        source = {
            a: 1,
            b: { c: 2 },
            d: false,
            e: 0
        };
    });

    it('should set `key, value` input', function(){
        prop(source, 'b', 2);
        equal(source.b, 2);
    });

    it('should set `{ key: value }` input', function(){
        prop(source, { a: 3, b: 4 });

        equal(source.a, 3);
        equal(source.b, 4);
    });

    it('should get keys with `dot.notation` correctly', function(){
        source['f.g'] = 5;

        equal(prop(source, 'b.c'), 2);
        equal(prop(source, 'f.g'), 5);
    });

    it('should work with undefined and null', function(){
        var obj = prop(void 0, 'a', 'hello');

        equal(obj.a, 'hello');
    });

});
