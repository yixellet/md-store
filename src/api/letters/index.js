import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const lettersApi = createApi({
  reducerPath: 'lettersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/letters' }),
  endpoints: (builder) => ({
    getLetters: builder.query({
      query: () => ``,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getLetter: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (responseData) => responseData,
    }),
    addLetter: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body: body
      })
    }),
  }),
});

export const {
  useGetLettersQuery,
  useGetLetterQuery,
  useAddLetterMutation
} = lettersApi;