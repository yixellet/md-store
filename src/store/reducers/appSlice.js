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
  },
  mdProps: {
    type: {
      1: {
        id: 1,
        name: 'Цифровая картографическая продукция',
        controller: 'dmap',
      },
      2: {
        id: 2,
        name: 'Карты, атласы и границы',
        controller: 'amap',
      },
      3: {
        id: 3,
        name: 'Цифровые данные ДЗЗ',
        controller: 'ders',
      },
      12: {
        id: 12,
        name: 'Нормативные документы и иное',
        controller: 'nsi',
      },
      5: {
        id: 5,
        name: 'Геодезические материалы',
        controller: 'geodesy',
      },
    },
    scale: {
      500: {
        id: 500,
        name: '1:500'
      },
      1000: {
        id: 1000,
         name: '1:1 000'
      },
      2000: {
        id: 2000,
         name: '1:2 000'
      },
      5000: {
        id: 5000,
         name: '1:5 000'
      },
      10000: {
        id: 10000,
         name: '1:10 000'
      }
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