import { getDates } from "./getDates";
// const moment = require("moment");
// console.log(moment)
export function getBookedDates(bookings) {
  let bookedDates = [];
  bookings.forEach(booking => {
    let dates = getDates(booking.startDate, booking.endDate);
    dates.forEach(date => {
      bookedDates.push(date);
    });
  });
  return bookedDates;
}