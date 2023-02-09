import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const counterpartiesApi = createApi({
  reducerPath: 'counterpartiesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/counterparties' }),
  endpoints: () => ({}),
});
