/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const resultArr = arr.map((el) => {
    if (el !== -1) {
      return 0;
    }
    return el;
  });
  const tempArr = arr.filter((el) => el !== -1).sort((a, b) => a - b);
  tempArr.forEach((el) => {
    resultArr[resultArr.findIndex((e) => e === 0)] = el;
  });
  return resultArr;
}

module.exports = sortByHeight;
