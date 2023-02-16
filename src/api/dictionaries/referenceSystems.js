import { dictionariesApi } from './index';

const referenceSystems = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getReferenceSystems: builder.query({
      query: () => 'reference_systems',
      transformResponse: (responseData) => {
        const byId = responseData.reduce((byId, dictionary) => {
          byId[dictionary.id] = dictionary
          return byId
        }, {})
        return byId
      },
    }),
    getReferenceSystem: builder.query({
      query: (id) => `reference_systems/${id}`,
      transformResponse: (responseData) => responseData.data,
    }),
  }),
});

export const {
  useGetReferenceSystemsQuery,
  useGetReferenceSystemQuery
} = referenceSystems;