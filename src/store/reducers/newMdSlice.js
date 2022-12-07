import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentType: 1,
}

const newMdSlice = createSlice({
  name: 'newMd',
  initialState,
  reducers: {
    setCurrentType: (state, action) => {
      state.currentType = action.payload
    }
  }
});

export const { setCurrentType } = newMdSlice.actions;

export default newMdSlice.reducer;