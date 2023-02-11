import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, loginUserData: {} },
  reducers: {
    Login(state) {
      state.isLoggedIn = true;
    },
    Logout(state) {
      state.isLoggedIn = false;
    },
    loginUserData: (state, action) => {
      state.loginUserData = action.payload;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice;
