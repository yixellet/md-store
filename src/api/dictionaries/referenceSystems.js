import { dictionariesApi } from './index';

const referenceSystems = dictionariesApi.injectEndpoints({
  endpoints: (builder) => ({
    getReferenceSystems: builder.query({
      query: () => 'reference_systems',
      transformResponse: (responseData) => responseData.data,
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