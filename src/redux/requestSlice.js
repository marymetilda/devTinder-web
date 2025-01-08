import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (_, action) => action.payload,
    removeRequests: () => null,
  },
});

export const { addRequests, removeRequests } = requestSlice.actions;
export default requestSlice.reducer;
