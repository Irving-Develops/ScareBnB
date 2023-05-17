import { csrfFetch } from "./csrf";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const getAllVans = createAsyncThunk("vans/getAllVans", async () => {
  const response = await csrfFetch("/api/vans");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to get vans");
  }
  return data;
});

export const getSingleVan = createAsyncThunk(
  "vans/getSingleVan",
  async (id) => {
    const response = await csrfFetch(`/api/vans/${id}`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to get vans");
    }
    return data;
  }
);

export const vanSlice = createSlice({
  name: "vans",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVans.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getAllVans.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getSingleVan.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});
