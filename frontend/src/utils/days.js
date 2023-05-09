let today = new Date();
let tomorrow = new Date();
let nextYear = new Date();
today.setHours(0, 0, 0, 0);
tomorrow.setHours(0, 0, 0, 0);
nextYear.setHours(0, 0, 0, 0);
nextYear.setFullYear(today.getFullYear() + 1);
tomorrow.setDate(today.getDate() + 1);



export {
    today,
    tomorrow,
    nextYear
}