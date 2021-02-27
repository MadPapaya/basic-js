// const CustomError = require("../extensions/custom-error");
module.exports = function getSeason(date) {
  let season;
  if(date){
    let invalidDataStamp = new Date(1, 0, 0, 0, 0, 0, 0);
    if (date.getMonth !== invalidDataStamp.getMonth) {
      throw new Error();
    };
    const month = date.getMonth() + 1 ;
     if (month === 12 || month === 1 || month === 2) {
     return "winter";
     } else if (month >= 3 && month < 6) {
      return "spring";
    } else if (month >= 6 && month < 9) {
      return "summer";
    } else if (month >= 9 && month < 12) {
      return "autumn";
    }
  }else {
    return 'Unable to determine the time of year!'
  }
};
