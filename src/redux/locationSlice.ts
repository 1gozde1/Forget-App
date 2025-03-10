import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  selectedLocation: string | null;
}

const initialState: LocationState = {
  selectedLocation: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
    },
    resetLocation: (state) => {
      state.selectedLocation = null;
    },
  },
});

export const { setLocation, resetLocation } = locationSlice.actions;
export default locationSlice.reducer;
