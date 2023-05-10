import { getDates } from "./getDates";
const moment = require("moment");

export function getBookedDates(bookings) {
    console.log(bookings, "bookings in getBookedDates")
  let bookedDates = [];
  bookings.forEach(booking => {
    let dates = getDates(booking.startDate, booking.endDate);
    dates.forEach(date => {
      bookedDates.push(moment(date).toDate());
    });
  });
  return bookedDates;
}