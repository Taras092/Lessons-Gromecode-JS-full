export const getDiff = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = new Date(end.getTime() - start.getTime());
  const day = Math.abs(parseInt(diff / (24*3600*1000)));
  const hour = Math.abs(Math.floor((diff / (1000 * 60 * 60)) % 24));
  const minute = Math.abs(Math.floor((diff / (1000 * 60)) % 60));
  const seconds = Math.abs(Math.floor((diff / 1000) % 60));
  const result = `${day}d ${hour}h ${minute}m ${seconds}s`;
  return result;
}

// getDiff(new Date(2019, 0,), new Date(2020, 0, 3));
// getDiff(new Date(2017, 0,), new Date(2020, 0, 3))
