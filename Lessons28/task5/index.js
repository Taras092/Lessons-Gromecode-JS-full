// input: new Data
// output: object whith metods

export const shmoment = (date) => {
  const result = new Date(date);

  const calculatorData = {
    // input: string and value
    // otput: obj
    add(str, value) {
      if (str === 'years') {
        result.setFullYear(result.getFullYear() + value);
      } else if ( str === 'months') {
        result.setMonth(result.getMonth() + value);
      } else if (str === 'days') {
        result.setDate(result.getDate() + value);
      } else if (str === 'hours') {
        result.setHours(result.getHours() + value);
      } else if (str === 'minutes') {
        result.setMinutes(result.getMinutes() + value);
      } else if (str === 'seconds') {
        result.setSeconds(result.getSeconds() + value);
      } else if (str === 'milliseconds') {
        result.setMilliseconds(result.getMilliseconds() + value);
      } 
      return this;
    },
    subtract(str, value) {
      if (str === 'years') {
        result.setFullYear(result.getFullYear() - value);
      } else if ( str === 'months') {
        result.setMonth(result.getMonth() - value);
      } else if (str === 'days') {
        result.setDate(result.getDate() - value);
      } else if (str === 'hours') {
        result.setHours(result.getHours() - value);
      } else if (str === 'minutes') {
        result.setMinutes(result.getMinutes() - value);
      } else if (str === 'seconds') {
        result.setSeconds(result.getSeconds() - value);
      } else if (str === 'milliseconds') {
        result.setMilliseconds(result.getMilliseconds() - value);
      } 
      return this;
    },
    result() {
      return result;
    }
  }

  return calculatorData;
}

// const result2 = shmoment(new Date(2019, 0, 17, 17, 10)).add('months', 5).add('hours', 2).subtract('years', 1).add('days', 3).result();
// console.log(result2);

// const sum = (data ,value) => {
//   const result =  new Date(data);
//   console.log(result);
//   // const newData = result.getDate() - value;
//   result.setFullYear(result.getFullYear() - value);
//   return result;
// }

// console.log(sum(new Date(2019, 0, 17, 17, 10), 5))