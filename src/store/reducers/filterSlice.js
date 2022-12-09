import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: null,
  endDate: null,
  types: [],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload
    },
    addTypes: (state, action) => {
      state.types = state.types.push(action.payload)
    },
    removeTypes: (state, action) => {
      state.types = state.types.pop(action.payload)
    },
  }
});

export const { setStartDate, setEndDate } = filterSlice.actions;

export default filterSlice.reducer;