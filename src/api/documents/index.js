import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const documentsApi = createApi({
  reducerPath: 'documentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/documents' }),
  endpoints: (builder) => ({
    getDocuments: builder.query({
      query: () => ``,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getDocument: builder.query({
      query: (id) => `/${id}`,
      transformResponse: (responseData) => responseData,
    }),
    addDocument: builder.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body: body
      })
    }),
  }),
});

export const {
  useGetDocumentsQuery,
  useGetDocumentQuery,
  useAddDocumentMutation
} = documentsApi;