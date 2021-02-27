const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {


  constructor(type) {
    if (type === false) {
      this.type = 'reverse';
    } else {
      this.type = 'direct';
    }
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw Error();
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let keyLong = key;
    let cryptedArr = [];
    while (keyLong.length < message.length) {
      keyLong += key;
    }
    let messageArray = message.toUpperCase().split('');
    let keyArray = keyLong.toUpperCase().split('');

    for (let i = 0; i < messageArray.length; i++) {
      function checkIndexMes(index) {
        return index === messageArray[i]
      }
      let messageNumb = alphabet.findIndex(checkIndexMes);
      if (messageNumb === -1) {
        keyArray.splice(i, 0, messageArray[i]);
        cryptedArr.push(messageArray[i]);
      } else {
        function checkIndexKey(index) {
          return index === keyArray[i]
        }
        let keyNumb = alphabet.findIndex(checkIndexKey);
        let sum = messageNumb + keyNumb;
        while (sum > 25) {
          sum = Math.abs(sum - 26);
        }
        cryptedArr.push(alphabet[sum]);
      }
    }
    if (this.type === 'direct') {
      return cryptedArr.join('');
    } else {
      let reversedArr = [];
      for (let i = cryptedArr.length; i >= 0; i--){
        reversedArr.push(cryptedArr[i]);
      }
      return reversedArr.join('')
    }
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw Error();
    let alfabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let keyLong = key;
    let deCryptedArr = [];
    let sum;
    while (keyLong.length < message.length) {
      keyLong += key;
    }
    let messageArray = message.toUpperCase().split('');
    let keyArray = keyLong.toUpperCase().split('');
    for (let i = 0; i < messageArray.length; i++) {
      function checkIndexMes(index) {
        return index === messageArray[i]
      }
      let messageNumb = alfabet.findIndex(checkIndexMes);
      if (messageNumb === -1) {
        keyArray.splice(i, 0, messageArray[i]);
        deCryptedArr.push(messageArray[i]);
      } else {
        function checkIndexKey(index) {
          return index === keyArray[i]
        }
        let keyNumb = alfabet.findIndex(checkIndexKey);
        if (messageNumb > keyNumb) {
          sum = Math.abs(messageNumb - keyNumb)
        } else {
          sum = Math.abs(messageNumb + 26 - keyNumb)
        }
        while (sum > 25) {
          sum = Math.abs(sum - 26);
        }
        deCryptedArr.push(alfabet[sum]);
      }
    }
    if (this.type === 'direct') {
      return deCryptedArr.join('');
    } else {
      let reversedArr = [];
      for (let i = deCryptedArr.length; i >= 0; i--){
        reversedArr.push(deCryptedArr[i]);
      }
      return reversedArr.join('');

    }
  }
}


module.exports = VigenereCipheringMachine;
