/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let tempIndex = Math.floor(array.length / 2);
  let resultIndex = tempIndex;
  while (array[tempIndex] !== value) {
    if (array[tempIndex] > value) {
      tempIndex = Math.floor(tempIndex / 2);
      resultIndex = tempIndex;
    } else {
      tempIndex = Math.floor((array.length + tempIndex) / 2);
      resultIndex = tempIndex;
    }
  }
  return resultIndex;
}

module.exports = findIndex;
