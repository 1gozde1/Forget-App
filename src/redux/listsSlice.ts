import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ListItem {
  id: string;
  name: string;
}

interface LocationList {
  id: string;
  name: string;
  location: string;
  items: ListItem[];
}

interface ListsState {
  lists: LocationList[];
}

const initialState: ListsState = {
  lists: [],
};

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    createList(
      state,
      action: PayloadAction<{ name: string; location: string }>
    ) {
      const newList: LocationList = {
        id: crypto.randomUUID(),
        name: action.payload.name,
        location: action.payload.location,
        items: [],
      };
      state.lists.push(newList);
    },

    addItemToList(
      state,
      action: PayloadAction<{ listId: string; itemName: string }>
    ) {
      const list = state.lists.find(
        (list) => list.id === action.payload.listId
      );
      if (list) {
        const newItem: ListItem = {
          id: crypto.randomUUID(),
          name: action.payload.itemName,
        };
        list.items.push(newItem);
      }
    },

    removeItemFromList(
      state,
      action: PayloadAction<{ listId: string; itemId: string }>
    ) {
      const list = state.lists.find(
        (list) => list.id === action.payload.listId
      );
      if (list) {
        list.items = list.items.filter(
          (item) => item.id !== action.payload.itemId
        );
      }
    },

    deleteList(state, action: PayloadAction<string>) {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const selectLists = (state: { lists: ListsState }) => state.lists.lists;

export const { createList, deleteList, addItemToList, removeItemFromList } =
  listsSlice.actions;

export default listsSlice.reducer;
