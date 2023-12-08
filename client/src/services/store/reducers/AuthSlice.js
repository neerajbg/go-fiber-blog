import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
