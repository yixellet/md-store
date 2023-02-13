import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const metadataApi = createApi({
  reducerPath: 'metadataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/metadata' }),
  endpoints: (builder) => ({
    getMetadata: builder.query({
      query: () => ``,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
  }),
});

export const {
  useGetMetadataQuery
} = metadataApi;