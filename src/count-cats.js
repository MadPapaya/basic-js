// const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix){
  let catCounter = 0 ;
  let tempMatrix ;
  tempMatrix =matrix.toString().split(',');
  for(let i = 0 ; i <= tempMatrix.length ; i++  ) {
    if (tempMatrix[i] === '^^'){
      catCounter +=1;
    }
  };
  return catCounter;
};
