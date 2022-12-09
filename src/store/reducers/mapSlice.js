import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialView: {
    center: [47.3, 47.15],
    zoom: 8,
  },
  currentExtent: null,
};

const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setView: (state, action) => {
      state[action.payload.setting] = action.payload.value
    }
  }
});

export const { setView } = mapSlice.actions;

export default mapSlice.reducer;