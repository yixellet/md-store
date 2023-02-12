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
  counterpartiesList: {
    '1': {
      name: 'persons',
      fields: {
        1: {
          id: 1,
          name: 'name',
          description: 'ФИО',
          search: true,
        },
        2: {
          id: 2,
          name: 'inn',
          description: 'ИНН',
          search: true,
        },
        3: {
          id: 3,
          name: 'address',
          description: 'Адрес',
          search: false,
        }
      }
    },
    '2': {
      name: 'entities',
      fields: {
        1: {
          id: 1,
          name: 'name',
          description: 'Наименование',
          search: true,
        },
        2: {
          id: 2,
          name: 'inn',
          description: 'ИНН',
          search: true,
        },
        3: {
          id: 3,
          name: 'address',
          description: 'Адрес',
          search: false,
        }
      }
    },
  },
  selectedCounterparty: null,
  modalWindowIsOpen: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setSelectedCounterparty: (state, action) => {
      state.selectedCounterparty = action.payload;
    },
    openCloseModalWindow: (state, action) => {
      state.modalWindowIsOpen = !state.modalWindowIsOpen;
    }
  }
});

export const {
  setActiveTab,
  setSelectedCounterparty,
  openCloseModalWindow
} = appSlice.actions;

export default appSlice.reducer;