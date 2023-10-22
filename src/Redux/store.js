import { configureStore } from "@reduxjs/toolkit";
import sliceIndex from "./sliceIndex"; // Import the default export

export const store = configureStore({
  reducer: {
    indexData: sliceIndex, // Use the key-value pair for your reducer
  },
});
