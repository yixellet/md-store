import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lettersApi = createApi({
  reducerPath: 'lettersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    getLetterTypes: builder.query({
      query: () => 'letter_types',
      transformResponse: (responseData) => responseData.data,
    }),
    addLetter: builder.mutation({
      query: (body) => ({
        url: '/add_letter',
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