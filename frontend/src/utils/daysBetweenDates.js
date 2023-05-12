import { moment } from ".";

export const daysBetweenDates = (startDate, endDate) => {
    if(!endDate) return "Select Dates"
    const date1 = moment(startDate);
    const date2 = moment(endDate);

  return date2.diff(date1, "days");
}

