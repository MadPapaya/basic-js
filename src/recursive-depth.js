const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    let insideEl = 1;

    arr.forEach( (item) => {
      if (Array.isArray(item)) {
        insideEl = this.calculateDepth(item);
        if (counter < insideEl) counter = insideEl;
      }
    });
    return ++counter;
  }
};
