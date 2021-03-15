const CustomError = require("../extensions/custom-error");
const Alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
class VigenereCipheringMachine {
  constructor(par) {
    if (par == false)
      this.par = false;
    else
      this.par = true;
  }
  encrypt(message, key) {
    let answer = Encrypt(message, key);
    if (this.par == false)
      answer = answer.split('').reverse().join('');
    return answer;
  }
  decrypt(message, key) {
    let answer = Dencrypt(message, key);
    if (this.par == false)
      answer = answer.split('').reverse().join('');
    return answer;
  }
}

function Encrypt(message, key) {
  let mes = message.toUpperCase();
  let keyword = key.toUpperCase();
  let res = '';
  let par = 0;
  let keyPar = 0;

  //sleep(2000).then(() => {
  //  console.log('message: ' + mes);
  //  console.log('keyword: ' + keyword);
  //})
  for (i = 0; i < mes.length; i++) {
    if (Alphabet.indexOf(mes[i], 0) != -1) {
      par = (Alphabet.indexOf(mes[i], 0) + Alphabet.indexOf(keyword[keyPar], 0)) % Alphabet.length;
      res += Alphabet[par];
      keyPar++;
    }
    else
      res += mes[i];
    if (keyPar == keyword.length)
      keyPar = 0;
  }
  return res;
}
function Dencrypt(message, key) {
  let mes = message.toUpperCase();
  let keyword = key.toUpperCase();
  let res = '';
  let par = 0;
  let keyPar = 0;

  for (i = 0; i < mes.length; i++) {
    if (Alphabet.indexOf(mes[i], 0) != -1) {
      par = (Alphabet.indexOf(mes[i], 0) + Alphabet.length - Alphabet.indexOf(keyword[keyPar], 0)) % Alphabet.length;
      res += Alphabet[par];
      keyPar++;
    }
    else
      res += mes[i];
    if (keyPar == keyword.length)
      keyPar = 0;
  }
  return res;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports = VigenereCipheringMachine;
