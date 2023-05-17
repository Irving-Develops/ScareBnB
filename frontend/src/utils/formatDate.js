import { moment } from ".";

export const formatDate = (date) => {
const formattedDate = moment(date).format("MM/DD/YYYY");
return formattedDate;
}