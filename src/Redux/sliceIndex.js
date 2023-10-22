import { createSlice } from "@reduxjs/toolkit";

const sliceIndex = createSlice({
  name: "indexData",
  initialState: {
    index: 0,
  },
  reducers: {
    updateIndex: (state, action) => {
      state.index = action.payload; // Use action.payload to update the state
    },
  },
});

export const { updateIndex } = sliceIndex.actions;
export default sliceIndex.reducer;
