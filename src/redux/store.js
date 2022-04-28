import { configureStore } from "@reduxjs/toolkit";
import { itemsSlice } from "./slice";

export const store = configureStore({
  reducer: {
    contacts:itemsSlice.reducer
  }
})