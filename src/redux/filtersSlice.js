import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

export const { changeFilter } = slice.actions;

export default slice.reducer;
