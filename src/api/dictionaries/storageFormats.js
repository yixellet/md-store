import { dictionariesApi } from './index';

const storageFormats = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getStorageFormats: builder.query({
      query: (group) => `storage_formats${group ? `?group=${group}` : ''}`,
      transformResponse: (responseData) => responseData.data,
    }),
    getStorageFormat: builder.query({
      query: (id) => `storage_formats/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetStorageFormatsQuery,
  useGetStorageFormatQuery
} = storageFormats;