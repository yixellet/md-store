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
    addPerson: builder.mutation({
      query: body => ({
        url: 'add_person',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    addPersonPhone: builder.mutation({
      query: body => ({
        url: 'add_person_phone',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    addPersonEmail: builder.mutation({
      query: body => ({
        url: 'add_person_email',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
  }),
});

export const {
  useGetAllEntitiesQuery,
  useGetPhoneTypesQuery,
  useAddPersonMutation,
  useAddPersonPhoneMutation,
  useAddPersonEmailMutation
} = cpApi;