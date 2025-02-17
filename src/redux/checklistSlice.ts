import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const checklistItems: Record<string, string[]> = {
  Work: [
    "Ipad",
    "Logbook",
    "Passport",
    "2/ID cards",
    "Wallet",
    "Landing card",
    "Apron card",
    "Pen",
    "Hat",
    "Keys",
  ],
  Restaurant: ["Wallet", "Phone", "Keys"],
  Gym: ["Wallet", "Phone", "Keys", "Towel", "Chain lock"],
  Market: ["Shopping list", "Wallet", "Phone", "Keys"],
  PreRide: [
    "Helmet",
    "Gloves",
    "Boots",
    "Wallet",
    "Phone",
    "Ear plugs",
    "Jacket",
    "Pants",
    "Balaclava",
    "Turn on Intercom",
    "Key Holder",
    "Tyre pressure",
    "Fuel",
    "Chain",
    "Brake fluid",
    "Keys",
    "License",
    "Vehicle Registration",
  ],
  PostRide: [
    "Turn off Intercom",
    "Wallet",
    "Phone",
    "Keys",
    "Ear plugs",
    "Key Holder",
    "Tyre pressure",
    "Fuel",
    "Chain",
    "Brake fluid",
    "License",
    "Vehicle Registration",
  ],
};

export interface ChecklistState {
  checklist: Record<string, boolean>;
}

const initialState: ChecklistState = {
  checklist: {},
};

const checklistSlice = createSlice({
  name: "checklist",
  initialState,
  reducers: {
    setChecklist: (state, action: PayloadAction<string>) => {
      const location = action.payload;
      if (checklistItems[location]) {
        state.checklist = checklistItems[location].reduce(
          (acc: Record<string, boolean>, item) => {
            acc[item] = false;
            return acc;
          },
          {}
        );
      } else {
        state.checklist = {};
      }
    },
    toggleChecklistItem: (state, action: PayloadAction<string>) => {
      if (state.checklist[action.payload] !== undefined) {
        state.checklist[action.payload] = !state.checklist[action.payload];
      }
    },
  },
});

export const { setChecklist, toggleChecklistItem } = checklistSlice.actions;

export default checklistSlice.reducer;
