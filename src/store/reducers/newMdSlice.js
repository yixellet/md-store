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
  }
}

const newMdSlice = createSlice({
  name: 'newMd',
  initialState,
  reducers: {
    setGeometry: (state, action) => {
      state.geometry = action.payload
    },
  }
});

export const { setGeometry } = newMdSlice.actions;

export default newMdSlice.reducer;