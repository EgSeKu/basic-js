const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let resArr = [];
  let res = '';
  let str = '';
  if (typeof members == 'undefined' || members == null)
    return false;
  for (i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string'){
        str = members[i].replace(/\s/g, '');
        resArr.push(str[0].toUpperCase());
      }
  }
  resArr.sort();
  for (i = 0; i < resArr.length; i++)
    res += resArr[i];
  return res;
};
