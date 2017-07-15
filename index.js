/**
 * Creates a new array and inserts an item into the array at `index` position.
 *
 * @param {Array} array The array to modify.
 * @param {number} index Position where to modify the array.
 * @param {*} item The item to add.
 * @return {Array} array A new, modified array based of the original array.
 * @example
 *
 * insertAt([1, 2], 1, 3)
 *
 * // => [1, 3, 2]
 */
const insertAt = (array, index, item) => {
  if (!Array.isArray(array)) {
    return
  }
  const result = array.slice(0)
  result.splice(index, 0, item)
  return result
}

module.exports = insertAt
