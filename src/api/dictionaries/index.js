import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dictionariesApi = createApi({
  reducerPath: 'dictionariesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/dictionaries' }),
  endpoints: (builder) => ({
    getDictionaries: builder.query({
      query: () => '',
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getDictionary: builder.query({
      query: (id) => `${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetDictionariesQuery,
  useGetDictionaryQuery
} = dictionariesApi;