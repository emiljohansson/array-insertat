const test = require('ava')
const insertAt = require('.')

test('do nothing', t => {
  t.is(insertAt(), undefined)
  t.is(insertAt(null), undefined)
  t.is(insertAt({}), undefined)
  t.is(insertAt({
    style: {}
  }), undefined)
})

test('insert a number', t => {
  t.deepEqual(insertAt([], 1, 2), [2])
  t.deepEqual(insertAt([3], -1, 2), [2, 3])
  t.deepEqual(insertAt([3], 0, 2), [2, 3])
  t.deepEqual(insertAt([3], 1, 2), [3, 2])
  t.deepEqual(insertAt([1, 2], 1, 3), [1, 3, 2])
})

test('insert a string', t => {
  t.deepEqual(insertAt(["a", "c"], 1, "b"), ["a", "b", "c"])
})

test('insert an object', t => {
  t.deepEqual(insertAt(
    [{ a: 1 }, { b: 2 }],
    1,
    { c: 3 }
  ), [{ a: 1 }, { c: 3 }, { b: 2 }])
})

test('leave original same', t => {
  const array = [1, 2, 3]
  insertAt(array, 2, 1)
  t.is(array.length, 3)
})

test('always return same result', t => {
  const array = [1, 2, 3]
  const expected = [1, 4, 2, 3]
  t.deepEqual(insertAt(array, 1, 4), expected)
  t.deepEqual(insertAt(array, 1, 4), expected)
})
