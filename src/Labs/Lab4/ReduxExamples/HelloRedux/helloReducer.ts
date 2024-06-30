import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "Hello World",
};

const helloSlice = createSlice ({
  name: "hello",
  initialState,
  reducers: {},
});

export default helloSlice.reducer;
// because the reducer is empty, there is no action needed.