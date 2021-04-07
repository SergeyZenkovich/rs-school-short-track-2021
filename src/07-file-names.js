/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) {
    return names;
  }
  const tempObj = {};
  const resultArr = [];
  names.forEach((el) => {
    if (el in tempObj) {
      tempObj[el] += 1;
      resultArr.push(`${el}(${tempObj[el]})`);
      tempObj[`${el}(${tempObj[el]})`] = 0;
    } else {
      tempObj[el] = 0;
      resultArr.push(el);
    }
  });
  return resultArr;
}

module.exports = renameFiles;
