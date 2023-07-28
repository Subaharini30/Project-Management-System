import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  Emails: null,
  Token: null,
  userDetails: null,
};

const masterSlice = createSlice({
  name: "Master",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    addEmails: (state, action) => {
      console.log(action);
      state.Emails=action.payload;
    },
    addToken: (state, action) => {
      state.Token=action.payload;
    },
  },
});

export const {
  addUser,
  addUserDetails,
  addEmails,
  addToken,
} = masterSlice.actions;

export default masterSlice.reducer;
