const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let sample;
  let res = 0;
  if (typeof sampleActivity != 'string' || sampleActivity == null)
    return false;
  else
    sample = parseFloat(sampleActivity);
  if (isNaN(sample) || sample <= 0)
    return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  res = Math.log(MODERN_ACTIVITY / sample) / k;
  res = Math.ceil(res);
  if (res < 0)
    return false;
  return res;
};
