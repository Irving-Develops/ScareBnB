import { getDates } from "./getDates";

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