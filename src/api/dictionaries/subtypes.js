import { dictionariesApi } from './index';

const subtypes = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubtypes: builder.query({
      query: (group) => `subtypes${group ? `?group=${group}` : ''}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getSubtype: builder.query({
      query: (id) => `subtypes/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetStorageFormatsQuery,
  useGetStorageFormatQuery
} = subtypes;