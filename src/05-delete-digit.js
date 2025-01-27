/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const string = String(n);
  let max = Number(string.slice(1));
  for (let i = 1; i < string.length; i++) {
    const tempMax = Number(string.slice(0, i) + string.slice(i + 1));
    if (tempMax > max) {
      max = tempMax;
    }
  }
  return max;
}

module.exports = deleteDigit;
