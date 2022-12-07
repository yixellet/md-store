import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: 1,
  tabs: {
    1: {
      id: 1,
      label: 'Фильтры',
    },
    2: {
      id: 2,
      label: 'Метаданные',
    },
    3: {
      id: 3,
      label: 'Новая запись',
    }
  }
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    }
  }
});

export const { setActiveTab } = appSlice.actions;

export default appSlice.reducer;