# prop

Set or get properties of provided object.

## Installation

Using [component](https://github.com/component/component)

    $ component install yiwn/prop

Using [npm](http://npmjs.org/) for [browserify](http://browserify.org/)

    $ npm install yiwn-prop

## Usage

Example:

```js
var prop = require('yiwn-prop');

var obj = {
        a: 0,
        c: 'Shakira'
    };

prop(obj, 'c'); // -> 'Shakira'
prop(obj, 'c', 'Britney'); // { a: 0, c: 'Britney' }
prop(obj, { a: 50, b: [1, 2] }); // { a: 50, b: [1, 2], c: 'Britney' }
```

## Test

Run tests with [mocha](http://visionmedia.github.io/mocha/)

    $ make test

## License

The MIT License

