const moment = require("moment");

export function getDates(startDate, endDate) {
  let dates = [];
  let currentDate = moment(startDate);
  endDate = moment(endDate);

  while (currentDate <= endDate) {
    dates.push(currentDate.format("YYYY-MM-DD"));
    currentDate.add(1, "day");
  }

  return dates;
}
