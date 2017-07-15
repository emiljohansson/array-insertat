# array-insertAt [![Build Status](https://travis-ci.org/emiljohansson/array-insertat.svg?branch=master)](https://travis-ci.org/emiljohansson/array-insertat)

> Inserts an item at a specific position.

Returns a new array, where an item is inserted at a specific position. The original array will not be modified.

## Install

```
$ npm install --save array-insertat
```

## Usage

```js
const insertAt = require('array-insertat')
insertAt([1, 2], 1, 3)
// => [1, 3, 2]
```

## API

### insertAt(array, index, item)

Returns the modified array.

#### array

Type: `array`

The array to modify.

#### index

Type: `index`

Position where to modify the array.

#### item

Type: `item`

The item to add.

## License

MIT © [Emil Johansson](http://emiljohansson.se)
