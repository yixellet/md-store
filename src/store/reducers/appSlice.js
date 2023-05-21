import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newRecord: {
    modalWindowIsOpen: false,
    type: null,
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
  sortingOptions: {
    '1': {
      id: '1',
      name: 'сначала недавние',
    },
    '2': {
      id: '2',
      name: 'сначала старые',
    },
    '3': {
      id: '3',
      name: 'сначала актуальные',
    },
    '4': {
      id: '4',
      name: 'сначала исторические',
    },
  },
  activeSortingOption: 1
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSelectedCounterparty: (state, action) => {
      state.selectedCounterparty = action.payload;
    },
    openNewRecordWindow: (state, action) => {
      state.newRecord.modalWindowIsOpen = true;
      state.newRecord.type = action.payload;
    },
    closeNewRecordWindow: (state, action) => {
      state.newRecord.modalWindowIsOpen = false;
      state.newRecord.type = null;
    },
    setActiveSortingOption: (state, action) => {
      state.activeSortingOption = action.payload;
    },
  },
});

export const {
  setSelectedCounterparty,
  openNewRecordWindow,
  closeNewRecordWindow,
  setActiveSortingOption,
} = appSlice.actions;

export default appSlice.reducer;