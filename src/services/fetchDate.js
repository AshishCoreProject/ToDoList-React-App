export function fetchDate() {
  const date = new Date();
  const todayDate = date.toDateString();
  const todayDetails = todayDate.toString();
  const day = todayDetails.slice(0, 3);
  const monthNum = date.getMonth();
  const thisDate = date.getDate();
  const month = todayDetails.slice(4, 8);
  const year = date.getFullYear();
  return { day, month, monthNum, thisDate, year };
}
