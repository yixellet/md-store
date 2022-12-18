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
  newMdFormFields: {
    1: {
      id: 1,
      name: 'nomenclature',
      label: 'Номенклатура',
      isVisible: [1, 2, 3, 5],
      isRequired: [],
      fieldType: 'text'
    },
  },
  newLetterForm: {
    isOpened: false,
    defaultType: null,
  },
  newCounterpartyForm: {
    isOpened: true,
  }
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    },
    openNewLetterWindow: (state, action) => {
      state.newLetterForm.isOpened = true;
      state.newLetterForm.defaultType = action.payload
    },
    closeNewLetterWindow: (state, action) => {
      state.newLetterForm.isOpened = false;
      state.newLetterForm.defaultType = null
    },
    openCloseNewCounterpartyForm: (state, action) => {
      state.newCounterpartyForm.isOpened = !state.newCounterpartyForm.isOpened
    }
  }
});

export const {
  setActiveTab,
  openNewLetterWindow,
  closeNewLetterWindow,
  openCloseNewCounterpartyForm
} = appSlice.actions;

export default appSlice.reducer;