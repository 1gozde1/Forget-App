import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: { username: string } | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string }>) => {
      state.user = { username: action.payload.username };
      state.isAuthenticated = true;
    },
    register: (state, action: PayloadAction<{ username: string }>) => {
      state.user = { username: action.payload.username };
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout, register } = userSlice.actions;

export default userSlice.reducer;
