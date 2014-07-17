/**
 * Dependencies
 */

var type = require('component-type');

var extend = require('yiwn-extend');

/**
 * Expose `prop`
 */

module.exports = prop;

/**
 * Get or set properties of object.
 *
 * @param  {Object} source
 * @param  {String|Object} name
 * @param  {String} value  [optional]
 * @return {Object}
 * @api public
 */

function prop (source, name, value) {
    if (type(source) != 'object')
        source = {};

    if (typeof name == 'string') {
        if (value === void 0)
            return get(source, name);
        source[name] = value;
    }
    else if (type(name) == 'object')
        extend(source, name);

    return source;
}

/**
 * Get
 * @param  {Object} source
 * @param  {String} name
 * @return {Mixed}
 * @api private
 *
 *      get({ a: 1 }, 'a'); // 1
 *      get({ a: { b: 2 } }, 'a.b'); // 2
 *      get({ a: 1 }, 'b'); // undefined
 */

function get (source, name) {
    if (source[name])
        return source[name];

    var keys = name.split('.'), key;

    while ((key = keys.shift()) && source)
        source = source[key];

    return source;
}
