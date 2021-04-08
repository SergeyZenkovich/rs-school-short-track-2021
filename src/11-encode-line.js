/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strArr = str.split('');
  let tempStr = '';
  let tempNum = 0;
  let resultStr = '';

  strArr.forEach((el, index) => {
    if (el === tempStr) {
      tempNum++;
    } else if (tempStr !== '') {
      resultStr += `${tempNum > 1 ? tempNum : ''}${tempStr}`;
      tempStr = el;
      tempNum = 1;
    } else {
      tempStr = el;
      tempNum = 1;
    }
    if (index === strArr.length - 1) {
      resultStr += `${tempNum > 1 ? tempNum : ''}${tempStr}`;
    }
  });

  return resultStr;
}

module.exports = encodeLine;
