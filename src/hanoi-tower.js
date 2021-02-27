
const CustomError = require("../extensions/custom-error");
module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    let outObject = {
      turns: 0,
      seconds: 0
    }
    outObject.turns = (2 ** disksNumber) - 1;
    outObject.seconds = Math.floor( ((1)/(turnsSpeed/3600) ) * outObject.turns);
    return outObject;
};
