import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lettersApi = createApi({
  reducerPath: 'lettersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/letters' }),
  endpoints: (builder) => ({
    getLetterTypes: builder.query({
      query: () => 'types',
      transformResponse: (responseData) => responseData.data,
    }),
    addLetter: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body: body
      })
    })
  }),
});

export const {
  useGetLetterTypesQuery,
  useAddLetterMutation
} = lettersApi;