import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface List {
  id: string;
  name: string;
}

interface ListsState {
  lists: List[];
}

const initialState: ListsState = {
  lists: [],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    createList: (state, action: PayloadAction<string>) => {
      const newList: List = {
        id: new Date().toISOString(),
        name: action.payload,
      };
      state.lists.push(newList);
    },
    deleteList: (state, action: PayloadAction<string>) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const { createList, deleteList } = listsSlice.actions;
export const selectLists = (state: RootState) => state.lists.lists;
export default listsSlice.reducer;
