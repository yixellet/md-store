import { metadataApi } from './index';

const subtypes = metadataApi.injectEndpoints({
  endpoints: (builder) => ({
    getFields: builder.query({
      query: (group) => `fields${group ? `?group=${group}` : ''}`,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getField: builder.query({
      query: (id) => `subtypes/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetFieldsQuery,
  useGetFieldQuery
} = subtypes;