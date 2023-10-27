export function fetchDate() {
  const date = new Date();
  const todayDate = date.toDateString();
  const todayDetails = todayDate.toString();
  const day = todayDetails.slice(0, 3);
  const month = date.getMonth();
  const thisDate = date.getDate();
  const year = todayDetails.slice(4, 8);
  return { day, month, thisDate, year };
}
