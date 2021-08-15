export const getTimeDuration = (time: string) => {
  const timeNum = parseInt(time);
  const hour = Math.trunc(timeNum / 60);
  let min = timeNum - hour * 60;

  return `Duration: ${hour}h, ${min}min.`
}