export const weekDays = [ 'Su', 'Mo', 'Tu', 'We','Th', 'Fr', 'St']

export const dayOfWeeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
}

// const result = dayOfWeeek(new Date(2021, 1, 8), 8);

// console.log(result);