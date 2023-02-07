import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { dictionariesApi } from "../api/dictionaries";
import { metadataApi } from "../api/metadata";

import { cpApi } from "../api/cpApi";
import { lettersApi } from "../api/lettersApi";
import appSlice from './reducers/appSlice';
import newMdSlice from "./reducers/newMdSlice";
import newCpSlice from "./reducers/newCpSlice";
import { garApi } from "../api/garApi";

export const store = configureStore({
  reducer: {
    app: appSlice,
    newMd: newMdSlice,
    newCp: newCpSlice,
    [dictionariesApi.reducerPath]: dictionariesApi.reducer,
    [metadataApi.reducerPath]: metadataApi.reducer,
    [cpApi.reducerPath]: cpApi.reducer,
    [lettersApi.reducerPath]: lettersApi.reducer,
    [garApi.reducerPath]: garApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(dictionariesApi.middleware)
      .concat(metadataApi.middleware)
      .concat(cpApi.middleware)
      .concat(lettersApi.middleware)
      .concat(garApi.middleware),
});

setupListeners(store.dispatch);