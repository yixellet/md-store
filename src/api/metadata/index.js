import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const metadataApi = createApi({
  reducerPath: 'metadataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/metadata' }),
  endpoints: (builder) => ({
  }),
});

export const {
} = metadataApi;