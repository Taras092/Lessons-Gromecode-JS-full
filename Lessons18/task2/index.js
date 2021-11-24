const wallet = {
  transaction: [59, 25, 80, 55, 100],
  getMax() {
   return Math.max(...this.transaction);
   // return Math.max.apply(null, this.transaction);
  },
  getMin() {
    return Math.min(...this.transaction);
  },
};

console.log(wallet.getMax());
console.log(wallet.getMin());