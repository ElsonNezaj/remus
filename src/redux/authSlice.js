import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedUser: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginConsole: (state) => {
      console.log("dek rept");
    },
  },
});
export const { loginConsole } = authSlice.actions;
export default authSlice.reducer;
