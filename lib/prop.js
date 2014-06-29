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
 * @param  {Object} target
 * @param  {String|Object} name
 * @param  {String} value  [optional]
 * @return {Object}
 * @api public
 */

function prop (target, name, value) {
    if (type(target) != 'object')
        target = {};

    if (typeof name == 'string') {
        if (value === void 0)
            return target[name];
        target[name] = value;
    }
    else if (type(name) == 'object')
        extend(target, name);

    return target;
}
