import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cpApi = createApi({
  reducerPath: 'cpApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getAllEntities: builder.query({
      query: () => 'entities',
      transformResponse: (responseData) => responseData.data,
    }),
    addPerson: builder.query({
      query: (name, patronym, surname, inn, regaddress_ref, regaddress_text, postaddress_ref, postaddress_text) => 'addperson',
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetAllEntitiesQuery
} = cpApi;