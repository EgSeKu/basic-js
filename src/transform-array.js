const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let deathMeaked = [];
  let inArr = [];
  let res = [];
  if (!Array.isArray(arr))
    throw Error('THROWN');
  if (arr == null)
    return false;
  for (i = 0; i < arr.length; i++)
    inArr.push(arr[i]);
  for (i = 0; i < inArr.length; i++) {
    if (inArr[i] == '--double-next') {
      if (i == inArr.length - 1) {
        deathMeaked.push(i);
      }
      else {
        inArr[i] = inArr[i + 1];
      }
    }
    else if (inArr[i] == '--discard-next') {
      deathMeaked.push(i);
      if (i != inArr.length - 1) {
        deathMeaked.push(i + 1);
      }
    }
    else if (inArr[i] == '--discard-prev') {
      deathMeaked.push(i);
      if (i != 0) {
        deathMeaked.push(i - 1);
      }
    }
    else if (inArr[i] == '--double-prev') {
      if (i == 0 || deathMeaked.indexOf(i - 1, 0) != -1) {
        deathMeaked.push(i);
      }
      else {
        inArr[i] = inArr[i - 1];
      }
    }
  }
  for (i = 0; i < inArr.length; i++)
    if (deathMeaked.indexOf(i, 0) == -1)
      res.push(inArr[i]);
  return res;
};
