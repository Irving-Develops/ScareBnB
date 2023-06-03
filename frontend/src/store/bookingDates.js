import { createSlice } from "@reduxjs/toolkit";

const bookingDatesSlice = createSlice({
    name: "bookingDates",
    initialState: {
        startDate: null,
        endDate: null
    },
    reducers: {
        setStartDate: (state, action) => {
            console.log(action.payload, "payload in booking dates slice")
            state.startDate = action.payload;
        },
        setEndDate: (state, action) => {
            console.log(action, "payload in booking dates slice");

            state.endDate = action.payload;
        }
    }
});

export default bookingDatesSlice;
export const { setStartDate, setEndDate } = bookingDatesSlice.actions;