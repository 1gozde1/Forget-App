import { configureStore } from "@reduxjs/toolkit";
import checklistReducer from "./checklistSlice";
import locationReducer from "./locationSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    checklist: checklistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
