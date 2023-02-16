import { dictionariesApi } from './index';

const storageFormats = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getStorageFormats: builder.query({
      query: (group) => `storage_formats${group ? `?group=${group}` : ''}`,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getStorageFormat: builder.query({
      query: (id) => `storage_formats/${id}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetStorageFormatsQuery,
  useGetStorageFormatQuery
} = storageFormats;