import { moment, today } from ".";

export const isAfter = (startDate) => {
    const date = moment(startDate);
    return date.isAfter(today);
}