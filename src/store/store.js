import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { cpApi } from "../api/cpApi";
import { mdApi } from "../api/mdApi";
import appSlice from './reducers/appSlice';
import newMdSlice from "./reducers/newMdSlice";
import newCpSlice from "./reducers/newCpSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    newMd: newMdSlice,
    newCp: newCpSlice,
    [mdApi.reducerPath]: mdApi.reducer,
    [cpApi.reducerPath]: cpApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(mdApi.middleware).concat(cpApi.middleware),
});

setupListeners(store.dispatch);