import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
  name: "chats",
  initialState: {
    page: "intro",
    name: null,
    age: null,
    date: null,
  },
  reducers: {
    updateName(state, action) {
      const name = action.payload;
      state.name = name;
    },
    updateAge(state, action) {
      const age = action.payload;
      state.age = age;
    },
    updateDate(state, action) {
      const date = action.payload;
      state.date = date;
    },
    directPage(state, action) {
      const page = action.payload;

      state.page = page;
    },
  },
});

export default chatsSlice;

export const { updateName, updateAge, updateDate, directPage } =
  chatsSlice.actions;
