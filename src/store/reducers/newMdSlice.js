import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "1",
  subtype: null,
  storageFormat: null,
  geometry: null,
}

const newMdSlice = createSlice({
  name: 'newMd',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload
    },
    setSubtype: (state, action) => {
      state.subtype = action.payload
    },
    setStorageFormat: (state, action) => {
      state.storageFormat = action.payload
    },
    setGeometry: (state, action) => {
      state.geometry = action.payload
    },
  }
});

export const { setType, setSubtype, setStorageFormat, setGeometry } = newMdSlice.actions;

export default newMdSlice.reducer;