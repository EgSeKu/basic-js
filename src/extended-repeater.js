const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let localStr = 'null'
  if (str != null) {
    if (typeof str == 'object')
      localStr = str.valueOf();
    else
      localStr = str.toString();
  }
  let separator = '+'
  let additionSeparator = '|';
  let repeat = 1;
  let additionRepeat = 1;
  let res = localStr;

  if (typeof options.repeatTimes != 'undefined')
    repeat = options.repeatTimes;
  if (typeof options.additionRepeatTimes != 'undefined')
    additionRepeat = options.additionRepeatTimes;
  if (typeof options.separator != 'undefined')
    separator = options.separator.toString();
  if (typeof options.additionSeparator != 'undefined')
    additionSeparator = options.additionSeparator.toString();

  for (i = 0; i < repeat; i++) {
    for (j = 0; j < additionRepeat; j++) {
      if (typeof options.addition != 'undefined')
        if (str != null) {
          if (typeof str == 'object')
            res += options.addition.valueOf();
          else
            res += options.addition.toString();
        }
        else
          res += 'null';
      if (j != additionRepeat - 1)
        res += additionSeparator;
    }
    if (i < repeat - 1) {
      res += separator;
      res += localStr;
    }
  }
  return res;
};
