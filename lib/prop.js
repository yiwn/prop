/**
 * Dependencies
 */

var type = require('component-type');

var merge = require('yiwn-merge');

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

    if (type(name) == 'object')
        merge(target, name, true);

    return target;
}
