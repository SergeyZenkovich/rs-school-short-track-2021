/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const firstArr = s1.split('').sort();
  const secondArr = s2.split('').sort();
  let numberOfCommon = 0;

  secondArr.forEach((el) => {
    if (firstArr.includes(el)) {
      numberOfCommon++;
    }
    firstArr.shift();
  });
  return numberOfCommon;
}

module.exports = getCommonCharacterCount;
