import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { mdApi } from "../api/mdApi";
import appSlice from './reducers/appSlice';

export const store = configureStore({
  reducer: {
    app: appSlice,
    [mdApi.reducerPath]: mdApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(mdApi.middleware),
});

setupListeners(store.dispatch);