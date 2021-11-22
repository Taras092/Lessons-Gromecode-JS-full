const timer = {
  secondPassed: 0,
  minsPassed: 0,
  startTimer() { 

    if (this.secondPassed < 60) {
      this.secondPassed += 1;
    }

    if (this.secondPassed === 60) {
      this.minsPassed = 1;
      this.secondPassed = 0;
    }
  },
  setInterval(ms) {
    setTimeout(() => this.startTimer(), ms);
  },
  // getTime() {
  //   return function () {
  //     if (this.minsPassed === 1 && this.secondPassed === 45) {
  //       return "1:05";
  //     }
  //   };
  // },
  stopTimer() {
     clearInterval(this.startTimer);
  },
  resetTimer() {
    this.secondPassed = 0;
    this.minsPassed = 0;
  },
};

console.log(timer.startTimer());
// console.log(timer.getTime());
console.log(timer.stopTimer.call(timer));
console.log(timer.setInterval(1000));
console.log(timer.stopTimer.call(timer));