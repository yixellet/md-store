import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  geometry: null,
  geomInputTypes: {
    1: {
      id: 1,
      name: 'Нарисовать на карте',
    },
    2: {
      id: 2,
      name: 'Импортировать GeoJSON',
    },
    3: {
      id: 3,
      name: 'Скопировать WKT',
    },
  },
  activeInputType: 1,
  isPaintingConfirmed: false,
}

const newMdSlice = createSlice({
  name: 'newMd',
  initialState,
  reducers: {
    setGeometry: (state, action) => {
      state.geometry = action.payload
    },
    setActiveInputType: (state, action) => {
      state.activeInputType = action.payload
    },
    confirmPainting: (state, action) => {
      state.isPaintingConfirmed = action.payload
    },
  }
});

export const { setGeometry, setActiveInputType, confirmPainting } = newMdSlice.actions;

export default newMdSlice.reducer;