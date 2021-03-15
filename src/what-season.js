const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let res = ''
  if (typeof date == 'undefined' || date == null)
    return 'Unable to determine the time of year!';
  let month = date.getMonth();
  let check = new Date(date.toString());
  if (check.getFullYear() != date.getFullYear()) {
    throw Error('THROWN');// кому вообще подобное надо
  }
  if (month == 11 || month == 0 || month == 1)
    res = 'winter';
  else if (month == 2 || month == 3 || month == 4)
    res = 'spring';
  else if (month == 5 || month == 6 || month == 7)
    res = 'summer';
  else if (month == 8 || month == 9 || month == 10)
    res = 'autumn';
  return res;
};
