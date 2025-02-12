import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocationState {
  selectedLocation: string;
}

const initialState: LocationState = {
  selectedLocation: "", // Başlangıçta boş
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
