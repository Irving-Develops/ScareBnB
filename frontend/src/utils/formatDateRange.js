import { moment } from ".";

export const formatDateRange = (startDate, endDate) => {
  const date1 = moment(startDate);
  const date2 = moment(endDate);

  const formattedRange =
    date1.format("MMM D") + " - " + date2.format("MMM D, YYYY");
  return formattedRange;
};
