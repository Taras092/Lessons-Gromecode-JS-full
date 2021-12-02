export const weekDays = [ 'Su', 'Mo', 'Tu', 'We','Th', 'Fr', 'St']

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];
}

// const result = dayOfWeek(new Date(2021, 1, 8), 8);

// console.log(result);