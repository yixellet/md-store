import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cpApi = createApi({
  reducerPath: 'cpApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getAllEntities: builder.query({
      query: () => 'entities',
      transformResponse: (responseData) => responseData.data,
    }),
    getPhoneTypes: builder.query({
      query: () => 'phone_types',
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetAllEntitiesQuery,
  useGetPhoneTypesQuery
} = cpApi;