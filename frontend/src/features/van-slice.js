import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const vanSlice = createApi({
    reducerPath: "vans",
    baseQuery: fetchBaseQuery({baseUrl: "/api/spots"})
})