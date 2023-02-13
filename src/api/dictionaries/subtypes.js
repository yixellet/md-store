import { dictionariesApi } from './index';

const subtypes = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getSubtypes: builder.query({
      query: (group) => `subtypes${group ? `?group=${group}` : ''}`,
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getSubtype: builder.query({
      query: (id) => `subtypes/${id}`,
      transformResponse: (responseData) => responseData,
    }),
  }),
});

export const {
  useGetSubtypesQuery,
  useGetSubtypeQuery
} = subtypes;