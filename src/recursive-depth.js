const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (typeof arr == 'undefined' || arr.length == 0)
      return 1;
    else if (Array.isArray(arr))
      return 1 + Math.max(...arr.map(defined => this.calculateDepth(defined)));
    else
      return 0;
  }
};