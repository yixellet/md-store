import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cpTypes: {
    1: {
      id: 1,
      name: 'Юридическое лицо',
    },
    2: {
      id: 2,
      name: 'Физическое лицо',
    }
  },
  activeCpType: 1,
  personFormFields: {
    1: {
      id: 1,
      name: 'name',
      label: 'Имя',
      value: '',
    },
    2: {
      id: 2,
      name: 'patronym',
      label: 'Отчество (при наличии)',
      value: '',
    },
    3: {
      id: 3,
      name: 'surname',
      label: 'Фамилия',
      value: '',
    },
    4: {
      id: 4,
      name: 'inn',
      label: 'ИНН',
      value: '',
    },
    5: {
      id: 5,
      name: 'postaddress_text',
      label: 'Почтовый адрес',
      value: '',
    },
  },
};

const newCpSlice = createSlice({
  name: 'cp',
  initialState,
  reducers: {
    setActiveCpType: (state, action) => {
      state.activeCpType = action.payload
    }
  }
});

export const { setActiveCpType } = newCpSlice.actions;

export default newCpSlice.reducer;