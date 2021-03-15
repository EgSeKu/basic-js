const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: new Array(),
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value == null)
      this.chain.push('null');
    else if (typeof value == 'undefined')
      this.chain.push(' ');
    else
      this.chain.push(value.toString());
    //console.log(this.chain);
    return this;
  },
  removeLink(position) {
    if (typeof position != 'undefined' && this.chain.indexOf(this.chain[position - 1]) != -1) {
      let newChain = [];
      for (i = 0; i < this.chain.length; i++)
        if (this.chain[i] != this.chain[position - 1])
          newChain.push(this.chain[i]);
      this.chain = newChain;
      return this;
    }
    else {
      this.chain = [];
      throw Error('');
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = '';
    for (i = 0; i < this.chain.length; i++) {
      res += '( ' + this.chain[i] + ' )';
      if (i != this.chain.length - 1)
        res += '~~';
    }
    //console.log(res);
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
