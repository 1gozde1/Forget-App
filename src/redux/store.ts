import { configureStore } from "@reduxjs/toolkit";
import checklistReducer from "./checklistSlice";
import locationReducer from "./locationSlice";
import userReducer from "./userSlice";
import listsReducer from "./listsSlice";

export const store = configureStore({
  reducer: {
    location: locationReducer,
    checklist: checklistReducer,
    user: userReducer,
    lists: listsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
