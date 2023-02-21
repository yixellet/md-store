import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { counterpartiesApi } from "../api/counterparties";
import { dictionariesApi } from "../api/dictionaries";
import { metadataApi } from "../api/metadata";

import { cpApi } from "../api/cpApi";
import appSlice from './reducers/appSlice';
import newMdSlice from "./reducers/newMdSlice";
import newCpSlice from "./reducers/newCpSlice";
import { garApi } from "../api/garApi";
import { documentsApi } from "../api/documents";

export const store = configureStore({
  reducer: {
    app: appSlice,
    newMd: newMdSlice,
    newCp: newCpSlice,
    [counterpartiesApi.reducerPath]: counterpartiesApi.reducer,
    [dictionariesApi.reducerPath]: dictionariesApi.reducer,
    [metadataApi.reducerPath]: metadataApi.reducer,
    [cpApi.reducerPath]: cpApi.reducer,
    [documentsApi.reducerPath]: documentsApi.reducer,
    [garApi.reducerPath]: garApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(counterpartiesApi.middleware)
      .concat(dictionariesApi.middleware)
      .concat(metadataApi.middleware)
      .concat(cpApi.middleware)
      .concat(documentsApi.middleware)
      .concat(garApi.middleware),
});

setupListeners(store.dispatch);