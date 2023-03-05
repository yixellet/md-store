import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: {
    1: {
      id: 1,
      label: 'Главное',
    },
    2: {
      id: 2,
      label: 'Происх-е',
    },
    3: {
      id: 3,
      label: 'Объект',
    },
    4: {
      id: 4,
      label: 'Хранение',
    },
    5: {
      id: 5,
      label: 'Доступ',
    },
    6: {
      id: 6,
      label: 'Документы',
    },
  },
  activeTab: 1,
  geometry: null,
  geometryError: null,
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
    4: {
      id: 4,
      name: 'Каталог координат',
    },
  },
  activeInputType: '3',
  isPaintingConfirmed: false,
}

const newRecord = createSlice({
  name: 'newRecord',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setGeometry: (state, action) => {
      state.geometry = action.payload;
    },
    setGeometryError: (state, action) => {
      state.geometryError = action.payload;
    },
    setActiveInputType: (state, action) => {
      state.activeInputType = action.payload;
    },
    confirmPainting: (state, action) => {
      state.isPaintingConfirmed = action.payload;
    },
  }
});

export const { setActiveTab, setGeometry, setGeometryError, setActiveInputType, confirmPainting } = newRecord.actions;

export default newRecord.reducer;